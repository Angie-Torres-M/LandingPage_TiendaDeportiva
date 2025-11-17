// js/carrusel.js


function setupCarousel(carouselId, indicatorContainerId) {
  const carouselEl = document.getElementById(carouselId);
  const indicatorContainer = document.getElementById(indicatorContainerId);

  // Si no existe el carrusel o el contenedor, salimos silenciosamente
  if (!carouselEl || !indicatorContainer) return;

  const items = carouselEl.querySelectorAll(".carousel-item");
  if (!items.length) return;

  //  Asegurarnos de que Bootstrap exista
  if (!window.bootstrap || !bootstrap.Carousel) {
    console.warn("Bootstrap Carousel no está disponible.");
    return;
  }

  // Inicializar el carrusel de Bootstrap (auto-slide + flechas)
  const bsCarousel = new bootstrap.Carousel(carouselEl, {
    interval: 2000,   // 2 segundos por slide
    ride: "carousel", // inicia solo
    pause: "hover",   // se pausa al poner mouse encima
    wrap: true        // vuelve al inicio al llegar al final
  });

  // Índice inicial (buscar .active)
  let currentIndex = Array.from(items).findIndex(item =>
    item.classList.contains("active")
  );
  if (currentIndex === -1) currentIndex = 0;

  function createIcons() {
    indicatorContainer.innerHTML = "";

    items.forEach((_, index) => {
      const span = document.createElement("span");
      span.classList.add("indicator");

      // Al hacer click en la estrellita, ir a ese slide
      span.addEventListener("click", () => {
        bsCarousel.to(index);
      });

      indicatorContainer.appendChild(span);
    });
  }

  function createIcons() {
    svgContainer.innerHTML = ''; // Limpiar cualquier icono previo
    images.forEach(() => {
      const img = document.createElement('span');
      img.classList.add('indicator', 'inactive');
      img.innerHTML = `<img src="./images/estrella(r).png" alt="Icono Inactivo" />`;
      svgContainer.appendChild(img);
    });
  }

  function updateIcons() {
    const icons = svgContainer.querySelectorAll('.indicator');
    icons.forEach((icon, index) => {
      icon.innerHTML = index === currentIndex
        ? `<img src="./images/estrella.png" alt="Icono Activo" />`
        : `<img src="./images/estrella(r).png" alt="Icono Inactivo" />`;
    });
  }

  // Cuando Bootstrap cambie de slide, actualizar índice e iconos
  carouselEl.addEventListener("slid.bs.carousel", event => {
    currentIndex = Array.from(items).indexOf(event.relatedTarget);
    if (currentIndex === -1) currentIndex = 0;
    updateIcons();
  });

  

  // Inicializar iconos
  createIcons();
  updateIcons();
}

