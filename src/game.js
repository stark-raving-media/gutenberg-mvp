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
    };
};