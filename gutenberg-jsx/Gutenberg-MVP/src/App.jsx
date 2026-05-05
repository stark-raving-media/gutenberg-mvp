import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './views/Home.jsx'
import { TeamPick } from './views/TeamPick.jsx'
import { Gameplay } from './views/Gameplay.jsx'
import { NotFound } from './views/NotFound.jsx'


// TODO: Test testScenarios
// TODO: Create character sheet w/ JSX Components
// TODO: Make Router views - Home, Scenario / TeamPick, GamePlay, 404
// TODO: Make app.jsx "clean" - put main GameApp in its own file
// TODO: Set up Router views

// Start app
function App() {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team-pick" element={<TeamPick />} />
          </Routes>
      </Router>
    )
}

export default App
