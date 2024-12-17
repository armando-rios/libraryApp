export const deleteBook = (id) => {
  const books = JSON.parse(localStorage.getItem("books"))
  const newBook = books.filter((book) => book.id != id)
  localStorage.setItem("books", JSON.stringify(newBook))
}
