export const renderBooks = () => {

  const library = document.querySelector("#library")

  const books = JSON.parse(localStorage.getItem("books"))

  library.innerHTML = ""

  books.forEach((book) => {
    library.innerHTML += `
    <div
      class="flex flex-col justify-between px-4 py-6 w-64 bg-zinc-800 shadow-purple-600 hover:shadow-purple-500 shadow-md hover:shadow-lg duration-200 rounded-lg">
      <div>
        <p class="font-semibold">Title:</p>
<p3>${book.title}</p3>
      </div>
      <div>
        <p class="font-semibold">Author:</p>
<p class="text-balance">${book.author}</p>
      </div>
      <div>
        <p class="font-semibold">Pages:</p>
<p>${book.pages}</p>
      </div>
    </div>
`
  })
}
