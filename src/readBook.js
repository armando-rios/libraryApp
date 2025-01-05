export function readBook(id, books) {
  const book = books.find((book) => book.id == id)
  if (book) {
    book.read = !book.read
  }
  localStorage.setItem("books", JSON.stringify(books))
}
