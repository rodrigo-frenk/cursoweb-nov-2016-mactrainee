

// antes, usualmente, se trabajaba Javascript así:
/*
document.getElementById('titulo-prueba').style.color="red";
document.getElementById('titulo-prueba').style.backgroundColor="blue";

document.getElementById('titulo-prueba').onclick=function(){
alert("hiciste click")
}
*/

// jquery nos ayuda:
/*
$('#titulo-prueba').css({
color: "red",
backgroundColor: "blue",
fontSize: 100,
textAlign: "right"
});

$('#titulo-prueba').click(function(){
alert("hiciste click")
})
*/



// objeto de jQuery:
// se compone de un selector rodeado de comillas:

/*
$('etiqueta')
$('#identidad')
$('.clase')
$('elemento subelemento')
$('etiqueta[atributo=cierto_valor]')
*/


// Ejecutar una acción cuando haya cargado el Documento.
$(document).ready(function(){

  // Observar cuántos elementos toman los selectores:

  console.log( "¿Cuántas #caja-prueba-1 hay?", $("#caja-prueba-1").length );

  console.log( "¿Cuántas #caja-prueba-2 hay?", $("#caja-prueba-2").length );

  console.log( "¿Cuántas .caja hay?", $(".caja").length );


  // aplicar estilos a todos los elementos seleccionados:
  $('.caja').css({
    backgroundColor: "#ed683a"
  })

  // ejecutar una acción para cada uno de los elementos seleccionados:
  $('.caja').each(function(){
    // podemos tener una referencia a cada objeto seleccionado:
    cadaCaja = $(this)

    cadaCaja.css({
      fontSize: 20 + ( Math.random() * 100 )
    })

  })

  // responder a eventos de usuario:
  $('.caja').click(function(){

    // podemos tener una referencia al objeto clicado:
    objetoClicado = $(this);

    // podemos saber cuál elemento fue clicado:
    numero = objetoClicado.index();

    console.log("hiciste click sobre la caja número", numero );

  })



  // Podemos obtener el contenido HTML de un elemento:

  console.log( "Contenido de Caja:", $('#caja-prueba-1').html() );


  // Podemos cambiar el contenido HTML de un elemento

  $('#caja-prueba-2').html( "Nuevo Contenido creado con JS" );


  $('.caja').click(function(){

    cajaClicada = $(this);

    // el metodo siblings nos arroja los elementos que comparten selector con el
    // elemento clicado
    hermanos = cajaClicada.siblings();

    // iterar por cada uno de los hermanos
    hermanos.each(function(){

      // almacenar cada hermano en una variable temporal
      // (en este caso, this es ahora cada uno de los hermanos)
      hermano = $(this);

      // calcular 3 componentes de color,
      // que deben ser números enteros
      // entre 0 y 255

      r =  Math.round( Math.random() * 255 );
      g =  Math.round( Math.random() * 255 );
      b =  Math.round( Math.random() * 255 );

      hermano.html( r + ", " + g + ", " + b  )
      // en jquery podemos encadenar metodos:
      .css({
        backgroundColor: "rgba(" + r + ", " + g + ", " + b + ", 1)"
      });

    })

  });



  $('.caja').click(function(){

    $(this).animate(
      // 1er parametro: propiedades visuales:
      {
        height: 50 + Math.random() * 150,
        fontSize: 30 + Math.random() * 100
      },
      // 2o parametro (opcional): duracion en milisegundos
      3000,
      // 3er parametro (opcional): funcion a ejecutar al terminar
      function(){
        console.log("animación lista");
      } )

    })




    console.log("Introducción a jQuery: Documento Cargado");

  })
