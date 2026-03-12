import { Actor } from './actor.js';
import { ActorDetails } from './actorDetails.js';
import { originBooks } from './data/books.js';


// Jean Valjean TODO: Make this an object of Actor objects
export const startingActors = 
{
    jeanValjean: new Actor
    (
        'Jean Valjean', // fullName
        'Valjean', // nickName
        originBooks.lesMiserables, // originBook
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
          'Redemptive burden — characters near Valjean feel the weight of moral obligation; they become more aware of their own debts and failings',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    captainAhab: new Actor
    (
        'Captain Ahab', 
        'Ahab',
        originBooks.mobyDick, 
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
            strength: 14,
            dexterity: 8,
            constitution: 16,
            intelligence: 14,
            wisdom: 6,
            charisma: 16
          },
          {
              gameSavvy: 2,
              honesty: 7,
              verbosity: 8,
              sensitivity: 2
          },
          'Obsessive intensity — characters near Ahab feel pulled toward single-minded purpose; doubt fades, replaced by fixation',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    sherlockHolmes: new Actor
    (
        'Sherlock Holmes',
        'Holmes',
        originBooks.sherlockHolmes,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
            strength: 12,
            dexterity: 14,
            constitution: 10,
            intelligence: 18,
            wisdom: 16,
            charisma: 12
          },
          {
              gameSavvy: 6,
              honesty: 8,
              verbosity: 7,
              sensitivity: 3
          },
          'Scrutiny — characters near Holmes feel observed and exposed; they become self-conscious about what they might be revealing',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
};
