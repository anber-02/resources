// --- 1. Impresión Básica ---
// Imprime un mensaje simple en la consola
console.log("Hola Mundo");

// Utilizando un template string
/*
  Permite 
  realizar un texto con salto de linea
  y tambien validar o utilizar expresiones
*/
console.log(`
  Hola Mundo utilizando un template string
  que permite 
  realizar un texto con salto de linea
  y tambien validar o utilizar expresiones
`);

// --- 2. Constantes y Variables (let vs const) ---
// No se puede reasignar (constante)
// Por buena práctica las constantes se escriben con MAYÚSCULAS
// Usar nombres descriptivos para cada caso
const PI = 3.14;

// Utilizando let: la variable se puede reasignar
let nombre = "luis";
let edad = 30;

nombre = "anberto"; // Reasignación

// Concatenación de cadenas
console.log("Hola mi nombre es " + nombre + " y mi edad es " + edad);

// --- 3. Tipos de Datos Primitivos ---

// Numericos
let temperatura = -5;

// String (cadenas de texto)
let mensaje = `Hola ${nombre}`; // Template String

// Booleanos
let esMayorDeEdad = true;

// Undefined -> Una variable declarada pero sin valor asignado
let usuario;
console.log(usuario); // Muestra: undefined

// Null -> Ausencia intencional de un valor (lo asignamos nosotros)
let peso = null;
console.log(peso);

// El valor de undefined JS lo asigna cuando no hay un valor, y el Null lo asignamos nosotros

// BIGINT: Para operaciones con números enteros muy grandes para evitar errores de cálculo
console.log(Number.MAX_SAFE_INTEGER); // Límite de números enteros: 9007199254740991
// Para usar o realizar operaciones con números más grandes, debemos utilizar el bigint,
// que se indica con una 'n' al final del número
console.log(1000000000099999n + 1n);

// --- 4. Verificar Tipo de Dato ---
console.log(typeof 42); // number
console.log(typeof "Hola"); // string
console.log(typeof {}); // object (para objetos)
console.log(typeof 43n); // bigint
console.log(typeof null); // object (nota: esto es un error histórico de JS)
