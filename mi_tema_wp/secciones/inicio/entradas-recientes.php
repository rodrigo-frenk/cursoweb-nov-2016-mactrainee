<h2 class="m-b-2">
  Entradas recientes
</h2>

<?php

for ($i=0; $i < 6; $i++) :

  ?>

  <!-- article.columns.medium-6.large-4.p-1>.card -->
  <article class="entrada-destacada columns h-a medium-6 large-4 p-1">
    <a href="#">
      <div class="card columns h-a p-1">

        <!-- .titulo.columns.text-center>h3>lorem7 -->
        <div class="titulo columns h-a p-0-2">
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
        </div>

        <!-- .fecha.columns.text-right.font-xs{17 de diciembre, 2016} -->
        <div class="fecha columns h-a text-right font-xs m-b-1">
          17 de diciembre, 2016
        </div>

        <div class="imagen-extracto columns h-30-v p-1 m-b-1">

          <div class="imagen columns small-6 imgLiquidFill"><img src="http://fakeimg.pl/600x350" alt=""></div>

          <!-- .extracto.columns.text-left.font-s>lorem13 -->
          <div class="extracto columns small-6 text-left font-s p-1 p-t-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima earum porro quas, doloremque.
          </div>

        </div>
        <!-- .accion.columns>button.button.primary.hollow{Ver más} -->
        <div class="accion columns h-a">
          <button class="button primary hollow">
            Ver más
          </button>
        </div>

      </div>
    </a>
  </article>

  <?php

endfor;

?>
