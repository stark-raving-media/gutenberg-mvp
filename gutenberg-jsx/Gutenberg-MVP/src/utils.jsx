
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
    // TODO: Style this properly
    return (
        <div
            id="actor-stats">
            <hr />
            <h2>{actor.nickName}</h2>
            <img src={actor.portrait} alt={actor.fullname + 'portrait'} />
            <br />
            {actor.fullName} - {actor.originBook.title}
            <hr />
            STR: {s.strength} DEX: {s.dexterity}
            <br />
            CON: {s.constitution} INT: {s.intelligence}
            <br />
            WIS: {s.wisdom} CHA: {s.charisma}
            <hr />
            Game Savvy: {t.gameSavvy} --- Honesty: {t.honesty}
            <br />
            Verbosity: {t.verbosity} --- Sensitivity: {t.sensitivity}
            <hr />
            Aura: {actor.details.aura}
            <hr />
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
    }

    return (
        <button 
            onClick={handleClick}
            onDoubleClick={handleDblClick}>
            <img 
                src={actor.icon} 
                alt={actor.fullName + ' icon'} 
                width='100'
                height='100'
            />
            <br /> 
            {/*// TODO: Style this properly */}
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


// RollBtn Component
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
    // const scenarioDiv = document.getElementById('scenario-div');
    // scenarioDiv.style.textAlign = 'left';
    // scenarioDiv.innerHTML = '';
    // var text = '<h2>' + scenario.scenarioName + '</h2>' + '<br>';
    // text += scenario.description + '<br></br>';
    // text += scenario.scene + '<br><br>';
    // text += 'Main Objective: ' + scenario.mainObj + '<br><br>';
    // text += 'Secondary Objective: ' + scenario.secObj + '<br><br>';
    // text += 'RULES:' + '<br><ul>';
    // for (var i = 0; i < scenario.rules.length; i++)
    // {
    //     text += '<li>' + scenario.rules[i];
    // }
    // scenarioDiv.innerHTML = text;

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


// TeamDiv Component
export function TeamDiv({game, setGame, setSelectedActor})
{
    return <div
        id="team-div">
        <h2>Your Team</h2>
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
}