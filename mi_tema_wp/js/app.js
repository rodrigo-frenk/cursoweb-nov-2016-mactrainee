$(document).foundation();

$(document).ready(function(){

  prepararResize();

  prepararPlugins();

  prepararCategorias();

  prepararMenuMovil();

})


prepararMenuMovil = function() {


  $('#menu-movil-abrir').click(function(){

    if( ! $('#menu-movil').hasClass('expanded') ) {

      $('#menu-movil')
      .removeClass('hidden')
      .addClass('expanded')

      shareH('#menu-movil .share-h')
      verticalCenter('#menu-movil .v-center')

    }

  })


  $('#menu-movil-cerrar').click(function(){

    if( $('#menu-movil').hasClass('expanded') ) {

      $('#menu-movil')
      .removeClass('expanded')
      .addClass('hidden')

    }

  })


}



var alturaCategoriasOriginal;

prepararCategorias = function() {

  if( $(window).width() < 641 ) {

    $('#categorias-menu').addClass('hidden')

    alturaCategoriasOriginal = $('#categorias').height();

    $('#categorias-boton').click(function(){

      if( ! $('#categorias-menu').hasClass('expanded') ) {


        alturaContenedor = $('#contenedor-principal').height();

        $('#categorias').animate({
          height: alturaContenedor
        },
        300,
        function(){
          // esta función se ejecuta al terminar la animación
          $('#categorias-menu')
          .removeClass('hidden')
          .addClass('expanded')

          $('#categorias-boton-flecha')
          .removeClass('fa-caret-down')
          .addClass('fa-caret-up')

        });

      } else {


          $('#categorias-menu').addClass('hidden')

          $('#categorias').animate({
            height: alturaCategoriasOriginal
          },
          300,
          function(){
            // esta función se ejecuta al terminar la animación
            $('#categorias-menu')
            .removeClass('expanded')

            $('#categorias-boton-flecha')
            .removeClass('fa-caret-up')
            .addClass('fa-caret-down')

          });




      }

    })

  }



}

// variable para hacer "debounce" del evento de resize
var isWindowResizing = false;

prepararResize = function() {

  // declarar una función a ejecutarse cuando se reescale la ventana:
  $(window).resize( function(){

    if( ! isWindowResizing ) {

      isWindowResizing = setTimeout( function() {

        console.log("resize!");

        shareW();
        shareH();

        verticalCenter();


        isWindowResizing = false;

      }, 300 )

    }
  })

  // detonar el evento de reescala al cargar:
  $(window).trigger('resize')

}

prepararPlugins = function() {

  // preparar imgLiquid:

  // escalar y recortar la imagen para que llene el 100% del contenedor:
  $('.imgLiquidFill').imgLiquid();

  // escalar la imagen para que quepa completa en el contenedor:
  $('.imgLiquidNoFill').imgLiquid({
    fill: false
  });

  // escalar la imagen para que quepa completa en el contenedor,
  // pegarla del lado izquierdo
  $('.imgLiquidNoFillLeft').imgLiquid({
    fill: false,
    horizontalAlign: "left"
  });

}



shareW = function( selector ) {

  if (typeof(selector)==='undefined')
  selector = '.share-w';

  $( selector ).each(function(){

    // seleccionar el contenedor
    var parent = $(this);

    // invisibilizar el contenedor:
    parent.css({opacity:0});

    // encontrar el ancho del contenedor
    // tuvimos que utilizar JS nativo (para prevenir que el valor de ancho se
    // redondeara)

    var parentWidth = parent[0].getBoundingClientRect().width;

    // Con puro jQuery, lo hubiéramos resuelto así:
    // var parentWidth = parent.width();

    // contar el número de elementos que comparten ancho
    var numItems = parent.children().length;

    // calcular el ancho de cada elemento
    var itemWidth = parentWidth / numItems;


    // asignar este ancho por igual a todos los elementos del mismo contenedor,
    // es importante tomar en cuenta que los elementos tienen un padding
    // (espaciado interno) que hay que considerar:

    parent.children().innerWidth( itemWidth );

    parent.stop().animate({ opacity: 1 });

  });

}



shareH = function( selector ) {

  if (typeof(selector)==='undefined')
  selector = '.share-h';

  $( selector ).each(function(){

    var parent = $(this);

    parent.css({opacity:0});

    var parentHeight = parent[0].getBoundingClientRect().height;

    var numItems = parent.children().length;

    var itemHeight = parentHeight / numItems;

    parent.children().innerHeight( itemHeight );

    parent.stop().animate({ opacity: 1 });

  });

}



verticalCenter = function( selector ) {

  if (typeof(selector)==='undefined')
  selector = '.v-center';

  $( selector ).each(function(){

    var parent = $(this);
    parent.css({opacity:0});
    var totalH = 0;
    parent.children().each(function(){
      totalH += parseInt($(this).outerHeight(true));
    });
    parent.css({paddingTop: (( parent.outerHeight(true) - totalH ) / 2 ) });
    parent.stop().animate({ opacity: 1 });
  });

}
