import { 
 //   displayActorStats,
    rollDie,
    toggleTeamActor 
} from "./utils";


// Create buttons for Actor stat pages
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
            <br /> // TODO: Style this properly
            {actor.nickName}
        </button>
    )
    
}


// Create button for Die roll
export function RollBtn({sides = 20}) 
{
    //const rollBtn = document.createElement("button");
    //rollBtn.textContent = 'Roll D' + sides;
    //rollBtn.addEventListener('click', () => 
    // TODO: Make this more than an alert
    function handleClick()
    {
      var result = rollDie(sides);
      alert('You rolled a ' + result + '!');
    }//);
    //return rollBtn;
    return <button onClick={handleClick}>Roll D{sides}</button>
}