
import { startingActors } from "./data/actors";
import { 
    getRandomActors,
    rollDie,
    toggleTeamActor 
} from "./utils";


// Actor Choices Div Component (Display all Actors as ActorPageBtns)
export function ActorsDiv({game, setGame, setSelectedActor})
{
    var actorChoices = Object.values(startingActors)
                .filter((actor) => !game.teamActors.includes(actor) && actor.playable == true)
                .map((actor) =>
                    <ActorPageBtn
                        key={actor.id}
                        actor={actor}
                        game={game}
                        setGame={setGame}
                        setSelectedActor={setSelectedActor}
                    />
                )

    return (
        <div
            id="actors-div">
            {actorChoices}
        </div>
    )
}


// Display selectedActor stats in div
export function ActorSheet({actor}) 
{
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
                    {actor.fullName} - {actor.originBook.title}
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
export function ActorPageBtn({actor, game, setGame, setSelectedActor})
{
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
                alt={actor.fullName + ' icon'} 
                width='100'
                height='100'
            />
            <br /> 
            {actor.nickName}
        </button>
    )
    
}


// Auto-pick a new team (Button Component)
export function AutoPickTeamBtn({game, setGame})
{
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


// Display Scenario details
export function Scenario({scenario})
{
    return (
        <div id="scenario-div" style={{textAlign: 'left'}}>
            <h2>{scenario.scenarioName}</h2>
            <p>{scenario.description}</p>
            <p>{scenario.scene}</p>
            <p>Main Objective: {scenario.mainObj}</p>
            <p>Secondary Objective: {scenario.secObj}</p>
            RULES:
            <ul>
                {scenario.rules.map((rule, index) =>
                    <li key={index}>{rule}</li>
                )}
            </ul>
        </div>
    );
}


// Display Actor buttons for current team
export function TeamDiv({game, setGame, setSelectedActor})
{
    return (
        <div
            id="team-div">
            <h2 className="team-heading">
                Your Team: {game.teamActors.length}/{game.teamSize}
            </h2>
            <p className="info">
                Double-click to add or remove team members
            </p>
            <div>
                {game.teamActors.map((actor) =>
                <ActorPageBtn
                    key={actor.id}
                    actor={actor}
                    game={game}
                    setGame={setGame}
                    setSelectedActor={setSelectedActor}
                />
                )}
            </div>
            <AutoPickTeamBtn game={game} setGame={setGame}/>
        </div>
    )
}