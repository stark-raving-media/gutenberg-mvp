// Create Book class
export class Book
{
  constructor
  (
    title,
    author,
    year,
    edition,
    condition, // Book world health
    FAFOrating, // 1 - 100, lower is harder
  )
  {
    this.title = title;
    this.author = author;
    this.year = year;
    this.edition = edition;
    this.condition = Math.min(100, Math.max(1, condition)); // clamp int between 1 - 100
    this.FAFOrating = Math.min(100, Math.max(1, FAFOrating)); // clamp int between 1 - 100
  };
};