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


// TODO: Convert to JSX
// Display Scenario details
export function displayScenario(scenario)
{
    const scenarioDiv = document.getElementById('scenario-div');
    scenarioDiv.style.textAlign = 'left';
    scenarioDiv.innerHTML = '';
    var text = '<h2>' + scenario.scenarioName + '</h2>' + '<br>';
    text += scenario.description + '<br></br>';
    text += scenario.scene + '<br><br>';
    text += 'Main Objective: ' + scenario.mainObj + '<br><br>';
    text += 'Secondary Objective: ' + scenario.secObj + '<br><br>';
    text += 'RULES:' + '<br><ul>';
    for (var i = 0; i < scenario.rules.length; i++)
    {
        text += '<li>' + scenario.rules[i];
    }
    scenarioDiv.innerHTML = text;
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


// TODO: Check if update/refactor needed
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
    // for (var i = 0; i < game.teamActors.length; i++)
    // {
    //     game.teamActors[i].playable = true;
    //     game.teamActors[i].FAstrikes = 0;
    // }

    // Handle Scenario specific actions
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
        //game.teamActors.splice(game.teamActors.indexOf(actor), 1);
        setGame({
            ...game,
            teamActors: game.teamActors.filter((a) => a != actor)
        })
    }    
    // Else add to team
    else if (game.teamActors.length < game.teamSize)
        //game.teamActors.push(actor);
    {
        setGame({
            ...game,
            teamActors: [...game.teamActors, actor]
        })
    }
    
    console.log(game.teamActors);
}
