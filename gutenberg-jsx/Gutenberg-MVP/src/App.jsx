import { useState } from 'react'
import './App.css'

//import './style.css'
import { Game } from './game.js'
import { startingActors } from './data/actors.js'
import { testScenarios } from './data/scenarios.js'
import { 
  attachPics, 
  getRandomActors,
//   //displayScenario,
//   resetGame,
  handleScenario
 } from './utils.js'
import { 
  ActorsDiv,
  ActorSheet,
  AutoPickTeamBtn,
  RollBtn, 
  TeamDiv 
} from './utils.jsx'

// TODO: Test testScenarios
// TODO: Create character sheet w/ JSX Components

function App() {


// // Start game
// function startGame() {
  
  // Game settings
  const playerName = '';
  const teamSize = 2
  const teamActors = getRandomActors(teamSize);
  const currentScenario = testScenarios.theYellowBeetle;

  // Set states
  // New Game
  const [game, setGame] = useState(() =>
  {
    return new Game(
      playerName,
      teamSize,
      teamActors,
      currentScenario
    )
  })
  console.log('Team Actors:', game.teamActors);
  console.log('Starting new game...');

  // Other states
  const [selectedActor, setSelectedActor] = useState(game.teamActors[0]);

  // Attach pictures and icons to actors
  attachPics(startingActors);

//   // Create test scenario div
//   // const scenarioDiv = document.createElement('div');
//   // scenarioDiv.id = 'scenario-div';
//   // app.appendChild(scenarioDiv);
//   // displayScenario(game.currentScenario);
//   // app.appendChild(document.createElement('hr'));

  // Handle Scenario-specific actions
  handleScenario(game);

//   // End game, reset
//   resetGame(game);
// };

// startGame();

  return (
        <div>
            <h1>Gutenberg MVP</h1>
            <RollBtn />
            <AutoPickTeamBtn game={game} setGame={setGame} />
            <hr />
            <TeamDiv game={game} setGame={setGame} setSelectedActor={setSelectedActor} />
            <hr />
            <ActorsDiv game={game} setGame={setGame} setSelectedActor={setSelectedActor} />
            <hr />
            <ActorSheet actor={selectedActor} />
        </div>
    );
}

export default App
