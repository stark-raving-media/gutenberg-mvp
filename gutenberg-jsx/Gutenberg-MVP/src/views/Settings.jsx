import { useContext } from "react";
import { GameContext } from "../context";
import { testScenarios } from "../data/scenarios";

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

    function handleSelect(scenario)
    {
        setGame({ ...game, currentScenario: scenario });
    }

    return (
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
    )
}


// Choose Scenario and Team
export function Settings()
{
    return (
        <div>
            <h1>Settings Test</h1>
            <ScenarioPicker />
        </div>
    )
}