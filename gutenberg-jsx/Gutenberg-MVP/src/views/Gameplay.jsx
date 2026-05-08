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
import { useNavigate } from 'react-router-dom'


export function Gameplay()
{
    // Get context
    const { game, setGame } = useContext(GameContext);
    const { apiKey } = useContext(APIKeyContext);

    // States
    const [loading, setLoading] = useState(false); // Waiting for API call result
    const [choices, setChoices] = useState([]); // Choices array for each Round
    const [gameWon, setGameWon] = useState(false); // Needed for end screen to display properly (async issues)

    // Re-route /gameplay to Home if no api key entered
    const navigate = useNavigate();

    useEffect(() =>
    {
        if (!apiKey)
            navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiKey]);

    // Get initial Player choices for game Scenario Round 1
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
        
        const {result, userMessage, assistantMessage} = await resolve(apiKey, game, choice);
        //console.log('choice:' + choice);
        //console.log('result:', result);

        // End conditions
        const isOver = result.done || result.situationScore <= 5 || result.mainObjScore >= 100;
        const won = result.mainObjScore >= 100;
        if (isOver)
            setGameWon(won);   

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
                    ? <OutcomeScreen 
                        outcome={game.outcome} 
                        gameWon={gameWon} 
                        secObjPassed={game.secObjPassed} 
                    />
                    : <div>
                        {/* Loading API - If beginning, "scan" else "deciding" text */}
                        {loading 
                            ? <p className="loading-text">{choices.length == 0 ? 'Scanning the situation...' : 'Your fate is being decided...'}</p>
                            : <PlayerTurnOptions choices={choices} onChoice={handleChoice} />
                        }
                    </div>
                    }
                </div>
            }
        </div>
    );
}
