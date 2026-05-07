import { getBookTitle } from './utils.js'
// Send API call to Claude, return response
export async function callClaude(apiKey, messages, systemPrompt = '')
{
    const response = await fetch('https://api.anthropic.com/v1/messages',
    {
        method: 'POST',
        headers:
        {
            'content-type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            // API exposed in-browser for MVP/Final Project ONLY
            'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify(
        {
            model: 'claude-haiku-4-5',
            max_tokens: 1024,
            system: systemPrompt,
            messages: messages
        })
    })

    const data = await response.json();
    return data.content[0].text;
}


// Get 3 initial choices for the beginning Scenario
export async function initChoices(apiKey, game)
{
    const systemPrompt = 
        `You are the GM of a literary tactical narrative game called the Gutenberg Engine.
        Generate exactly 3 opening action choices for the player based on the current situation.
        Always return valid JSON only. No markdown, no preamble.`;

    const prompt = 
        `${worldStateBlock(game)}

        Generate 3 possible opening actions for the player's team given the current situation.
        Choices should be specific to the scene, varied in approach, and feel true to the characters.

        Respond with JSON only:
        {
            "choices": ["string", "string", "string"] - each choice must be 8 words or fewer, action-focused, no explanations or risk assessments 
        }`;

    const raw = await callClaude(
        apiKey,
        [{ role: 'user', content: prompt }],
        systemPrompt
    );

    return parseJSON(raw);
}

// Parse Claude response
export function parseJSON(raw)
{
    // Try to parse directly
    try
    {
        return JSON.parse(raw);    
    }
    // Else use regex to extract from raw
    catch
    {
        const match = raw.match(/\{[\s\S]*\}/);
        if (match)
        {
            try
            {
                return JSON.parse(match[0]);
            }
            catch
            {
                throw new Error('Could not parse JSON: ' + raw);
            }
        }
        throw new Error('No JSON found: ' + raw);
    }
}


// Create detail text block to send to Claude for game progression
export function worldStateBlock(game)
{
    // Text block w/ team Actor details
    const team = game.teamActors.map((actor) =>
        `${actor.fullName} (${getBookTitle(actor)})
        STR ${actor.details.stats.strength} DEX ${actor.details.stats.dexterity} CON ${actor.details.stats.constitution}
        INT ${actor.details.stats.intelligence} WIS ${actor.details.stats.wisdom} CHA ${actor.details.stats.charisma}
        Aura: ${actor.details.aura}`
    ).join('\n\n');

    const opposition = game.currentScenario.opposition.map((actor) =>
        `${actor.fullName} (${getBookTitle(actor)})` // If no book, Unknown
    ).join('\n');
    

    const scenario = game.currentScenario;
    const currentSituation = scenario.situations[scenario.currSituation];

    // Build text block with Scenario & team details 
    return `
        SCENARIO: ${scenario.scenarioName}
        DESCRIPTION: ${scenario.description}
        CURRENT SCENE: ${scenario.scene}
        CURRENT SITUATION: ${currentSituation ? currentSituation.description : 'None'}
        ROUND: ${game.round ?? 1}

        MAIN OBJECTIVE: ${scenario.mainObj}
        SECONDARY OBJECTIVE: ${scenario.secObj}

        VISIBLE RULES:
        ${scenario.rules.join('\n')}

        HIDDEN RULES (GM ONLY - DO NOT REVEAL TO PLAYER):
        ${scenario.hiddenRules.join('\n')}

        PLAYER TEAM:
        ${team}

        OPPOSITION: 
        ${opposition}
            `.trim();
}


// Build text prompt for Claude API call
export async function resolve(apiKey, game, playerIntent)
{
    // Basic prompt with worldState
    const systemPrompt = 
        `You are the GM of a literary tactical narrative game called the Gutenberg Engine.
        You narrate what happens when the player's team takes action inside a book world.
        The player's team are literary characters from public domain texts operating inside another book's world.
        Math and dice are handled by the browser. Your job is narration and world state updates only.
        Never invent dice rolls or override the player's stated intent. 
        The mission should reach a conclusion within 6-8 rounds under normal circumstances.
        As rounds increase, escalate the situation's urgency and consequences proportionally.
        By round 8, the situation should be approaching resolution one way or another.
        After round 10, force a conclusion — the city's collapse, the objective's success or failure, or an unavoidable outcome.
        Always return valid JSON only. No markdown, no preamble.

        CURRENT WORLD STATE:
        ${worldStateBlock(game)}`;

    // Loquacity Setting
    const loquacitySetting = 
    {
        "Short": "2 short paragraphs, 2 sentences each",
        "Standard": "3-4 short paragraphs, 2-3 sentences each",
        "Wordy": "4-5 paragraphs, 3-4 sentences each"
    }
    const narrationLength = loquacitySetting[game.loquacity] || loquacitySetting["Standard"];

    const prompt = 
       // `${worldStateBlock(game)}
        `ROUND ${game.round}
        PLAYER INTENT: ${playerIntent}

        Respond with JSON only:
        {
            "narration": "string — what happens this round, ${narrationLength}, paragraphs separated by \\n\\n",
            "currentSituation": "string — updated situation description, present tense",
            "situationScore": "number 0-100, current mission health",
            "mainObjScore": "number 0-100. Use exactly 100 if the main objective is fully achieved.",
            "secObjPassed": "secObjPassed": "boolean — only evaluate when done is true. Did the team achieve this secondary objective: '${game.currentScenario.secObj}'? Otherwise return null",
            "done": "boolean — true if mission is complete or failed",
            "outcome": "string or null — only if done is true",
            "choices": "array of exactly 3 strings, 8 words or fewer - possible actions for the player this round, specific to the current situation. Never suggest actions that have already been taken in previous rounds."
        }`;

    const newMessage = { role: 'user', content: prompt };
    const messages = [...game.chatLog, newMessage];
    const raw = await callClaude(apiKey, messages, systemPrompt)

    return {
        result: parseJSON(raw),
        userMessage: newMessage,
        assistantMessage: { role: 'assistant', content: raw}
    };
}