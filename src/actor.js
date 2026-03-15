
// Create Actor object
export class Actor 
{
  constructor
  (
    id,
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
    this.id = id;
    this.fullName = fullName;
    this.nickName = nickName;
    this.originBook = originBook; // Class
    this.locationBook = locationBook; // Class
    this.icon = icon;
    this.picture = picture;
    this.details = details; // Class
    this.FAstrikes = FAstrikes; // int
  };
};