<!doctype html>
<html class="no-js" lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Tema WP</title>

  <link rel="stylesheet" href="css/foundation.css">
  <link rel="stylesheet" href="recursos/font-awesome-4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/alturas.css">
  <link rel="stylesheet" href="css/app.css">

</head>
<body class="text-center">

  <header id="cabecera" class="row expanded h-15">

    <!-- #logotipo.columns.small-4.medium-2.large-1 -->
    <div id="logotipo"
    class="columns small-4 medium-2 large-1 imgLiquidNoFillLeft">
    <img src="http://fakeimg.pl/300x300/fff/0bedc1?text=LOGO"
    alt="Logotipo de Mi Tema">
  </div>

  <nav id="menu"
  class="columns hide-for-small-only medium-10 large-11 h-100 p-0">

  <?php include_once 'secciones/general/menu-large.php'; ?>

</nav>

<div id="menu-movil-abrir"
class="columns small-4 small-offset-4 show-for-small-only
 font-xl text-right v-center">
<div class="columns h-a"><i class="fa fa-bars"></i></div>
</div>



<nav id="menu-movil"
class="columns small-12 h-100-v absolute hidden color-background-bg p-0 z1k">

<?php include_once 'secciones/general/menu-movil.php'; ?>

</nav>


</header>

<div id="contenedor-principal" class="row expanded h-75">

  <aside id="categorias" class="columns medium-2 h-sm-10 h-md-100">
    <?php include_once 'secciones/general/categorias.php'; ?>
  </aside>

  <main id="principal" class="columns medium-10 h-sm-90 h-md-100 scroll-y">
