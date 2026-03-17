import './style.css'
import { Game } from './game.js'
import { startingActors } from './data/actors.js'
import { testScenarios } from './data/scenarios.js'
import { 
  attachPics, 
  createTeamPickBtn,
  createRollBtn,
  getRandomActors,
  refreshActorsDiv,
  refreshTeamDiv,
  displayScenario,
  resetGame
} from './utils.js'

// TODO: Test testScenarios
// TODO: Handle actions for Scenarios (Ex: In Scen3, toggle Quixote playable to false. On end, toggle back.)

// Start game
function startGame() {
  
  // Game settings
  const playerName = '';
  const teamSize = 2
  const teamActors = getRandomActors(teamSize);
  const currentScenario = testScenarios.theYellowBeetle;

  // Create new Game
  const game = new Game(playerName, teamSize, teamActors, currentScenario); 
  console.log('Team Actors:', game.teamActors);
  console.log('Starting new game...');

  // Attach pictures and icons to actors
  attachPics(startingActors);

  // Get main app div
  const app = document.getElementById('app');
  app.innerHTML = '<h1>Gutenberg MVP</h1>';
  app.appendChild(document.createElement('hr'));

  // Create test scenario div
  const scenarioDiv = document.createElement('div');
  scenarioDiv.id = 'scenario-div';
  app.appendChild(scenarioDiv);
  displayScenario(game.currentScenario, scenarioDiv);

  app.appendChild(document.createElement('hr'));

  // Create button for D20 roll
  const rollBtn = createRollBtn(20);
  app.appendChild(rollBtn);
  app.appendChild(document.createElement('hr'));

  // Display team Actors
  const teamDiv = document.createElement('div');
  teamDiv.id = 'team-div';
  app.appendChild(teamDiv);
  refreshTeamDiv(game);

  // Create button for auto-choose new team
  const teamPickBtn = createTeamPickBtn(game);
  app.appendChild(teamPickBtn);
  
  app.appendChild(document.createElement('hr'));
 
  // Create Actor buttons
  const actorsDiv = document.createElement('div');
  actorsDiv.id = 'actors-div';
  app.appendChild(actorsDiv);
  refreshActorsDiv(game, startingActors);

  // Create div for Actor stats
  const actorDiv = document.createElement('div');
  actorDiv.id = 'actor-stats';
  app.appendChild(actorDiv);

  // End game, reset
  resetGame(game);
};

startGame();