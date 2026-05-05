import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { callClaude, parseJSON } from './api.js'
import { GameContext, APIKeyContext, ActorContext } from './context.js'
import { Game } from './game.js'
import { startingActors } from './data/actors.js'
import { testScenarios } from './data/scenarios.js'
import { attachPics, getRandomActors, handleScenario } from './utils.js'
import { 
  ActorsDiv,
  ActorSheet,
  APIKeyForm,
  AutoPickTeamBtn,
  PlayerInput,
  PlayerTurnOptions,
  RollBtn, 
  Scenario,
  TeamDiv 
} from './utils.jsx'

// TODO: Test testScenarios
// TODO: Create character sheet w/ JSX Components
// TODO: Make Router views - Home, Scenario / TeamPick, GamePlay, 404
// TODO: Make app.jsx "clean" - put main GameApp in its own file
// TODO: Set up Router views

// Start game
function App() {

  // Attach pictures and icons to actors
  attachPics(startingActors);
  
  // Game settings
  const playerName = '';
  const teamSize = 2
  const teamActors = getRandomActors(teamSize);
  const currentScenario = testScenarios.theYellowBeetle;

  // TODO: Abstract to newGame()?
  // Set states
  const [apiKey, setApiKey] = useState('');
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

  // Handle Scenario-specific actions
  handleScenario(game);

  // TODO: Make End Game btn (Quit) and/or trigger this at end of game
  // End game, reset
  //resetGame(game, setGame);

  // Claude test
  // TODO: DELETE THIS
  async function testClaude()
  {
      const response = await callClaude(
          apiKey,
          [{ role: 'user', content: 'Say hello in one sentence.' }]
      );
      console.log(response);

      const raw = await callClaude(
        apiKey,
        [{ role: 'user', content: 'Return JSON only, no markdown: {"joke": string, "rating": number}. Tell me a joke and rate how funny you think it is.' }]
    );
    console.log('raw:', raw);
    const parsed = parseJSON(raw);
    console.log('parsed:', parsed);
    console.log('joke:', parsed.joke);
    console.log('rating:', parsed.rating);
  }

  // TEST CHOICES
  var choices = ["Drive into the ocean", "Kidnap Renald while he's writing in his notepad", "Approach Renald as friends"];
  return (
      <GameContext.Provider value={{ game, setGame }}>
      <APIKeyContext.Provider value={{ apiKey, setApiKey }}>
      <ActorContext.Provider value={{ selectedActor, setSelectedActor }}>
        <div>
            <h1>Gutenberg MVP</h1>
            {/* Claude test (DELETE LATER) */}
            <button onClick={testClaude}>Test Claude</button>
            {/* Ask for API Key, or show Game */}
            {!apiKey 
                ? <APIKeyForm onSubmit={(key) => setApiKey(key)} />
                : <div>
                    <Scenario scenario={game.currentScenario} />
                    <hr />
                    {/* // TODO: Change to API */}
                    {/* <PlayerInput onSubmit={(text) => console.log(text)} />  */}
                    <PlayerTurnOptions choices={choices} onChoice={(choice) => console.log(choice)} />
                    <hr />
                    <TeamDiv />
                    <hr />
                    <ActorsDiv />
                    <hr />
                    <ActorSheet />
                    <RollBtn />
                  </div>
            }
        </div>
      </ActorContext.Provider>  
      </APIKeyContext.Provider>
      </GameContext.Provider>
    );
}

export default App
