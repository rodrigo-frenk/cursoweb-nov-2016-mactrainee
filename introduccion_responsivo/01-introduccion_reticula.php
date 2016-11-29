<!doctype html>
<html class="no-js" lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Introducción a Diseño Responsivo</title>

  <link rel="stylesheet" href="css/foundation.css">
  <link rel="stylesheet" href="css/app.css">

</head>
<body>

  <div class="row expanded">Contenedor Full Screen</div>
  <div class="row">Contenedor Limitado</div>

  <!-- section#entradas.row.expanded -->
  <section id="entradas" class="row">
    <header class="columns">
      <h1>Entradas</h1>
    </header>
    <section id="lista_entradas" class="columns">

      <?php for ($i=0; $i < 6; $i++) : ?>

        <!-- article.entrada.columns.small-12.medium-6.large-4 -->
        <article class="entrada columns small-12 medium-6 large-4">

          <!-- header>h3{Título de la Entrada} -->
          <header>
            <h3>Título de la Entrada</h3>
          </header>

          <section class="imagen">
            <img src="http://fakeimg.pl/300x200" alt="">
          </section>

          <section class="contenido">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem, numquam veniam.</p>
            <p>Cum, mollitia doloribus ut incidunt. Dignissimos maiores, provident ullam incidunt eum ex!</p>
          </section>

          <footer>
            pie
          </footer>

        </article>

      <?php endfor; ?>

    </section>
  </section>



  <script src="js/vendor/jquery.js"></script>
  <script src="js/vendor/what-input.js"></script>
  <script src="js/vendor/foundation.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
