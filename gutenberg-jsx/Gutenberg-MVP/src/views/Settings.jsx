import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context";
import { newGame } from "../game.js";
import { testScenarios } from "../data/scenarios";
import { ActorsDiv, ActorSheet, AutoPickTeamBtn, Scenario, TeamDiv } from "../utils.jsx";
import { setOppositionUnplayable } from "../utils.js";


// Display Game Options
function OptionsTab()
{
    const { game, setGame } = useContext(GameContext);

    function handleLoquacity(value)
    {
        setGame({ ...game, loquacity: value });
    }

    return (
        <div className="options-tab">
            <div className="option-group">
                <p className="option-label">Difficulty</p>
                <p className="option-desc">TBD: Currently meaningless</p>
                <div className="option-btns">
                    {['Easy', 'Normal', 'Hard'].map((option) =>
                        <button
                            key={option}
                            className={`option-btn ${game.difficulty === option ? 'option-active' : ''}`}
                            onClick={() => setGame({ ...game, difficulty: option })}
                        >
                            {option}
                        </button>
                    )}
                </div>
            </div>
            <div className="option-group">
                <p className="option-label">Narration Length</p>
                <p className="option-desc">How much detail do you want in each round's narration?</p>
                <div className="option-btns">
                    {['Short', 'Standard', 'Wordy'].map((option) =>
                        <button
                            key={option}
                            className={`option-btn ${game.loquacity === option ? 'option-active' : ''}`}
                            onClick={() => handleLoquacity(option)}
                        >
                            {option}
                        </button>
                    )}
                </div>
            </div>
            <div className="option-group">
                <p className="option-label">Team Size</p>
                <p className="option-desc">How many characters on your team?</p>
                <div className="option-btns">
                    {[1, 2, 3, 4].map((size) =>
                        <button
                            key={size}
                            className={`option-btn ${game.teamSize === size ? 'option-active' : ''}`}
                            onClick={() => setGame({ ...game, teamSize: size })}
                        >
                            {size}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}


// Create display card for Scenario picker
export function ScenarioCard({ scenario, onSelect, selected })
{
    return (
        <div 
            className={`scenario-card ${selected ? 'scenario-card-selected' : ''}`}
            onClick={() => onSelect(scenario)}
        >
            <div className="scenario-card-img">
                {/* TODO: Add scenario image */}
            </div>
            <h3 className="scenario-card-title">{scenario.scenarioName}</h3>
            <p className="scenario-card-desc">{scenario.description.slice(0, 150)}...</p>
        </div>
    )
}


// Set Scenario for Game
export function ScenarioPicker()
{
    const { game, setGame } = useContext(GameContext);
    const [selectedScenario, setSelectedScenario] = useState(game.currentScenario);

    function handleSelect(scenario)
    {
        setSelectedScenario(scenario);
        setGame({ ...game, currentScenario: scenario });
        setOppositionUnplayable(scenario);
    }

    return (
        <div>
            <div className="scenario-picker">
                {Object.values(testScenarios).map((scenario) =>
                    <ScenarioCard
                        key={scenario.id}
                        scenario={scenario}
                        selected={game.currentScenario?.id === scenario.id}
                        onSelect={handleSelect}
                    />
                )}
            </div>
            {/* Display selected Scenario */}
            {selectedScenario &&
                <Scenario scenario={selectedScenario} />
            }
        </div>
    )
}


// Choose Scenario and Team
export function Settings()
{
    const { setGame } = useContext(GameContext);
    const navigate = useNavigate();

    // Set up tabs
    const [activeTab, setActiveTab] = useState('scenario');

    // Start Game button creates new game & navs to /gameplay
    function handleStartGame()
    {
        setGame(newGame());
        navigate('/gameplay');
    }

    return (
        <div className="settings">
            <button className="start-button" onClick={handleStartGame}>START MISSION</button>
            <div className="tab-bar">
                <button 
                    className={`tab-btn ${activeTab === 'scenario' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('scenario')}
                >
                    Scenario
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'team' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('team')}
                >
                    Team
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'options' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('options')}
                >
                    Options
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'scenario' && <ScenarioPicker />}
                {activeTab === 'team' && 
                    <div>
                        <TeamDiv />
                        <ActorsDiv />
                        <ActorSheet />
                    </div>
                }
                {activeTab === 'options' && <OptionsTab />}
            </div>
        </div>
    );
}