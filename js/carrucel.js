let imagenes = [
  {
    url: "../images/imagen1.jpg",
    nombre: "Visual Impact: Equipamiento Integral",
    descripcion:
      "Diseño de Alto Rendimiento: Solución de retail enfocada en maximizar la visibilidad del producto y optimizar el flujo del cliente. Destaca la combinación de iluminación estratégica y mobiliario modular para una experiencia de compra dinámica y profesional.",
  },
  {
    url: "../images/imagen2.jpg",
    nombre: "Experiencia Fit: Espacios Modulares",
    descripcion:
      "Flexibilidad y Exhibición Premium: Este concepto presenta un equipamiento versátil ideal para marcas de moda deportiva. Se enfoca en sistemas de pared altamente adaptables y mesas de exposición centrales que permiten rotar colecciones rápidamente y destacar lanzamientos clave.",
  },
  {
    url: "../images/imagen3.jpg",
    nombre: "Performance Retail: Ambiente de Meta",
    descripcion:
      "Inspiración y Funcionalidad: Un diseño que traslada la energía del deporte al punto de venta. Utiliza una paleta de colores y materiales que evocan calidad y resistencia, con áreas de exposición claras que guían al consumidor a través de categorías específicas (running, training, etc.).",
  },
];

let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("img");
let puntos = document.getElementById("puntos");
let texto = document.getElementById("texto");
let actual = 0;
posicionCarrusel();

atras.addEventListener("click", function () {
  actual -= 1;

  if (actual == -1) {
    actual = imagenes.length - 1;
  }

  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
  texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
  posicionCarrusel();
});

adelante.addEventListener("click", function () {
  actual += 1;

  if (actual == imagenes.length) {
    actual = 0;
  }

  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
  texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
  posicionCarrusel();
});

function posicionCarrusel() {
  puntos.innerHTML = "";
  for (var i = 0; i < imagenes.length; i++) {
    if (i == actual) {
      puntos.innerHTML += '<p class="bold">.<p>';
    } else {
      puntos.innerHTML += "<p>.<p>";
    }
  }
}
