import { Actor } from './actor.js';
import { ActorDetails } from './actorDetails.js';
import { originBooks } from './data/books.js';


// Jean Valjean TODO: Make this an object of Actor objects
export const startingActors = 
{
    jeanValjean: new Actor
    (
        'Jean Valjean',
        'Valjean',
        originBooks.lesMiserables,
        undefined, // locationBook
        undefined, // icon
        undefined, // picture
        0, // FAstrikes
        new ActorDetails
        (
          {
            strength: 18,
            dexterity: 10,
            constitution: 16,
            intelligence: 12,
            wisdom: 14,
            charisma: 8
          },
          {
              gameSavvy: 3,
              honesty: 8,
              verbosity: 3,
              sensitivity: 5
          },
          [], // Status objects array
          [], // Reputation objects array
          'Redemptive burden — characters near Valjean feel the weight of moral obligation; they become more aware of their own debts and failings'
        ),
    )
};
