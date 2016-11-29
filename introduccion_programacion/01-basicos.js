/*
Introducción a la Programación
Lenguaje: Javascript
*/

// Comentarios:
// texto ignorado por Javascript
// sirve para explicar el código


// Comentario de una línea

/*
Comentario
multi-
línea
*/


// Variables:

// en javascript, no es necesario declarar:

cualquierCosa = 17;


// sin embargo, puede ser relevante declarar:
// (al estar así declaradas, controlamos su "ámbito")

var nombreVariable;
nombreVariable = 34;

// En JS, las variables pueden tener cualquier valor

nombreVariable = 100;
nombreVariable = "Un texto...";
nombreVariable = [1,4,7];
nombreVariable = function() { console.log("una funcion"); };




/* En otros lenguajes, tenemos que especificar el tipo de dato de una variable.
En JS, no

int numero = 3;
float decimal = 3.6;
String texto = "un texto";

*/



a = 10;
b = 7;
resultado = a + b;

console.log( "resultado:", resultado );




unTexto = "Hola";
unTexto += ", qué tal?";
// esto es lo mismo que unTexto = unTexto + ...

console.log( unTexto );



/*
Operadores aritméticos
+   suma
-   resta
/   division
*   multiplicacion
%   modulo
++  incremento
--  decremento

*/


edad = 7;
edad++;
edad++;
edad++;
edad--;
console.log("edad incrementó a:", edad);







/* Estructuras de Control */

edad = 17;

if( edad < 18 ) {
  console.log("es menor de edad");
}


if( edad >= 18 ) {
  console.log("Puede pasar");
} else {
  console.log("No puede pasar");
}



/*
Operadores Relacionales

>   mayor que
<   menor que
>=  mayor o igual que
<=  menor o igual que
==  igual que
!=  diferente que
=== idéntico
!== no idéntico

*/


/*
Operadores lógicos

&&  AND
||  OR
^   XOR
!   NOT
*/

// operador &&, sumar condiciones

edad = 20;
traeIdentificacion = true;

if( edad >= 18 && traeIdentificacion ) {
  console.log("Puede pasar");
}


// operador ||, OR, uno u otro
comproBoleto = false;
tieneGafete = true;

if( comproBoleto || tieneGafete ) {
  console.log("Puede pasar");
}


edad = 17;
comproBoleto = true;
tieneGafete = false;

// condiciones anidadas
if( edad >= 18 && ( comproBoleto || tieneGafete ) ) {
  console.log("Puede pasar");
}


// operador NOT (!): negar una condicion

if( ! traeIdentificacion ) {
  console.log(
    "Pedirle que imprima su CURP en el cyber de al lado"
  );
}



if( ! edad >= 18 ) {
  console.log("es menor de edad");
}






/* Estructura de Control 2: switch */

edad = 18;

switch( edad ) {

  case 0:
  console.log("recien nacido");
  break;

  case 18:
  console.log("ya tiene mayoría de edad");
  break;

  case 27:
  console.log("la edad de Jimi Hendrix");
  break;

  case 33:
  console.log("la edad de Cristo");
  break;

  default:
    console.log("ninguna de las anteriores");


}




// Loops (o Bucles)

// while, actuar mientras se cumpla una condición

edad = 0;

while( edad < 18 ) {
  console.log( "Tiene " + edad + " años. Aún es menor de edad." );
  edad++;
}



// for
// el mismo ejemplo anterior, pero sin el riesgo inherente a while
for (var i = 0; i < 18; i++) {
  console.log( "Tiene " + i + " años. Aún es menor de edad." );
}
