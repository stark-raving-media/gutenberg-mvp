// Create Actor class
export class Actor 
{
  constructor
  (
    id,
    playable = false, // Available for Player Team
    isOpposition = false, // Can never be chosen for Player's Team
    fullName, 
    nickName, 
    originBook,
    locationBook,
    icon,
    portrait,
    FAstrikes, // per book - should this live here??
    details
  ) 

  {
    this.id = id;
    this.playable = playable;
    this.isOpposition = isOpposition;
    this.fullName = fullName;
    this.nickName = nickName;
    this.originBook = originBook; // Class
    this.locationBook = locationBook; // Class
    this.icon = icon;
    this.portrait = portrait;
    this.details = details; // Class
    this.FAstrikes = FAstrikes; // int
  };
};