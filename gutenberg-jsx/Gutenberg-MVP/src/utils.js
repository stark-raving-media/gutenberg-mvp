import { startingActors } from './data/actors.js'
import { testScenarios } from './data/scenarios.js';

// TODO: Change function name to attachActorPics
// Attach photos and icons to Actor objects (Defaults to basic pic style)
export function attachPics(
    actors, 
    iconPath = import.meta.env.BASE_URL + '/images/icons/', // Update path for deploy
    iconType = 'SqPhoto', 
    photoPath = import.meta.env.BASE_URL + '/images/portraits/', 
    photoType = 'RecPhoto'
)
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


// Attach images to Scenario cards
export function attachScenarioPics(scenarios, path = import.meta.env.BASE_URL + 'images/scenarios/')
{
    for (var scenario of Object.values(scenarios))
    {
        var name = scenario.scenarioName
            .replace(/['\u2019]/g, '')
            .replace(/\s+/g, '');
        scenario.image = path + name + '.webp';
        //console.log(scenario.image);
    }
}

// Auto-choose team 
// Fisher-Yates shuffle via geeksforgeeks.org
export function getRandomActors(teamSize)
{
    // Filter Actors that can be chosen
    const playableActors = Object.fromEntries(
        Object.entries(startingActors).filter(
            ([, actor]) => actor.playable && !actor.isOpposition))
    
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


// Get Actor's book title
export function getBookTitle(actor)
{
    if (!actor.originBook) 
        return 'Unknown';
    return actor.originBook.title;
}

// TODO: Deprecated - DELETE
// Translate momentum of current Round based on previous Round's situation score
export function getMomentumLabel(current, previous)
{
    if (previous === undefined) return 'Holding';
    const delta = current - previous;
    if (delta <= -15) return 'Collapsing';
    if (delta <= -8) return 'Deteriorating';
    if (delta <= -1) return 'Slipping';
    if (delta === 0) return 'Holding';
    if (delta <= 7) return 'Steadying';
    if (delta <= 14) return 'Improving';
    return 'Surging';
}


// Get random Scenario from scenarios.js
export function getRandomScenario()
{
    const scenarios = Object.values(testScenarios);
    return scenarios[Math.floor(Math.random() * scenarios.length)];
}


// Translate score's bracket to descriptive word
export function getSituationScoreLabel(danger)
{
    if (danger <= 5) return 'Fantastic';
    if (danger <= 10) return 'Sublime';
    if (danger <= 15) return 'Triumphant';
    if (danger <= 20) return 'Commanding';
    if (danger <= 25) return 'Dominant';
    if (danger <= 30) return 'Strong';
    if (danger <= 35) return 'Favorable';
    if (danger <= 40) return 'Stable';
    if (danger <= 45) return 'Watchful';
    if (danger <= 50) return 'Concerning';
    if (danger <= 55) return 'Troubled';
    if (danger <= 60) return 'Tense';
    if (danger <= 65) return 'Fraught';
    if (danger <= 70) return 'Strained';
    if (danger <= 75) return 'Precarious';
    if (danger <= 80) return 'Desperate';
    if (danger <= 85) return 'Grave';
    if (danger <= 90) return 'Dire';
    if (danger <= 95) return 'Hopeless';
    return 'Doomed';
}


// TODO: Deprecated. Delete if not used?
// Handle Scenario-specific actions
export function handleScenario(game)
{
    // Set opposition Actors to not playable
    for (var i = 0; i < game.currentScenario.opposition.length; i++)
        game.currentScenario.opposition[i].playable = false;
}


// Reset game on End Game 
// TODO: Deprecated - DELETE
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


// Set game Scenario's opposition Actors to unplayable
export function setOppositionUnplayable(scenario)
{
    scenario.opposition.forEach(actor => 
    {
        if (actor)
            actor.playable = false
    });
}


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
    //console.log(game.teamActors);
}
