function Book(id, title, author, pages) {
  this.id = id
  this.title = title
  this.author = author
  this.pages = pages
}

const books = JSON.parse(localStorage.getItem("books"))

export function createBook(title, author, pages) {
  const generateId = () => {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    const randomness = Math.random().toString(16).substring(2, 8);
    return timestamp + randomness;
  };

  const id = generateId(); // Combina timestamp + números aleatorios
  const book = new Book(id, title, author, pages)

  books.push(book);

  localStorage.setItem("books", JSON.stringify(books))

}
