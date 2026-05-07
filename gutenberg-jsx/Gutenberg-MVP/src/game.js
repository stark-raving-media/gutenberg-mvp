// Create Game object

export class Game
{
    constructor
    (
        playerName,
        teamSize,
        teamActors = [],
        currentScenario, // Scenario object
    )

    {
        this.playerName = playerName;
        this.teamSize = teamSize;
        this.teamActors = teamActors;
        this.currentScenario = currentScenario;
        this.loquacity = "Standard";
        this.round = 1; // Round number (Starts at 1)
        this.roundHistory = []; // Holds previous rounds (moves)
        this.situationScore = 50; // Starts neutral
        this.mainObjScore = 0; // Main objective
        this.secObjPassed = null; // Second objective
        this.done = false; // Game over
        this.outcome = null; // Game results (win/lose)
        this.chatLog = []; // Game's chat history with Claude
    };
};