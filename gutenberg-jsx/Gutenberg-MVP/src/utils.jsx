import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GameContext, ActorContext, APIKeyContext } from "./context.js"
import { startingActors } from "./data/actors";
import { newGame } from './game.js';
import { 
    getRandomActors,
    getSituationScoreLabel,
    rollDie,
    toggleTeamActor 
} from "./utils";


// Accordion Comp (Text display)
export function AccordionSection({ label, children, defaultOpen = false })
{
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="accordion-section">
            <button className="accordion-toggle" onClick={() => setOpen(!open)}>
                <span>{label}</span>
                <span>{open ? '▲' : '▼'}</span>
            </button>
            {open &&
                <div className="accordion-content">
                    {children}
                </div>
            }
        </div>
    );
}

// Actor Choices Div Component (Display all Actors as ActorPageBtns)
export function ActorsDiv()
{
    // Get context
    const { game } = useContext(GameContext);

    // Fiter Actors to available options, make button for each
    var actorChoices = Object.values(startingActors)
                .filter((actor) => !game.teamActors.includes(actor) && actor.playable && !actor.isOpposition)
                .map((actor) =>
                    <ActorPageBtn
                        key={actor.id}
                        actor={actor}
                    />
                )

    return (
        <div className="actors-div">
            <div className="team-heading">Available Actors</div>
            <div>{actorChoices}</div>
        </div>
    )
}


// Display selectedActor stats in div
export function ActorSheet() 
{
    const { selectedActor } = useContext(ActorContext);
    const actor = selectedActor;
    const s = actor.details.stats;
    const t = actor.details.traits;

    return (
        <div className="actor-sheet">
            <div className="actor-portrait">
                <img  src={actor.portrait} alt={actor.fullname + 'portrait'} />
            </div>
            <div className="actor-info">
                <h2 className="actor-nickname">{actor.nickName}</h2>
                <p className="actor-byline">
                    {actor.fullName} - {actor.originBook.title ?? 'Unknown'}
                </p>
                <hr />
                <div className="actor-stats">
                    <div className="stat-box">
                        <div className="actor-stat">
                            <span className="stat-label">STR</span>
                            <span className="stat-value">{s.strength}</span>
                        </div>
                        <div className="actor-stat">
                            <span className="stat-label">DEX</span>
                            <span className="stat-value">{s.dexterity}</span>
                        </div>
                        <div className="actor-stat">
                            <span className="stat-label">CON</span>
                            <span className="stat-value">{s.constitution}</span>
                        </div>
                    </div>
                    <div className="stat-box">
                        <div className="actor-stat">
                            <span className="stat-label">INT</span>
                            <span className="stat-value">{s.intelligence}</span>
                        </div>
                        <div className="actor-stat">
                            <span className="stat-label">WIS</span>
                            <span className="stat-value">{s.wisdom}</span>
                        </div>
                        <div className="actor-stat">
                            <span className="stat-label">CHA</span>
                            <span className="stat-value">{s.charisma}</span>
                        </div>    
                    </div> 
                </div>
                <hr />
                <div className="actor-traits">
                    <span className="stat-label">Game Savvy</span>
                    <span className="stat-value">{t.gameSavvy}</span>
                    <span className="stat-label">Honesty</span>
                    <span className="stat-value">{t.honesty}</span>
                    <span className="stat-label">Verbosity</span>
                    <span className="stat-value">{t.verbosity}</span>
                    <span className="stat-label">Sensitivity</span>
                    <span className="stat-value">{t.sensitivity}</span>
                </div>
                <hr />
                <p className="actor-aura">{actor.details.aura}</p>
            </div>
        </div>
    )
}


// Actor Button Component
export function ActorPageBtn({ actor })
{
    // Get context
    const { game, setGame } = useContext(GameContext);
    const { setSelectedActor } = useContext(ActorContext);

    // On click, display Actor stats in div
    function handleClick()
    {
        setSelectedActor(actor);
    }  
    
    // On double-click, add/remove Actor to team
    function handleDblClick()
    {
        toggleTeamActor(actor, game, setGame);
        // TODO: If team is full, display alert
    }

    return (
        <button 
            className="actor-btn"
            onClick={handleClick}
            onDoubleClick={handleDblClick}>
            <img 
                src={actor.icon} 
                alt={actor.fullName + " icon"} 
                width="100"
                height="100"
            />
            <br /> 
            {actor.nickName}
        </button>
    )
    
}


// Get Claude API key from the player
export function APIKeyForm({ onSubmit })
{
    const { setApiKey } = useContext(APIKeyContext);
    const [input, setInput] = useState('');

    function handleSubmit()
    {
        setApiKey(input);
        if (onSubmit)
            onSubmit();
    }

    return (
        <div className="api-key-form">
            <p>Enter your Anthropic API key to continue:</p>
            <div className="player-input">
                <input
                    type="password"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key == 'Enter' && handleSubmit()}
                    placeholder="sk-ant-..."
                />
                <button onClick={handleSubmit}>Start</button>
            </div>
        </div>
    )
}


// Auto-pick a new team (Button Component)
export function AutoPickTeamBtn()
{
    const { game, setGame } = useContext(GameContext);

    function handleClick()
    {
        setGame({ 
            ...game,
            teamActors: getRandomActors(game.teamSize)
        })
    }

    return (
        <button onClick={handleClick}>
            Auto-Pick Team
        </button>
    )
}


// Nav bar
export function Nav()
{
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/gameplay">Gameplay</Link>
        </nav>
    );
}


// Build game outcome (Win/Loss) screen
export function OutcomeScreen({ outcome, gameWon, secObjPassed })
{
    const { setGame } = useContext(GameContext);
    const navigate = useNavigate();

    function handlePlayAgain()
    {
        setGame(newGame());
        navigate('/settings');
    }

    return (
        <div className="outcome-screen">
            <h2 className={`outcome-title ${gameWon ? 'outcome-win' : 'outcome-lose'}`}>
                {gameWon ? 'Mission Complete!' : 'Mission Failed!'}
            </h2>
            <p className="outcome-text">{outcome}</p>
            {/* If win, show Secondary Objective result */}
            {gameWon &&
                <p className={`outcome-secondary ${secObjPassed ? 'outcome-win' : 'outcome-lose'}`}>
                    Secondary Objective: {secObjPassed ? 'Achieved!' : 'Failed'}
                </p>
            }
            <button onClick={handlePlayAgain}>Play Again</button>
        </div>
    )
}

// Take text input from the Player
export function PlayerInput({placeholder = 'What do you do?', onSubmit})
{
    const [input, setInput] = useState(''); // Init local state

    // Submit input if not empty
    function handleSubmit()
    {
        if (input.trim() == '')
            return;
        
        onSubmit(input);
        setInput('');
    }

    // Handle Enter key submit
    function handleKeyDown(e)
    {
        if (e.key == 'Enter')
            handleSubmit();
    }

    return (
        <div className="player-input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} // Update text as player types
                onKeyDown={handleKeyDown} // Check if key press is Enter
                placeholder={placeholder}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


// Display options for Player's turn
export function PlayerTurnOptions({choices, onChoice})
{
    if (!choices || choices.length == 0)
        return null;

    return (
        <div className="turn-options">
            {/* Display each generated choice as a button */}
            <div className="choice-list">
                {choices.map((choice, index) =>
                    <button
                        key={index}
                        className="choice-btn"
                        onClick={() => onChoice(choice)}
                    >
                        {choice}
                    </button>
                )}
            
            {/* Box for alternate player input */}
            <PlayerInput
                placeholder="Or something else...?"
                onSubmit={onChoice}
            />
            </div>
        </div>
    )
}


// Roll die with n-sides (Button Component)
export function RollBtn({sides = 20}) 
{
    // TODO: Make this more than an alert
    function handleClick()
    {
      var result = rollDie(sides);
      alert('You rolled a ' + result + '!');
    }
    return <button onClick={handleClick}>Roll D{sides}</button>
}


// Return each Round description in an accordion panel for display
export function RoundHistory()
{
    const { game } = useContext(GameContext);
    const [openIndex, setOpenIndex] = useState(0);

    // Open panel for latest Round, close the rest
    useEffect(() =>
    {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOpenIndex(game.roundHistory.length - 1);
    }, [game.roundHistory.length]); 

    if (game.roundHistory.length == 0)
        return null;

    // Return round panels in accordion style
    return (
        <div className="round-history">
            {/* Map accordion open/closed states */}
            {game.roundHistory.map((round, index) =>
            {
                const isOpen = openIndex == index;
                const dangerLevel = 100 - round.situationScore;

                // Get previous Round's score, if exists
                // var prevScore = undefined;
                // if (index > 0)
                //     prevScore = game.roundHistory[index - 1].situationScore;

                function handleToggle()
                {
                    if (isOpen)
                        setOpenIndex(-1);
                    else
                        setOpenIndex(index);
                }

                return (
                    <div key={index} className="round-panel">
                        <button className="accordion-toggle" onClick={handleToggle}>
                            <span>Round {index + 1} - Doom Counter: {dangerLevel}/100 - {getSituationScoreLabel(dangerLevel)}</span> 
                            <span>{isOpen ? '▲' : '▼'}</span>
                        </button>
                        {isOpen &&
                            <div className="accordion-content">
                                <p className="round-choice">"{round.choice}"</p>
                                <p className="round-narration">{round.narration}</p>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

// Display Scenario details
export function Scenario({scenario})
{
    // Objectives and Rules in accordion
    return (
        <div id="scenario-div">
            <h1 className="scenario-name">{scenario.scenarioName}</h1>
            <p className="scenario-scene">{scenario.scene}</p>
            <p className="scenario-desc">{scenario.description}</p>
            <div className="scenario-accordion">
                <AccordionSection label="Main Objective">
                    <p className="scenario-obj-text">{scenario.mainObj}</p>
                </AccordionSection>
                <AccordionSection label="Secondary Objective">
                    <p className="scenario-obj-text">{scenario.secObj}</p>
                </AccordionSection>
                <AccordionSection label="Rules">
                    <ul className="scenario-rules-list">
                        {scenario.rules.map((rule, index) =>
                            <li key={index}>{rule}</li>
                        )}
                    </ul>
                </AccordionSection>
            </div>
        </div>
    )
}


// Display Actor buttons for current team
export function TeamDiv()
{
    // Get context
    const { game } = useContext(GameContext);
    
    return (
        <div
            id="team-div">
            <div className="team-heading">
                Your Team: {game.teamActors.length}/{game.teamSize}
            </div>
            <p className="info">
                Double-click to add or remove team members
            </p>
            <div>
                {game.teamActors.map((actor) =>
                <ActorPageBtn
                    key={actor.id}
                    actor={actor}
                />
                )}
            </div>
            <AutoPickTeamBtn />
        </div>
    )
}