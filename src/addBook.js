export const addBook = () => {
  // Obtener elementos
  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementById("closeModalBtn");

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  console.log("works")
  // Cerrar el modal cuando el usuario haga clic en el botón de cierre (X)
  closeBtn.onclick = function() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  // Cerrar el modal si el usuario hace clic fuera del modal
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  }
}
