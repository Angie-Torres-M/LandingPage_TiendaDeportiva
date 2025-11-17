// Incluir fragmentos HTML
async function includeHTML(selector, url) {
  const host = document.querySelector(selector);
  if (!host) return; // si no existe el contenedor, salimos

  const res = await fetch(url, { cache: "no-cache" });
  if (!res.ok) {
    console.error(`No se pudo cargar ${url}`);
    return;
  }

  host.innerHTML = await res.text();
}
// Ajustar margen del <main>

function adjustMainOffset() {
  // header viene de header.html dentro de #site-header
  const header = document.querySelector("#site-header header");
  // main está en tu index.html
  const main = document.querySelector("main");

  if (header && main) {
    const h = header.offsetHeight;
    main.style.marginTop = `${h}px`;
  }
}
// Inicializar
document.addEventListener("DOMContentLoaded", async () => {
  // 1) Inserta HEADER
  await includeHTML("#site-header", "./header.html");

  // 2) Inserta FOOTER
  await includeHTML("#site-footer", "./footer.html");

  await includeHTML("#site-carrusel", "./carrusel.html");

  await includeHTML("#site-carruselMasQS", "./carruselMasQS.html");

  await includeHTML("#site-productos_y_promociones", "./productos_y_promociones.html");
  
  // 3) Ajusta margen del main (ya existe el header)
  adjustMainOffset();

  // 4) Recalcular en resize por si cambia la altura
  window.addEventListener("resize", adjustMainOffset);
});
