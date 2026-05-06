import { Actor } from '../actor.js';
import { ActorDetails } from '../actorDetails.js';
import { originBooks } from './books.js';


// Starting Actors
export const startingActors = 
{
    jeanValjean: new Actor
    (
        1, // id
        true,
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
        2,
        true,
        'Captain Ahab', // fullName
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
        3,
        true,
        'Sherlock Holmes', // fullName
        'Holmes',
        originBooks.adventuresSherlock,
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
        4,
        true,
        'Elizabeth Bennet', // fullName
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
        5,
        true,
        'Odysseus of Ithaca', // fullName
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
        6,
        true,
        'Count Dracula', // fullName
        'Dracula',
        originBooks.draculaBook,
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
        7,
        true,
        'Ebenezer Scrooge', // fullName
        'Scrooge',
        originBooks.christmasCarol,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
          {
              strength: 6,
              dexterity: 8,
              constitution: 6,
              intelligence: 16,
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
        8,
        true,
        'Don Quixote', // fullName
        'Quixote',
        originBooks.donQuixoteBook,
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
        9,
        true,
        'Huckleberry Finn', // fullName
        'Huck',
        originBooks.huckleberryFinnBook,
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
        10,
        true,
        'Alice', // fullName
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
        11,
        true,
        "Frankenstein’s Monster", // fullName
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
        12,
        true,
        'Long John Silver', // fullName
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
    annaKarenina: new Actor
    (
        13,
        true,
        'Anna Karenina', // fullName
        'Anna',
        originBooks.annaKareninaBook,
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
        14,
        true,
        'Hamlet, Prince of Denmark ', // fullName
        'Hamlet',
        originBooks.hamletBook,
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
        15,
        true,
        "Charles de Batz-Castelmore D’Artagnan", // fullName
        "D’Artagnan",
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
        16,
        true,
        'Rodion Romanovich Raskolnikov', // fullName
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
        17,
        true,
        'James Gatz aka Gatsby', // fullName
        'Gatsby',
        originBooks.theGreatGatsby,
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
        18,
        true,
        'Beowulf of the Geats', // fullName
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
        19,
        true,
        'Scheherazade', // fullName
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
        20,
        true,
        'Jane Eyre', // fullName
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
    // Opposition Actors
    inspectorJavert: new Actor
    (
        21,
        false,
        'Inspector Javert',
        'Javert',
        originBooks.lesMiserables,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
            {
                strength: 16,
                dexterity: 12,
                constitution: 16,
                intelligence: 14,
                wisdom: 18,
                charisma: 8
            },
            {
                gameSavvy: 0,
                honesty: 0,
                verbosity: 0,
                sensitivity: 0
            },
            '',
            [],
            []
        ),
    ),
    professorMoriarty: new Actor
    (
        22,
        false,
        'Professor Moriarty',
        'Moriarty',
        originBooks.adventuresSherlock,
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
            {
                strength: 9,
                dexterity: 12,
                constitution: 10,
                intelligence: 20,
                wisdom: 16,
                charisma: 14
            },
            {
                gameSavvy: 0,
                honesty: 0,
                verbosity: 0,
                sensitivity: 0
            },
            '',
            [],
            []
        ),
    ),
    liseleKade: new Actor
    (
        23,
        false,
        'Lisele Kade',
        'Kade',
        undefined, // Bookburner - Unaffiliated
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
            {
                strength: 12,
                dexterity: 16,
                constitution: 14,
                intelligence: 18,
                wisdom: 10,
                charisma: 12
            },
            {
                gameSavvy: 0,
                honesty: 0,
                verbosity: 0,
                sensitivity: 0
            },
            '',
            [],
            []
        ),
    ),
    alexiVolkov: new Actor
    (
        24,
        false,
        'Alexi Volkov',
        'Alexi',
        undefined, // The Forgotten Guns of Austerlitz
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
            {
                strength: 16,
                dexterity: 12,
                constitution: 16,
                intelligence: 14,
                wisdom: 18,
                charisma: 8
            },
            {
                gameSavvy: 0,
                honesty: 0,
                verbosity: 0,
                sensitivity: 0
            },
            '',
            [],
            []
        ),
    ),
    wilburWhateley: new Actor
    (
        25,
        false,
        'Wilbur Whateley',
        'Whateley',
        undefined, // The Dunwich Horror
        undefined,
        undefined,
        undefined,
        0,
        new ActorDetails
        (
            {
                strength: 18,
                dexterity: 8,
                constitution: 20,
                intelligence: 16,
                wisdom: 12,
                charisma: 4
            },
            {
                gameSavvy: 0,
                honesty: 0,
                verbosity: 0,
                sensitivity: 0
            },
            '',
            [],
            []
        ),
    ),
};
