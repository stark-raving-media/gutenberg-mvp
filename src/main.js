import './style.css'
import { Game } from './game.js'
import { startingActors } from './data/actors.js'
import { 
  attachPics, 
  createActorPageBtn, 
  createRollBtn,
  displayActorStats, 
  getRandomActors,
  //newGame,
  refreshTeamDiv
} from './utils.js'


// Start game
function startGame() {
  
  //var game = newGame();
  var game = new Game(undefined, 2, []);
  game.teamActors = getRandomActors(startingActors, game.teamSize);
  console.log('Team Actors:', game.teamActors);
  console.log('Starting new game...');

  const app = document.getElementById('app');
  app.innerHTML = '<h1>Gutenberg MVP</h1>';

  // Attach pictures and icons to actors
  attachPics(startingActors);

  // Create button for D20 roll
  const rollBtn = createRollBtn(20);
  app.appendChild(rollBtn);
  app.appendChild(document.createElement('hr'));

  // Auto-choose team of 2 actors, display in div
  const teamDiv = document.createElement('div');
  teamDiv.id = 'team';
  teamDiv.innerHTML = '<h2>Your Team</h2>';

  refreshTeamDiv(game, teamDiv);
  
  app.appendChild(teamDiv);
  app.appendChild(document.createElement('hr'));

  // TODO: Create auto-choose team btn
  // TODO: When actor button is double-clicked, add to team
  // TODO: When team member button is double-clicked, remove from team
  // TODO: When team changes, refresh team div
 
  // Create Actor buttons
  for (const actor of Object.values(startingActors)) 
  {
    const actorBtn = createActorPageBtn(actor, game);
    app.appendChild(actorBtn);
  }

  // Create div for Actor stats
  const actorDiv = document.createElement('div');
  actorDiv.id = 'actor-stats';
  app.appendChild(actorDiv);

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
