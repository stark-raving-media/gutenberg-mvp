import { useContext, useEffect, useState } from 'react'
import { callClaude, initChoices, resolve } from '../api.js'
import { GameContext, APIKeyContext } from '../context.js'
import { OutcomeScreen, RoundHistory } from '../utils.jsx'
import { 
    ActorsDiv,
    ActorSheet,
    APIKeyForm,
    AutoPickTeamBtn,
    PlayerTurnOptions,
    RollBtn, 
    Scenario,
    TeamDiv 
} from '../utils.jsx'


export function Gameplay()
{
    // Get context
    const { game, setGame } = useContext(GameContext);
    const { apiKey } = useContext(APIKeyContext);

    // States
    const [loading, setLoading] = useState(false); // Waiting for API call result
    const [choices, setChoices] = useState([]); // Choices array for each Round

    useEffect(() =>
    {
        async function fetchInitialChoices()
        {
            // If choices are already set, do not fetch
            if (choices.length > 0) 
                return;

            setLoading(true);
            const result = await initChoices(apiKey, game);
            setChoices(result.choices);
            setLoading(false);
        }

        if (apiKey) fetchInitialChoices();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    // TODO: Make End Game btn (Quit) and/or trigger this at end of game
    // End game, reset
    //resetGame(game, setGame);

    // Claude test
    // TODO: DELETE THIS
    async function testClaude()
    {
        const response = await callClaude(
            apiKey,
            [{ role: 'user', content: 'Say hello in one sentence.' }]
        );
        console.log(response);

        const result = await resolve(apiKey, game, "We run the red light and head west toward the Haight as fast as the Beetle will go.");
        console.log('narration:', result.narration);
        console.log('situation:', result.currentSituation);
        console.log('situationScore:', result.situationScore);
        console.log('done:', result.done);
    }

    // Update Game after player's choice of next move
    async function handleChoice(choice)
    {
        setLoading(true);

        //console.log('choice:' + choice);
        const {result, userMessage, assistantMessage} = await resolve(apiKey, game, choice);
        
        // End conditions
        const isOver = result.done || result.situationScore <= 5 || result.mainObjscore >= 100;
        //console.log('result:', result);

        setGame(
        {
                ...game,
                round: game.round + 1,
                situationScore: result.situationScore,
                mainObjScore: result.mainObjScore,
                secObjPassed: result.secObjPassed,
                done: isOver, // End conditions
                outcome: result.outcome,
                roundHistory: [...game.roundHistory, {
                    narration: result.narration, 
                    choice: choice,
                    situationScore: result.situationScore
                }],
                currentScenario:
                {
                    ...game.currentScenario,
                    situations:
                    [
                        ...game.currentScenario.situations,
                        { description: result.currentSituation }
                    ],
                    currentSituation: game.currentScenario.situations.length 
                },
                chatLog: [...game.chatLog, userMessage, assistantMessage],
        })

        setChoices(result.choices);
        setLoading(false);
    }

    return (
        <div>
            <h1>Gutenberg MVP</h1>
            {/* Claude test (DELETE LATER) */}
            <button onClick={testClaude}>Test Claude</button>
            {/* Ask for API Key, or show Game */}
            {!apiKey 
                ? <APIKeyForm />
                : <div>
                    <Scenario scenario={game.currentScenario} />
                    <hr />
                    <RoundHistory />
                    {game.done
                    ? <OutcomeScreen outcome={game.outcome} gameWon={game.mainObjscore >= 100} />
                    : <div>
                        {loading 
                            ? <p className="loading-text">Your fate is being decided...</p>
                            : <PlayerTurnOptions choices={choices} onChoice={handleChoice} />
                        }
                    </div>
                    }
                    <RollBtn />
                </div>
            }
        </div>
    );
}
