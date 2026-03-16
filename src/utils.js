//import { Game } from './game.js'

// Roll Die 
export function rollDie(sides = 20) 
{
  return Math.floor(Math.random() * sides) + 1;
};


// Attach photos and icons to Actor objects (Defaults to basic pic style)
export function attachPics(actors, iconPath = '/images/icons/', iconType = 'SqPhoto', photoPath = '/images/portraits/', photoType = 'RecPhoto')
{
    for (const actor of Object.values(actors))
    {
        actor.icon = iconPath + actor.id + iconType + '.webp';
        actor.portrait = photoPath + actor.id + photoType + '.webp';
    }
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


// Add/remove actor from team
export function toggleTeamActor(actor, game)
{
    if (game.teamActors.includes(actor))
    {
        game.teamActors.splice(game.teamActors.indexOf(actor), 1);
    }    

    else
        game.teamActors.push(actor);
    console.log(game.teamActors);

    // Refresh teamDiv
    var teamDiv = document.getElementById('team');
    refreshTeamDiv(game, teamDiv);
    //return game.teamActors;
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


// Auto-choose team 
// Fisher-Yates shuffle via geeksforgeeks.org
export function getRandomActors(actors, size = 2)
{
        const shuffled = Object.entries(actors);
        for (let i = shuffled.length - 1; i > 0; i--) 
        {
            const j = 
                Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = 
                [shuffled[j], shuffled[i]];
        }
    // Return array of team's Actors
    return Object.values(Object.fromEntries(shuffled.slice(0, size)));
}


// Refresh teamDiv with updated Actors
export function refreshTeamDiv(game, teamDiv)
{
    teamDiv.innerHTML = '';
    for (var i = 0; i < game.teamActors.length; i++) 
    {
        const actorBtn = createActorPageBtn(game.teamActors[i], game);
        teamDiv.appendChild(actorBtn);
    }
}