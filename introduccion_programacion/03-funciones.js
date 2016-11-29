// Funciones


// una función es básicamente un grupo de instrucciones
// que puede ser reutilizado.

// declarar una función:
function miPrimeraFuncion() {
  console.log("Mi primera funcion!");
}

// invocarla con su nombre:
miPrimeraFuncion();


// una función algo inútil:

function otraFuncion() {
  var resultado = 20 + 30;
  console.log("el resultado de 20 + 30 es", resultado);
}

otraFuncion();


// hacer que sirva un poco más:
// Añadir parámetros a la función:
function sumarUnosNumeros( a, b ) {
  var resultado = a + b;
  console.log("el resultado de ", a, " + ", b, "es", resultado );
}


sumarUnosNumeros( 33, 132 );

// Vamos a mejorar aun más nuestra función para hacerla más útil:

// Funciones que retornan valores:


function suma( a, b ) {
  return a + b;
}
function resta( a, b ) {
  return a - b;
}
function multiplicacion( a, b ) {
  return a * b;
}
function division( a, b ) {
  return a / b;
}

// un poco más complejas, y dependen de Math
function potencia( a, b ) {
  return Math.pow( a, b );
}
function raiz2( a ) {
  return Math.sqrt( a );
}
function raizN( a, n ) {
  return Math.pow( n, 1/a );
}



// demostración de la función "sumar:"
var num1 = 300;
var num2 = 555;
var resultado = suma( num1, num2 );

console.log("El resultado de ", num1, " + ", num2, "es", resultado );

// anidar nuestra funcion:

console.log( suma( suma( 100, 30), suma( 40, suma( 10, 80 ) ) ) );





// escribir funciones aritméticas faltantes:
// resta, multiplicacion y division




console.log("Introducción a Javascript: Funciones");
