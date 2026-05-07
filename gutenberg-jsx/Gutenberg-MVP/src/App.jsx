import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GameContext, APIKeyContext, ActorContext } from './context.js'
import { newGame } from './game.js'
import { Nav } from './utils.jsx'
import { attachPics, setOppositionUnplayable} from './utils.js'
import { Home } from './views/Home.jsx'
import { Settings } from './views/Settings.jsx'
import { Gameplay } from './views/Gameplay.jsx'
import { NotFound } from './views/NotFound.jsx'
import { startingActors } from './data/actors.js'


// TODO: Test testScenarios
// TODO: Create character sheet w/ JSX Components

// Start app
function App() {
    
    // Attach pictures and icons to actors
    attachPics(startingActors);

    // Set States
    const [apiKey, setApiKey] = useState('');
    const [game, setGame] = useState(() =>
    {
        const g = newGame();
        // Set opposition Actors to unplayable
        setOppositionUnplayable(g.currentScenario);
        return g;
    });
    const [selectedActor, setSelectedActor] = useState(game.teamActors[0]);

    return (
      <GameContext.Provider value={{ game, setGame }}>
      <APIKeyContext.Provider value={{ apiKey, setApiKey }}>
      <ActorContext.Provider value={{ selectedActor, setSelectedActor }}>
        {/* Tell Router to import root path*/}
        <Router basename={import.meta.env.BASE_URL}>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
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
