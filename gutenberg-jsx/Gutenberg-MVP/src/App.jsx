import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GameContext, APIKeyContext, ActorContext } from './context.js'
import { Game } from './game.js'
import { testScenarios } from './data/scenarios.js'
import { Nav } from './utils.jsx'
import { getRandomActors } from './utils.js'
import { Home } from './views/Home.jsx'
import { TeamPick } from './views/TeamPick.jsx'
import { Gameplay } from './views/Gameplay.jsx'
import { NotFound } from './views/NotFound.jsx'


// TODO: Test testScenarios
// TODO: Create character sheet w/ JSX Components

// Start app
function App() {

    const [apiKey, setApiKey] = useState('');
    const [game, setGame] = useState(() => new Game('', 2, getRandomActors(2), testScenarios.theYellowBeetle));
    const [selectedActor, setSelectedActor] = useState(game.teamActors[0]);

    return (
      <GameContext.Provider value={{ game, setGame }}>
      <APIKeyContext.Provider value={{ apiKey, setApiKey }}>
      <ActorContext.Provider value={{ selectedActor, setSelectedActor }}>
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team-pick" element={<TeamPick />} />
                <Route path="/gameplay" element={<Gameplay />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
      </ActorContext.Provider>
      </APIKeyContext.Provider>
      </GameContext.Provider>
    )
}

export default App
