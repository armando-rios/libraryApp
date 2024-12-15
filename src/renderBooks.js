export const renderBooks = () => {
  let books = [
    {
      title: "El gran Gatsby",
      author: "F. Scott Fitzgerald",
      pages: 180
    },
    {
      title: "Orgullo y prejuicio",
      author: "Jane Austen",
      pages: 279
    },
    {
      title: "El principito",
      author: "Antoine de Saint-Exupéry",
      pages: 96
    },
    {
      title: "La sombra del viento",
      author: "Carlos Ruiz Zafón",
      pages: 486
    },
  ];

  const library = document.querySelector("#library")

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
