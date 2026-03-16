import './style.css'
import { Game } from './game.js'
import { startingActors } from './data/actors.js'
import { 
  attachPics, 
  createActorPageBtn, 
  createRollBtn,
  getRandomActors,
  refreshActorsDiv,
  refreshTeamDiv
} from './utils.js'

// TODO: Create auto-choose team btn
// TODO: Team size validation for add/remove members


// Start game
function startGame() {
  
  var game = new Game(undefined, 2, []); // playerName, teamSize, teamActors
  game.teamActors = getRandomActors(startingActors, game.teamSize);
  console.log('Team Actors:', game.teamActors);
  console.log('Starting new game...');

  // Attach pictures and icons to actors
  attachPics(startingActors);

  // Get main app div
  const app = document.getElementById('app');
  app.innerHTML = '<h1>Gutenberg MVP</h1>';

  // Create button for D20 roll
  const rollBtn = createRollBtn(20);
  app.appendChild(rollBtn);
  app.appendChild(document.createElement('hr'));

  // Display team Actors
  const teamDiv = document.createElement('div');
  teamDiv.id = 'team';
  app.appendChild(teamDiv);
  refreshTeamDiv(game);
  
  app.appendChild(document.createElement('hr'));
 
  // Create Actor buttons
  const actorsDiv = document.createElement('div');
  actorsDiv.id = 'actorsDiv';
  app.appendChild(actorsDiv);
  refreshActorsDiv(game, startingActors);

  // Create div for Actor stats
  const actorDiv = document.createElement('div');
  actorDiv.id = 'actor-stats';
  app.appendChild(actorDiv);

};

startGame();