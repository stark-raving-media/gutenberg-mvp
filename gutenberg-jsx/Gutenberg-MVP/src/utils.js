import { startingActors } from './data/actors.js'

// Attach photos and icons to Actor objects (Defaults to basic pic style)
export function attachPics(actors, iconPath = '/images/icons/', iconType = 'SqPhoto', photoPath = '/images/portraits/', photoType = 'RecPhoto')
{
    for (const actor of Object.values(actors))
    {
        // Remove spaces or apostrophes from nickName
        var name = actor.nickName
            .replace(/['\u2019]/g, '')
            .replace(/\s+/g, '')
        //console.log(name);

        // Build file paths
        actor.icon = iconPath + name + iconType + '.webp';
        actor.portrait = photoPath + name + photoType + '.webp';
    }
}


// Auto-choose team 
// Fisher-Yates shuffle via geeksforgeeks.org
export function getRandomActors(teamSize)
{
    // Filter Actors that can be chosen
    const playableActors = Object.fromEntries(
        Object.entries(startingActors).filter(
            ([, actor]) => actor.playable === true))
    
    // Shuffle Actors array
    const shuffled = Object.entries(playableActors);
    for (let i = shuffled.length - 1; i > 0; i--) 
    {
        const j = 
            Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = 
            [shuffled[j], shuffled[i]];
    }
    
    // Return array of team's Actors
    return Object.values(Object.fromEntries(shuffled.slice(0, teamSize)));
}


// Handle Scenario-specific actions
export function handleScenario(game)
{
    // Set opposition Actors to not playable
    for (var i = 0; i < game.currentScenario.opposition.length; i++)
        game.currentScenario.opposition[i].playable = false;
}


// Reset game on End Game 
export function resetGame({game, setGame})
{
    // Reset all played Actors
    setGame({
        ...game,
        teamActors: game.teamActors.map((actor) => ({
            ...actor,
            playable: true,
            FAstrikes: 0
        }))
    })

    // TODO: Handle Scenario specific actions
}


// Roll Die 
export function rollDie(sides = 20) 
{
  return Math.floor(Math.random() * sides) + 1;
};


// Add/remove actor from team
export function toggleTeamActor(actor, game, setGame)
{
    // If team includes actor, remove
    if (game.teamActors.includes(actor))
    {
        setGame({
            ...game,
            teamActors: game.teamActors.filter((a) => a != actor)
        })
    }    
    // Else add to team
    else if (game.teamActors.length < game.teamSize)
    {
        setGame({
            ...game,
            teamActors: [...game.teamActors, actor]
        })
    }
    
    console.log(game.teamActors);
}
