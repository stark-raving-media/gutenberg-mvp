

// Roll Die 
export function rollDie(sides = 20) 
{
  return Math.floor(Math.random() * sides) + 1;
};


// Attach photos and icons to Actor objects (Defaults to basic pic style)
export function attachPics(actors, iconPath = '/images/icons/', iconType = 'SqPhoto', photoPath = '/images/photos/', photoType = 'RecPhoto')
{
    actors.forEach ((actor) =>
    {
        actor.icon = iconPath + actor.nickName + iconType + '.webp';
        actor.picture = photoPath + actor.nickName + photoType + '.webp';
    })
}


// Create button for Die roll
export function createRollBtn(sides = 20) 
{
    const rollBtn = document.createElement("button");
    rollBtn.textContent = `Roll D${sides}`;
    rollBtn.addEventListener("click", () => 
    {
      var result = rollDie(sides);
      alert(`You rolled a ${result}!`);
    });
    return rollBtn;
}


// Display Actor stats in div
export function displayActorStats(actor, div) 
{
  var statDisplay = '<hr> <h2>' + actor.nickName + '</h2>';
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