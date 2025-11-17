// =========================================
// MANEJO DE BOTONES "AGREGAR AL CARRITO"
// =========================================

const botonesCarrito = document.querySelectorAll(".boton-agregar-carrito");
const toast = document.getElementById("toast-sportzone");

botonesCarrito.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tarjeta = boton.closest(".tarjeta-producto");

    // Reiniciar animación de sacudida
    tarjeta.classList.remove("sacudir");
    void tarjeta.offsetWidth;
    tarjeta.classList.add("sacudir");

    // Mostrar toast
    mostrarToast();
  });
});

// -----------------------------------------
// FUNCIÓN TOAST
// -----------------------------------------
function mostrarToast() {
  toast.classList.add("activo");

  // Ocultar después de 1.8s
  setTimeout(() => {
    toast.classList.remove("activo");
  }, 1800);
}
