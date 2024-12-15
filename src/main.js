import { addBook } from './addBook'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'

const addBookBtn = document.querySelector("#addBook")

addBookBtn.addEventListener("click", () => {
  addBook()
})
