
// Create Actor object
export class Actor 
{
  constructor
  (
    fullName, 
    nickName, 
    originBook,
    locationBook,
    icon,
    picture,
    FAstrikes, // per book - should this live here??
    details
  ) 
  
  {
    this.fullName = fullName;
    this.nickName = nickName;
    this.originBook = originBook; // Class
    this.locationBook = locationBook; // Class
    this.details = details; // Class
    this.FAstrikes = FAstrikes; // int
  };
};