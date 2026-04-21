// Create Book class
export class Book
{
  constructor
  (
    id,
    title,
    author,
    year,
    //edition,
    //condition, // Book world health
    FAFOrating, // 1 - 500, lower is harder
    notes
  )
  {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    //this.edition = edition;
    //this.condition = Math.min(100, Math.max(1, condition)); // clamp int between 1 - 100
    this.FAFOrating;
    this.notes = notes;
  };
};