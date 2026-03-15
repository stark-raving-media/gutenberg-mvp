

// Roll Die 
export function rollDie(sides = 20) 
{
  return Math.floor(Math.random() * sides) + 1;
};


// Display Actor stats in div
export function displayActorStats(actor, div) 
{
  var statDisplay = '<h2>' + actor.nickName + '</h2>';
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