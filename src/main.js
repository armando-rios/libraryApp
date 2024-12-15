import { addBook } from './addBook'
import { createBook } from './createBook'
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

  const title = document.querySelector("#title").value
  const author = document.querySelector("#author").value
  const pages = document.querySelector("#pages").value

  createBook(title, author, pages)
})
