import './style.css'

// Roll D20 
function rollD20() {
  return Math.floor(Math.random() * 20) + 1;
};


// Start game
function startGame() {
  console.log('Starting game...');
  const app = document.getElementById("app");
  app.innerHTML = "<h1>Gutenberg MVP</h1>";

  // Create button for D20 roll
  const rollBtn = document.createElement("button");
  rollBtn.textContent = "Roll D20";
  rollBtn.addEventListener("click", () => 
  {
    var result = rollD20();
    alert(`You rolled a ${result}!`);
  });
  app.appendChild(rollBtn);
};

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
