import { useContext, useEffect, useState } from 'react'
import { callClaude, initChoices, resolve } from '../api.js'
import { GameContext, APIKeyContext } from '../context.js'
import { handleScenario } from '../utils.js'
import { RoundHistory } from '../utils.jsx'
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
    const [loading, setLoading] = useState(false);
    const [choices, setChoices] = useState([]);

    // TODO: Delete this
    useEffect(() =>
    {
        console.log('round:', game.round);
        console.log('roundHistory length:', game.roundHistory.length);
    }, [game]);

    useEffect(() =>
    {
        async function fetchInitialChoices()
        {
            setLoading(true);
            const result = await initChoices(apiKey, game);
            setChoices(result.choices);
            setLoading(false);
        }

        if (apiKey) fetchInitialChoices();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Handle Scenario-specific actions
    handleScenario(game);
    
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

        console.log('choice:' + choice);
        const result = await resolve(apiKey, game, choice);
        console.log('result:', result);

        setGame(
        {
                ...game,
                round: game.round + 1,
                situationScore: result.mainObjscore,
                secObjPassed: result.secObjPassed,
                done: result.done,
                outcome: result.outcome,
                roundHistory: [...game.roundHistory, { narration: result.narration, choice: choice }],
                currentScenario:
                {
                    ...game.currentScenario,
                    situations:
                    [
                        ...game.currentScenario.situations,
                        { description: result.currentSituation }
                    ],
                    currentSituation: game.currentScenario.situations.length
                }
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
                    {/* // TODO: Change to API */}
                    {/* <PlayerInput onSubmit={(text) => console.log(text)} />  */}
                    <RoundHistory />
                    {loading 
                        ? <p className="loading-text">Your fate is being decided...</p>
                        : <PlayerTurnOptions choices={choices} onChoice={handleChoice} />
                    }
                    <RollBtn />
                </div>
            }
        </div>
    );
}
