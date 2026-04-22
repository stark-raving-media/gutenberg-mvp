import { startingActors } from "./data/actors";
import { 
 //   displayActorStats,
    rollDie,
    toggleTeamActor 
} from "./utils";


// Actor Choices Div Component (Display all Actors as ActorPageBtns)
export function ActorsDiv({game})
{
    // var actorsDiv = document.getElementById('actors-div');
    // actorsDiv.innerHTML = '';
    // for (const actor of Object.values(startingActors)) 
    // {
    //     // If actor not in current team:
    //     if (!game.teamActors.includes(actor) && actor.playable == true)
    //     {
    //         const actorBtn = ActorPageBtn(actor, game);
    //         actorsDiv.appendChild(actorBtn);
    //     }
    // }
    var actorChoices = Object.values(startingActors)
                .filter((actor) => !game.teamActors.includes(actor) && actor.playable == true)
                .map((actor) =>
                    <ActorPageBtn
                        key={actor.id}
                        actor={actor}
                        game={game}
                    />
                )

    return (
        <div
            id="actors-div">
            {actorChoices}
        </div>
    )
}

// Actor Button Component
export function ActorPageBtn({actor, game})
{
    // On click, display Actor stats in div
    function handleClick()
    {
        // TODO: Make this work (displayActorStats)
    }  
    // actorBtn.addEventListener('click', () => 
    // {
    //   const actorDiv = document.getElementById('actor-stats');
    //   displayActorStats(actor, actorDiv);
    // });
    
    // On double-click, add/remove Actor to team
    function handleDblClick()
    {
        toggleTeamActor(actor, game);
    }

    // const actorBtn = document.createElement('button');
    // actorBtn.innerHTML = '<img src="' + actor.icon 
    //     + '" alt="' + actor.fullName + ' icon" width="100" height="100"><br>'
    //     + actor.nickName;
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


// TeamDiv Component
export function TeamDiv({game})
{
    return <div
        id="team-div">
        <h2>Your Team</h2>
        {game.teamActors.map((actor) =>
            <ActorPageBtn
            key={actor.id}
            actor={actor}
            game={game}
            />
        )}
        </div>
    // var teamDiv = document.getElementById('team-div');
    // teamDiv.innerHTML = '';
    // teamDiv.innerHTML = '<h2>Your Team</h2>';
    // for (var i = 0; i < game.teamActors.length; i++) 
    // {
    //     const actorBtn = ActorPageBtn(game.teamActors[i], game);
    //     teamDiv.appendChild(actorBtn);
    // }
}