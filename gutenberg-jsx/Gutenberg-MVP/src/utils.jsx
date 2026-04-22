import { rollDie } from "./utils";


// Create button for Die roll
export function RollBtn({sides = 20}) 
{
    //const rollBtn = document.createElement("button");
    //rollBtn.textContent = 'Roll D' + sides;
    //rollBtn.addEventListener('click', () => 
    // TODO: Make this more than an alert
    function handleClick()
    {
      var result = rollDie(sides);
      alert('You rolled a ' + result + '!');
    }//);
    //return rollBtn;
    return <button onClick={handleClick}>Roll D{sides}</button>
}