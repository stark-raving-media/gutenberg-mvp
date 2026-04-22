// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

//import './style.css'
import { Game } from './game.js'
// import { startingActors } from './data/actors.js'
// import { testScenarios } from './data/scenarios.js'
// import { 
//   attachPics, 
//   createTeamPickBtn,
//   getRandomActors,
//   refreshActorsDiv,
//   refreshTeamDiv,
//   //displayScenario,
//   resetGame,
//   handleScenario
// } from './utils.js'
import { RollBtn } from './utils.jsx'

// TODO: Test testScenarios
// TODO: Create character sheet w/ JSX Components

function App() {


// // Start game
// function startGame() {
  
//   // Game settings
//   const playerName = '';
//   const teamSize = 2
//   const teamActors = getRandomActors(teamSize);
//   const currentScenario = testScenarios.theYellowBeetle;

//   // Create new Game
//   const game = new Game(playerName, teamSize, teamActors, currentScenario); 
//   console.log('Team Actors:', game.teamActors);
//   console.log('Starting new game...');

//   // Attach pictures and icons to actors
//   attachPics(startingActors);

//   // Get main app div
//   const app = document.getElementById('app');
//   //app.innerHTML = '<h1>Gutenberg MVP</h1>';
//   app.appendChild(document.createElement('hr'));

//   // Create test scenario div
//   // const scenarioDiv = document.createElement('div');
//   // scenarioDiv.id = 'scenario-div';
//   // app.appendChild(scenarioDiv);
//   // displayScenario(game.currentScenario);
//   // app.appendChild(document.createElement('hr'));

//   // Create button for D20 roll
//   const rollBtn = RollBtn(20);
//   app.appendChild(rollBtn);
//   app.appendChild(document.createElement('hr'));

//   // Handle Scenario-specific actions
//   handleScenario(game);

//   // Display team Actors
//   const teamDiv = document.createElement('div');
//   teamDiv.id = 'team-div';
//   app.appendChild(teamDiv);
//   refreshTeamDiv(game);

//   // Create button for auto-choose new team
//   const teamPickBtn = createTeamPickBtn(game);
//   app.appendChild(teamPickBtn);
  
//   app.appendChild(document.createElement('hr'));
 
//   // Create Actor buttons
//   const actorsDiv = document.createElement('div');
//   actorsDiv.id = 'actors-div';
//   app.appendChild(actorsDiv);
//   refreshActorsDiv(game, startingActors);

//   // Create div for Actor stats
//   const actorDiv = document.createElement('div');
//   actorDiv.id = 'actor-stats';
//   app.appendChild(actorDiv);


//   // End game, reset
//   resetGame(game);
// };

// startGame();

  return (
        <div>
            <h1>Gutenberg MVP</h1>
        </div>
    );
}

export default App
