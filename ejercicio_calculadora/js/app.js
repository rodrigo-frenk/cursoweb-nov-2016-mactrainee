$(document).foundation()

$(document).ready(function(){

  prepararCalculadora();

})


var numerosIntroducidos;
var numeroActual;
var digitosUsados;
var totalCalculado;
var operacionSeleccionada;
var calculoRealizado;

function prepararCalculadora() {

  reiniciarCalculadora();

  // al operar el botón de reinicio, restaurar estado inicializar

  $('#calculadora-reinicio').click(function(){
    reiniciarCalculadora();
  })


  prepararNumeros();

  prepararOperaciones();

  prepararCalculo();


}


function prepararCalculo() {
  $('#calculadora-resultado').click(function(){

    var resultado;

    switch( operacionSeleccionada ) {

        case "suma" :
        resultado = suma( numerosIntroducidos[0], numerosIntroducidos[1] );
        break;

        case "resta" :
        resultado = resta( numerosIntroducidos[0], numerosIntroducidos[1] );
        break;

        case "multiplicacion" :
        resultado = multiplicacion( numerosIntroducidos[0], numerosIntroducidos[1] );
        break;

        case "division" :
        resultado = division( numerosIntroducidos[0], numerosIntroducidos[1] );
        break;

        case "potencia" :
        resultado = potencia( numerosIntroducidos[0], numerosIntroducidos[1] );
        break;

        case "raiz" :
        resultado = raiz( numerosIntroducidos[0], numerosIntroducidos[1] );
        break;

    }

    $('#calculadora-pantalla').html( resultado );

    calculoRealizado = true;

  })
}

function prepararOperaciones() {
  // al seleccionar una operación,
  $('.calculadora-operacion').click(function(){

    // almacenar cuál se escogió

    operacionSeleccionada = $(this).data('accion');
    numeroActual++;
    digitosUsados = [];

    actualizarPantalla();

  })
}

function prepararNumeros() {

    // al seleccionar un número,
    $(".calculadora-numero").click(function(){
      if( calculoRealizado ) {
        reiniciarCalculadora();
        calculoRealizado = false;
      }
      digito = $(this).data("numero");

      // lo vamos a añadir al arreglo de digitos seleccionados
      digitosUsados.push( digito );


    // de inmediato, calcular el número compuesto de
    // todos los dígitos seleccionados:

    totalCalculado = 0;

    // para calcular, tomaremos los numeros del arreglo,
    // usando primero los últimos en introducir

    // bucle invertido para obtener los últimos dígitos primero
    for (var i = digitosUsados.length - 1; i >= 0; i--) {

      // uno por uno, iremos multiplicando por 10,
      // elevado al número de dígitos ya calculados

      var siguienteDigito = digitosUsados[ i ];
      var siguientePotencia = (digitosUsados.length-1) - i;

      totalCalculado += siguienteDigito * ( Math.pow(10, siguientePotencia))

    }

    numerosIntroducidos[ numeroActual ] = totalCalculado;

    actualizarPantalla();

    })
}

function actualizarPantalla() {

  $('#calculadora-pantalla').html( numerosIntroducidos[0] );

  if( operacionSeleccionada != 0 ) {
    // añadir el símbolo de la operacion
    var simbolo;

    switch( operacionSeleccionada ) {

        case "suma" :
        simbolo = "+";
        break;
        case "resta" :
        simbolo = "-";
        break;
        case "multiplicacion" :
        simbolo = "x";
        break;
        case "division" :
        simbolo = "%";
        break;
        case "potencia" :
        simbolo = "^";
        break;

        case "raiz" :
        simbolo = "√";
        break;
    }


    $('#calculadora-pantalla').append(
      " " + simbolo + " "
    );

  }

  if( numerosIntroducidos.length > 1 ) {
    $('#calculadora-pantalla').append(
      numerosIntroducidos[1]
    );
  }

}


function reiniciarCalculadora() {

  operacionSeleccionada = 0;
  numerosIntroducidos = [];
  digitosUsados = [];

  numeroActual = 0;

  totalCalculado = 0;

  calculoRealizado = false;

  $('#calculadora-pantalla').html( 0 );

}







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

function raiz( a, n ) {
  return Math.pow( a, 1/n );
}
