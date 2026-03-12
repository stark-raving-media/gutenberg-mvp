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
    elizabethBennet: new Actor
    (
        'Elizabeth Bennet',
        'Lizzy',
        originBooks.prideAndPrejudice,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 8,
              dexterity: 10,
              constitution: 12,
              intelligence: 16,
              wisdom: 14,
              charisma: 16
          },
          {
              gameSavvy: 3,
              honesty: 7,
              verbosity: 6,
              sensitivity: 6
          },
          'Sharp wit — characters near Lizzy feel challenged to be cleverer; pretension becomes harder to maintain',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    odysseus: new Actor
    (
        'Odysseus of Ithaca',
        'Odysseus',
        originBooks.odyssey,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 16,
              dexterity: 14,
              constitution: 16,
              intelligence: 18,
              wisdom: 14,
              charisma: 16
          },
          {
              gameSavvy: 7,
              honesty: 3,
              verbosity: 6,
              sensitivity: 4
          },
          'Cunning authority — characters near Odysseus feel outmaneuvered before anything happens; trust shifts toward deference',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    countDracula: new Actor
    (
        'Count Dracula',
        'Dracula',
        originBooks.dracula,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 18,
              dexterity: 16,
              constitution: 18,
              intelligence: 16,
              wisdom: 14,
              charisma: 18
          },
          {
              gameSavvy: 5,
              honesty: 2,
              verbosity: 4,
              sensitivity: 3
          },
          'Dread magnetism — characters near Dracula feel drawn closer despite rising fear; the impulse to flee fights the impulse to stay',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    ebenezerScrooge: new Actor
    (
        'Ebenezer Scrooge',
        'Scrooge',
        originBooks.aChristmasCarol,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 6,
              dexterity: 8,
              constitution: 10,
              intelligence: 14,
              wisdom: 8,
              charisma: 4
          },
          {
              gameSavvy: 1,
              honesty: 6,
              verbosity: 3,
              sensitivity: 2
          },
          'Chill — characters near Scrooge feel guarded and miserly; generosity becomes harder, self-preservation takes over',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    donQuixote: new Actor
    (
        'Don Quixote',
        'Quixote',
        originBooks.donQuixote,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 10,
              dexterity: 8,
              constitution: 12,
              intelligence: 8,
              wisdom: 4,
              charisma: 14
          },
          {
              gameSavvy: 9,
              honesty: 10,
              verbosity: 8,
              sensitivity: 8
          },
          'Noble delusion — characters near Quixote begin questioning what is real; the line between brave and foolish blurs',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    huckleberryFinn: new Actor
    (
        'Huckleberry Finn',
        'Huck',
        originBooks.huckleberryFinn,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 10,
              dexterity: 14,
              constitution: 14, 
              intelligence: 10,
              wisdom: 12,
              charisma: 12
          },
          {
              gameSavvy: 4,
              honesty: 7,
              verbosity: 5,
              sensitivity: 7
          },
          'Freedom — characters near Huck feel looser and less rule-bound; duty softens, instinct takes over',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    alice: new Actor
    (
        'Alice',
        'Alice',
        originBooks.aliceInWonderland,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 6,
              dexterity: 10,
              constitution: 10,
              intelligence: 14,
              wisdom: 12,
              charisma: 12
          },
          {
              gameSavvy: 8,
              honesty: 9,
              verbosity: 6,
              sensitivity: 7
          },
          'Curiosity — characters near Alice feel compelled to question their surroundings; assumptions feel less solid',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    frankensteinMonster: new Actor
    (
        'Frankenstein’s Monster',
        'The Monster',
        originBooks.frankenstein,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 18,
              dexterity: 8,
              constitution: 18,
              intelligence: 12,
              wisdom: 10,
              charisma: 3
          },
          {
              gameSavvy: 2,
              honesty: 8,
              verbosity: 5,
              sensitivity: 10
          },
          'Revulsion/Pity — characters near the Creature feel warring impulses to flee and to empathize; compassion and disgust fight for control',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    longJohnSilver: new Actor
    (
        'Long John Silver',
        'Silver',
        originBooks.treasureIsland,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 12,
              dexterity: 10,
              constitution: 14,
              intelligence: 16,
              wisdom: 14,
              charisma: 16
          },
          {
              gameSavvy: 6,
              honesty: 2,
              verbosity: 7,
              sensitivity: 3
          },
          'Treacherous charm — characters near Silver feel trusting against their better judgment; suspicion melts before it can take hold',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    annaKaerenina: new Actor
    (
        'Anna Karenina',
        'Anna',
        originBooks.annaKarenina,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 8,
              dexterity: 10,
              constitution: 10,
              intelligence: 14,
              wisdom: 8,
              charisma: 16
          },
          {
              gameSavvy: 2,
              honesty: 7,
              verbosity: 5,
              sensitivity: 9
          },
          'Passionate gravity — characters near Anna feel emotionally heightened; small feelings become urgent ones',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    hamlet: new Actor
    (
        'Hamlet, Prince of Denmark ',
        'Hamlet',
        originBooks.hamlet,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 12,
              dexterity: 12,
              constitution: 10,
              intelligence: 18,
              wisdom: 10,
              charisma: 14
          },
          {
              gameSavvy: 8,
              honesty: 6,
              verbosity: 9,
              sensitivity: 9
          },
          'Paralysis — characters near Hamlet feel uncertain and begin second-guessing themselves; action feels riskier than inaction',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    dArtagnan: new Actor
    (
        'Charles de Batz-Castelmore D’Artagnan',
        'D’Artagnan',
        originBooks.threeMusketeers,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 14,
              dexterity: 18,
              constitution: 14,
              intelligence: 12,
              wisdom: 10,
              charisma: 14
          },
          {
              gameSavvy: 3,
              honesty: 6,
              verbosity: 5,
              sensitivity: 4
          },
          "Bravado — characters near d'Artagnan feel emboldened and reckless; caution feels like cowardice",
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    raskolnikov: new Actor
    (
        'Rodion Romanovich Raskolnikov',
        'Raskolnikov',
        originBooks.crimeAndPunishment,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 10,
              dexterity: 10,
              constitution: 8,
              intelligence: 16,
              wisdom: 6,
              charisma: 8
          },
          {
              gameSavvy: 3,
              honesty: 4,
              verbosity: 6,
              sensitivity: 8
          },
          'Guilt — characters near Raskolnikov feel morally self-conscious; even the innocent start examining their own hands',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    jayGatsby: new Actor
    (
        'James Gatz aka Gatsby',
        'Gatsby',
        originBooks.greatGatsby,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 10,
              dexterity: 12,
              constitution: 12,
              intelligence: 14,
              wisdom: 6,
              charisma: 18
          },
          {
              gameSavvy: 2,
              honesty: 3,
              verbosity: 5,
              sensitivity: 7
          },
          'Glamour — characters near Gatsby feel the pull of aspiration and reinvention; who they are feels less fixed than who they could become',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    beowulf: new Actor
    (
        'Beowulf of the Geats',
        'Beowulf',
        originBooks.beowulfBook,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 18,
              dexterity: 14,
              constitution: 18,
              intelligence: 10,
              wisdom: 12,
              charisma: 16
          },
          {
              gameSavvy: 1,
              honesty: 8,
              verbosity: 6,
              sensitivity: 2
          },
          'Heroic presence — characters near Beowulf feel braver and more willing to fight; cowardice becomes shameful',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    scheherazade: new Actor
    (
        'Scheherazade',
        'Scheherazade',
        originBooks.oneThousandNights,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 6,
              dexterity: 10,
              constitution: 12, 
              intelligence: 18,
              wisdom: 18,
              charisma: 18
          },
          {
              gameSavvy: 9,
              honesty: 5,
              verbosity: 10,
              sensitivity: 8
          },
          'Enchantment — characters near Scheherazade feel compelled to listen and to delay action; violence and urgency dissolve into patience',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
    janeEyre: new Actor
    (
        'Jane Eyre',
        'Jane',
        originBooks.janeEyreBook,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 8,
              dexterity: 8,
              constitution: 14,
              intelligence: 16,
              wisdom: 16,
              charisma: 10
          },
          {
              gameSavvy: 2,
              honesty: 9,
              verbosity: 5,
              sensitivity: 8
          },
          'Quiet resolve — characters near Jane feel compelled toward moral honesty; lying becomes uncomfortable, self-deception harder',
          [], // Status objects array
          [], // Reputation objects array
        ),
    ),
};
