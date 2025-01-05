export const renderBooks = (books) => {

  const library = document.querySelector("#library")

  library.innerHTML = ""

  books.forEach((book) => {
    const yes = `<i data-book-id="${book.id}" class="read-btn fa-solid fa-toggle-on text-2xl"></i>`
    const no = `<i data-book-id="${book.id}" class="read-btn fa-solid fa-toggle-off text-2xl"></i>`
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
      <div class="flex mt-6 gap-4">
        <button class="text-2xl hover:scale-125 hover:-rotate-12 duration-200 text-red-500 text-center"><i data-book-id="${book.id}" class="delete-btn fa-solid fa-trash"></i></button>
        <button class="flex items-center gap-2">
          <p>READ</p>
        ${book.read ? yes : no}
        </button>
      </div>
    </div>
`
  })
}
