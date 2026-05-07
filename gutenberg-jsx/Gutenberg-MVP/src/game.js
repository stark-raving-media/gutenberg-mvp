import { startingActors } from "./data/actors";
import { getRandomActors, getRandomScenario, setOppositionUnplayable } from "./utils";

// Create Game object
export function newGame()
{
    // Reset all Actors to playable
    Object.values(startingActors).forEach(actor => actor.playable = true);

    const game = 
    {
        playerName: '',
        teamSize: 2,
        teamActors: getRandomActors(2),
        currentScenario: getRandomScenario(),
        loquacity: 'Standard',
        round: 1,
        roundHistory: [],
        situationScore: 50,
        mainObjScore: 0,
        secObjPassed: null,
        done: false,
        outcome: null,
        chatLog: []
    };

    // Set opposition Actors to unplayable
    setOppositionUnplayable(game.currentScenario);

    return game;
}