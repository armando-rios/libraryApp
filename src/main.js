import { addBook } from './addBook'
import { createBook } from './createBook'
import { deleteBook } from './deleteBook'
import { renderBooks } from './renderBooks'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'

if (localStorage.getItem("books") === null) {
  localStorage.setItem("books", JSON.stringify([]))
}

renderBooks()

const addBookBtn = document.querySelector("#addBook")

addBookBtn.addEventListener("click", () => {
  addBook()
})

const addBookForm = document.querySelector("#addBookForm")

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const title = document.querySelector("#title").value
  const author = document.querySelector("#author").value
  const pages = document.querySelector("#pages").value

  createBook(title, author, pages)

  renderBooks()

  const modal = document.getElementById("myModal");

  modal.classList.add("hidden");
  modal.classList.remove("flex");
})

const library = document.querySelector("#library")

library.addEventListener("click", (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const bookId = e.target.dataset.bookId
    deleteBook(bookId)
    renderBooks()
  }
})
