import { Actor } from './actor.js';
import { ActorDetails } from './actorDetails.js';
import { ActorReputation } from './actorReputation.js';

// Jean Valjean
export const jeanValjean = new Actor
(
  'Jean Valjean',
  'Valjean',
  'Les Misérables',
  undefined,
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
    [],
    []
  ),
);
