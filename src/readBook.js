export function readBook(id) {
  const books = JSON.parse(localStorage.getItem("books"))
  const book = books.find((book) => book.id == id)
  if (book) {
    book.read = !book.read
  }
  localStorage.setItem("books", JSON.stringify(books))
}
