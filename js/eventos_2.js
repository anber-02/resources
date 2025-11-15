// OTRA FORMA DE HACERLO

// DELEGACIÓN DE EVENTOS

const containerPadre = document.querySelector(".container");

containerPadre.addEventListener("click", function (event) {
  // Utilizando el event podemos ver el elemento al que se le dio click
  // event.target: El elemento donde se hizo click
  // event.currentTarget: El elemento donde añadiste el addEventListener
  const element = event.target;

  if (element.classList.contains("btn")) {
    // Aqui sabemos que le estamos dando al btn
    element.textContent = "Nuevo valor";
    element.style.backgroundColor = "#4caf50";
    element.disabled = true;
  }
});

// Esto funciona debido a la propagación de eventos
// esto pasa el evento del hijo al padre y asi sucesivamente
/**
 * <body>
  ← 3. Luego sube al body
  <div class="container">← 2. Luego sube al div <button>Click</button> ← 1. Click aquí primero</div>
</body>
 */
/**
 * 
const jobsList = document.querySelector('.jobs-list')

jobsList.addEventListener('click', function (event) {
  //                                         │
  //                                         └── El evento contiene información

  if (event.target.classList.contains('button-apply-job')) {
    //     │        │          │
    //     │        │          └── ¿Tiene esta clase?
    //     │        └───────────── Lista de clases del elemento
    //     └────────────────────── Elemento donde se hizo click

    const boton = event.target // El botón específico

    boton.textContent = '¡Aplicado!'
    boton.disabled = true
  }
})
 */

// Añadimos un evento al contenedor padre (.jobs-list)
// Cuando hacemos click en cualquier lugar del contenedor, se ejecuta el callback
// Usamos event.target para saber dónde hicimos click exactamente
// Con classList.contains() verificamos si es un botón de aplicar
// Si lo es, aplicamos los cambios solo a ese botón

// ? optional chaining operador

// input -> para los campos de entrada
// blur -> cuando quitamos el foco del input
// change -> cuando cambia el valor de un select
// submit -> para los formularios por defecto recarga la pagina
// podemos controlarlo con preventDefault()
// keydown para las teclas
