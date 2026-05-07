import { testScenarios } from "./data/scenarios";
import { getRandomActors } from "./utils";

// Create Game object
export function newGame()
{
    return {
        playerName: '',
        teamSize: 2,
        teamActors: getRandomActors(2),
        // TODO: Make getRandomScenario 
        currentScenario: testScenarios.theYellowBeetle,
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
}
// TODO: Clean this up later
// export class Game 
// {
//     //constructor()

//     {
//         this.playerName = '';
//         this.teamSize = 2;
//         this.teamActors = getRandomActors(this.teamSize);
//         // TODO: Make getRandomScenario 
//         this.currentScenario = testScenarios.theYellowBeetle;
//         this.loquacity = "Standard";
//         this.round = 1; // Round number (Starts at 1)
//         this.roundHistory = []; // Holds previous rounds (moves)
//         this.situationScore = 50; // Starts neutral
//         this.mainObjScore = 0; // Main objective
//         this.secObjPassed = null; // Second objective
//         this.done = false; // Game over
//         this.outcome = null; // Game results (win/lose)
//         this.chatLog = []; // Game's chat history with Claude
//     };
// };