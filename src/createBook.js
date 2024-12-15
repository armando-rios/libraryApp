function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

const books = JSON.parse(localStorage.getItem("books"))

export function createBook(title, author, pages) {
  const book = new Book(title, author, pages)

  books.push(book);

  localStorage.setItem("books", JSON.stringify(books))

}
