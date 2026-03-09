import './style.css'

// Create class for Actor conditions
class ActorCondition 
{
  constructor
  (
    name,
    description,
    isPermanent,
    isObservable,
    privacyDC
  )
  {
    this.name = name;
    this.description = description;
    this.isPermanent = isPermanent; // bool
    this.isObservable = isObservable; // bool
    this.privacyDC = Math.min(20, Math.max(1, privacyDC)); // clamp int between 1 - 20
  }
};

// Create class for Actor Reputation
class ActorReputation 
{
  constructor
  (
    name,
    description,
    source
  )
  {
    this.name = name;
    this.description = description;
    this.source = source; 
  }
};

// Create class for Actor details
class ActorDetails 
{
  constructor(stats, traits, conditions, reputations)
  {
    this.stats =
    {
      strength: stats.strength,
      dexterity: stats.dexterity,
      constitution: stats.constitution,
      intelligence: stats.intelligence,
      wisdom: stats.wisdom,
      charisma: stats.charisma
    }
    this.traits =
    {
      gameSavvy: traits.gameSavvy,
      honesty: traits.honesty,
      verbosity: traits.verbosity,
      sensitivity: traits.sensitivity,
    }
    this.conditions = conditions; // Class array?
    this.reputations = reputations; // Class
  };

}


// Create Actor object
class Actor 
{
  constructor
  (
    fullName, 
    nickName, 
    book,
    details
  ) 
  
  {
    this.fullName = fullName;
    this.nickName = nickName;
    this.book = book;
    this.details = details; // Class
  }

}

// Roll D20 
function rollDice() {
  return Math.floor(Math.random() * 20) + 1;
};

function startGame() {
  console.log('Starting game...');
  const app = document.getElementById("app");
  app.innerHTML = "<h1>Gutenberg MVP</h1>";

  // Create button for D20 roll
  const rollBtn = document.createElement("button");
  rollBtn.textContent = "Roll D20";
  rollBtn.addEventListener("click", () => 
  {
    var result = rollDice();
    alert(`You rolled a ${result}!`);
  });
  app.appendChild(rollBtn);
}
startGame();




//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
