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
        this.round = 1;
        this.roundHistory = []; // Holds previous rounds (moves)
        this.situationScore = 50; // Starts neutral
        this.mainObjScore = 0;
        this.secObjPassed = null;
        this.done = false;
        this.outcome = null;
    };
};