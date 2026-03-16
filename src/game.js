// Create Game object

export class Game
{
    constructor
    (
        playerName,
        teamSize,
        teamActors = []
    )

    {
        this.playerName = playerName;
        this.teamSize = teamSize;
        this.teamActors = teamActors;
    };
};