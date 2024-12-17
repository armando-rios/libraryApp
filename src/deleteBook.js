export const deleteBook = (id) => {
  const books = JSON.parse(localStorage.getItem("books"))
  console.log(id)
  const newBook = books.filter((book) => book.id != id)
  localStorage.setItem("books", JSON.stringify(newBook))
}
