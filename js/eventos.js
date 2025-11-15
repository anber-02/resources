/**
 * Proceso para darle interactividad a una página web (Manipulación del DOM)
 */

// 1. Identificar el Elemento HTML a manipular
// Se puede hacer de varias formas:
//   - Por ID:      <button id="btn"></button>
//   - Por Clase:   <article class="card"></article>
//   - Por Etiqueta: <img>, <div>, <article>

// 2. Seleccionar el Elemento HTML mediante JavaScript
// Usamos el método document.querySelector() para obtener la referencia al elemento.
// Se recomienda usar 'const' para la referencia al elemento.
const boton = document.querySelector("#btn"); // Selecciona el elemento con el ID "btn"
const tarjeta = document.querySelector(".card"); // Selecciona el primer elemento con la clase "card"
const imagen = document.querySelector("img"); // Selecciona la primera etiqueta <img>

// 3. Agregar un "Escuchador de Eventos" (EventListener)
// Se usa el método addEventListener() para que el elemento reaccione a una acción específica
// (como un 'click', 'mouseover', 'submit', etc.).

// Sintaxis tradicional (usando una función anónima)
boton.addEventListener("click", function () {
  // Código que se ejecutará cuando el usuario haga click en el botón
  console.log("¡Click detectado usando function!");
  // Aquí podemos modificar el contenido, cambiar estilos, etc.
});

// Sintaxis moderna (usando una Arrow Function)
boton.addEventListener("click", () => {
  // El código es más conciso y realiza la misma tarea
  console.log("¡Click detectado usando arrow function!");
});

// --- Configuración del Script en HTML ---

// Para incluir y ejecutar el código JavaScript de forma moderna y correcta en el HTML:
//
// 1. Uso de 'type="module"' en el tag <script>:
//    <script type="module"></script>
//
//    Esto asegura que el HTML se evalúe primero antes de que se ejecute el script.
//    Además, permite utilizar funcionalidades de JavaScript moderno como las sentencias `import`.
//
// 2. Si el código está en un archivo externo (por ejemplo, "script.js"):
//    <script type="module" src="./script.js"></script>
//
//    Esta es la forma recomendada para mantener el código JS separado del HTML.

// Manipulation del DOM
boton.addEventListener("click", () => {
  // Manipula el texto del elemento
  boton.textContent = "Nuevo valor";
  boton.style.backgroundColor = "#4caf50";
  boton.disabled = true;
});

// Ahora con clases
boton.addEventListener("click", () => {
  boton.classList.add("is_applied");
  boton.disabled;
});

// Ahora con varios botones
const botones = document.querySelectorAll(".buttons");
// Esto devolve una lista con todos los botones para poder manejarlo necesitamos
// iterar la lista mediante un bucle

botones.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("is_applied");
    btn.disabled;
  });
});

// querySelectorAll devuelve un NodeList con todos los botones
// forEach itera sobre cada botón
// Para cada botón, añadimos un addEventListener
// Cuando hacemos click en cualquier botón, solo ese botón cambia

// Propiedades utiles

// innerHTML - Contenido HTML interno
// console.log(boton.innerHTML)

// // id - El identificador
// console.log(boton.id) // "boton-importante"

// // className - Las clases CSS
// console.log(boton.className)

// // classList - Manipular clases (más adelante)
// console.log(boton.classList)

// // disabled - Si está deshabilitado
// console.log(boton.disabled) // false

// // value - Valor (para inputs)
// const input = document.querySelector('#mi-input')
// console.log(input.value)

// boton.addEventListener('click', function () {
//   boton.textContent = '¡Aplicado!'
//   boton.style.backgroundColor = '#22c55e'
//   boton.style.color = 'white'
//   boton.style.border = 'none'
//   boton.style.cursor = 'not-allowed'
// })

// querySelector - Solo el primero
// const primerBoton = document.querySelector('.button-apply-job')
// primerBoton.addEventListener('click', function () {
//   console.log('Solo funciona en el primer botón')
// })

// // querySelectorAll - Todos
// const todosLosBotones = document.querySelectorAll('.button-apply-job')
// todosLosBotones.forEach(function (boton) {
//   boton.addEventListener('click', function () {
//     console.log('Funciona en todos los botones')
//   })
// })
