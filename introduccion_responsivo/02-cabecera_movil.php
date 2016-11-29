<!doctype html>
<html class="no-js" lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Introducción a Diseño Responsivo</title>

  <link rel="stylesheet" href="css/foundation.css">
  <link rel="stylesheet" href="recursos/font-awesome-4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/app.css">
  <link rel="stylesheet" href="css/cabecera_movil.css">

</head>
<body>


  <!-- header#cabecera.row.expanded -->
  <header id="cabecera" class="row expanded">


    <!-- #logotipo.columns.small-4.medium-3.large-2 -->
    <div id="logotipo" class="columns small-4 medium-3 large-2">
      <img src="http://fakeimg.pl/200x130?text=LOGO" alt="">
    </div>

    <!-- nav#menu-grande.columns.hide-for-small-only.medium-9.large-10 -->
    <nav id="menu-grande" class="columns hide-for-small-only medium-9 large-10">
      <!-- ul>(li.columns.medium-3>a{Menú $})*4 -->
      <ul>
        <li class="columns medium-3"><a href="">Menú 1</a></li>
        <li class="columns medium-3"><a href="">Menú 2</a></li>
        <li class="columns medium-3"><a href="">Menú 3</a></li>
        <li class="columns medium-3"><a href="">Menú 4</a></li>
      </ul>
    </nav>



    <!-- #boton-menu.columns.small-4.small-offset-4.show-for-small-only.text-right -->
    <div id="boton-menu" class="columns small-4 small-offset-4 show-for-small-only text-right">
      <i class="fa fa-bars"></i>
    </div>



    <nav id="menu-movil" class="columns hidden">

      <!-- #boton-cerrar.columns{Cerrar} -->
      <div id="boton-cerrar" class="columns text-right">
        <i class="fa fa-close"></i>
      </div>


      <!-- ul>(li.columns.medium-3>a{Menú $})*4 -->
      <ul class="text-center">
        <li class="columns elemento-menu"><a href="">Menú 1</a></li>
        <li class="columns elemento-menu"><a href="">Menú 2</a></li>
        <li class="columns elemento-menu"><a href="">Menú 3</a></li>
        <li class="columns elemento-menu"><a href="">Menú 4</a></li>
      </ul>

    </nav>



  </header>



  <script src="js/vendor/jquery.js"></script>
  <script src="js/vendor/what-input.js"></script>
  <script src="js/vendor/foundation.js"></script>
  <script src="js/app.js"></script>
  <script src="js/cabecera_movil.js"></script>

</body>
</html>
