import { addBook } from './addBook'
import { renderBooks } from './renderBooks'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'

renderBooks()

const addBookBtn = document.querySelector("#addBook")

addBookBtn.addEventListener("click", () => {
  addBook()
})
