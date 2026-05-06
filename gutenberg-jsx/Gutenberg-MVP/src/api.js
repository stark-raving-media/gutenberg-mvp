
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


// 
export function worldStateBlock(game)
{
    // Text block w/ team Actor details
    const team = game.teamActors.map((actor) =>
        `${actor.fullName} (${actor.originBook.title})
        STR ${actor.details.stats.strength} DEX ${actor.details.stats.dexterity} CON ${actor.details.stats.constitution}
        INT ${actor.details.stats.intelligence} WIS ${actor.details.stats.wisdom} CHA ${actor.details.stats.charisma}
        Aura: ${actor.details.aura}`
    ).join('\n\n');
console.log(game.currentScenario.opposition);
    const opposition = game.currentScenario.opposition.map((actor) =>
        `${actor.fullName} (${actor.originBook.title})`
    ).join('\n');
    

    const scenario = game.currentScenario;
    const currentSituation = scenario.situations[scenario.currSituation];


    // Build block with Scenario & team details 
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

        PLAYER TEAM:
        ${team}

        OPPOSITION: 
        ${opposition}
            `.trim();
}