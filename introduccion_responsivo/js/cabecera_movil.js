$(document).ready(function(){

  $('#boton-menu').click( function(){

    $('#menu-movil').css({ opacity: 0 })
    $('#menu-movil').removeClass("hidden")
    $('#menu-movil').animate({ opacity: 1 }, 300)

  })

  $('#boton-cerrar').click( function(){
    $('#menu-movil').animate({ opacity: 0 }, 300, function(){
      $('#menu-movil').addClass("hidden")
    })

  })

})
