/*
 * Bloques de código que podemos ejecutar cuantas veces sea necesario.
 * Realizan una tarea específica.
 * Pueden recibir datos de entrada (parámetros).
 * Pueden devolver un resultado.
 * Se pueden reutilizar múltiples veces.
 */

// Definicion de la funcion
function sumar(a, b) {
  //       │     │  │
  //       │     │  └── Segundo parámetro
  //       │     └───── Primer parámetro
  //       └─────────── Nombre de la función

  return a + b;
  //     └──┴──── Operación que se realiza
  // La palabra clave 'return' indica el fin de la función y todo el código debajo no se evalúa
}

// Llamar o invocar a la función
console.log(sumar(1, 2));
console.log(sumar(1000, 10)); // Las funciones se pueden reutilizar

// Función sin parámetros
function saludar() {
  console.log("Hola");
}

// Si una función no tiene return, devuelve undefined:
let resultado = saludar();
console.log(resultado); // Muestra: undefined

// El código después del return no se ejecuta
function ejemplo() {
  console.log("Esto se ejecuta");
  return "Fin";
  console.log("Esto NO se ejecuta"); // Nunca llega aquí
}

ejemplo(); // Imprime: "Esto se ejecuta"

// --- 6. Funciones Integradas del Navegador/JS ---
// Consola
console.error("Un error");
console.warn("Un advertencia");
console.info("information");
console.time("procesamiento");
// Código a medir
console.timeEnd("procesamiento");
console.table({ name: "anberto", age: 32 });

// Ventanas emergentes
// alert("Hola");         // Manda un mensaje en una ventana emergente
// confirm("Esta bueno esto"); // Devuelve true (si da ok) o false
// prompt("Esta bueno esto?"); // Devuelve lo que el usuario escribe

// * Funciones flechas
// Tiene un return implícito

const sumar = (a, b) => {
  return a + b;
};

const sumar2 = (a, b) => a + b;

// * Funciones anónimas
// son funciones que no tiene un nombre definido
(function () {
  console.log("Hola no tengo un nombre definido jsjs");
});

// EN JAVASCRIPT TAMBIÉN TENEMOS CALLBACKS
// Los callbacks son funciones que se pasan como parameters y se ejecutan hasta que pase algo

// por ejemplo
function saludar(nombre, callback) {
  //  Primero ejecuta esto antes y después la function
  console.log("Hola " + nombre);

  callback();
}

function despedida() {
  console.log("Adiós!");
}

// Usamos la función saludar y pasamos despedida como callback
saludar("Ana", despedida);
