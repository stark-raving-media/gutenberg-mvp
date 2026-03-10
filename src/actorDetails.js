// Create class for Actor details
export class ActorDetails 
{
  constructor(stats, traits, status = [], reputations = [])
  {
    this.stats =
    {
      strength: stats.strength,
      dexterity: stats.dexterity,
      constitution: stats.constitution,
      intelligence: stats.intelligence,
      wisdom: stats.wisdom,
      charisma: stats.charisma
    }
    this.traits =
    {
      gameSavvy: traits.gameSavvy,
      honesty: traits.honesty,
      verbosity: traits.verbosity,
      sensitivity: traits.sensitivity,
    }
    this.status = status; // Status array
    this.reputations = reputations; // Reputation array
  };
};