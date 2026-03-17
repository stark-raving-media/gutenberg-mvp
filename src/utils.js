import { startingActors } from './data/actors.js'

// Attach photos and icons to Actor objects (Defaults to basic pic style)
export function attachPics(actors, iconPath = '/images/icons/', iconType = 'SqPhoto', photoPath = '/images/portraits/', photoType = 'RecPhoto')
{
    for (const actor of Object.values(actors))
    {
        actor.icon = iconPath + actor.id + iconType + '.webp';
        actor.portrait = photoPath + actor.id + photoType + '.webp';
    }
}


// Create buttons for Actor stat pages
export function createActorPageBtn(actor, game)
{
    const actorBtn = document.createElement('button');
    actorBtn.innerHTML = '<img src="' + actor.icon 
        + '" alt="' + actor.fullName + ' icon" width="100" height="100"><br>'
        + actor.nickName;

    // On click, display Actor stats in div
    actorBtn.addEventListener('click', () => 
    {
      const actorDiv = document.getElementById('actor-stats');
      displayActorStats(actor, actorDiv);
    });

    // On double-click, add/remove Actor to team
    actorBtn.addEventListener('dblclick', () => 
    {
        toggleTeamActor(actor, game);
    });   
    return actorBtn;
}


// Create button for Die roll
export function createRollBtn(sides = 20) 
{
    const rollBtn = document.createElement("button");
    rollBtn.textContent = 'Roll D' + sides;
    rollBtn.addEventListener('click', () => 
    {
      var result = rollDie(sides);
      alert('You rolled a ' + result + '!');
    });
    return rollBtn;
}


export function createTeamPickBtn(game)
{
    const teamPickBtn = document.createElement('button');
    teamPickBtn.textContent = 'Auto-Choose Team of ' + game.teamSize;
    teamPickBtn.addEventListener('click', () =>
    {
        game.teamActors = getRandomActors(game.teamSize);
        
        // Refresh divs
        refreshTeamDiv(game);
        refreshActorsDiv(game);
    });
    return teamPickBtn;
}


// Display Actor stats in div
export function displayActorStats(actor, div) 
{
  var statDisplay = '<hr> <h2>' + actor.nickName + '</h2>';
  statDisplay += '<img src="' + actor.portrait + '" alt="' + actor.fullName + ' icon"><br>';
  statDisplay += actor.fullName + ' - ' + actor.originBook.title +'<hr>';
  var s = actor.details.stats;
  var t = actor.details.traits;
  statDisplay += 'STR: ' + s.strength;
  statDisplay += ' DEX: ' + s.dexterity + '<br>';
  statDisplay += 'CON: ' + s.constitution;
  statDisplay += ' INT: ' + s.intelligence + '<br>';
  statDisplay += 'WIS: ' + s.wisdom;
  statDisplay += ' CHA: ' + s.charisma + '<hr>';
  statDisplay += 'Game Savvy: ' + t.gameSavvy + ' --- ';
  statDisplay += ' Honesty: ' + t.honesty + '<br>';
  statDisplay += 'Verbosity: ' + t.verbosity + ' --- ';
  statDisplay += ' Sensitivity: ' + t.sensitivity + '<hr>';
  statDisplay += 'Aura: ' + actor.details.aura + '<hr>';

  div.innerHTML = statDisplay;
}


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
    const playableActors = Object.fromEntries
    (
        Object.entries(startingActors).filter(([key, actor]) => actor.playable === true)
    )
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


// Refresh teamDiv with updated Actors
export function refreshTeamDiv(game)
{
    var teamDiv = document.getElementById('team-div');
    teamDiv.innerHTML = '';
    teamDiv.innerHTML = '<h2>Your Team</h2>';
    for (var i = 0; i < game.teamActors.length; i++) 
    {
        const actorBtn = createActorPageBtn(game.teamActors[i], game);
        teamDiv.appendChild(actorBtn);
    }
}


// Refresh actorsDiv
export function refreshActorsDiv(game)
{
    var actorsDiv = document.getElementById('actors-div');
    actorsDiv.innerHTML = '';
    for (const actor of Object.values(startingActors)) 
    {
        // If actor not in current team:
        if (!game.teamActors.includes(actor) && actor.playable == true)
        {
            const actorBtn = createActorPageBtn(actor, game);
            actorsDiv.appendChild(actorBtn);
        }
    }
}


// Reset game on end 
export function resetGame(game)
{
    // Reset all played Actors
    for (var i = 0; i < game.teamActors.length; i++)
    {
        game.teamActors[i].playable = true;
        game.teamActors[i].FAstrikes = 0;
    }

    // Handle Scenario specific actions
}


// Roll Die 
export function rollDie(sides = 20) 
{
  return Math.floor(Math.random() * sides) + 1;
};


// Add/remove actor from team
export function toggleTeamActor(actor, game)
{
    if (game.teamActors.includes(actor))
    {
        game.teamActors.splice(game.teamActors.indexOf(actor), 1);
    }    

    else
        if (game.teamActors.length < game.teamSize)
            game.teamActors.push(actor);
    console.log(game.teamActors);

    // Refresh divs
    refreshTeamDiv(game);
    refreshActorsDiv(game);
}
