export const deleteBook = (id, books) => {
  const newBook = books.filter((book) => book.id != id)
  localStorage.setItem("books", JSON.stringify(newBook))
}
