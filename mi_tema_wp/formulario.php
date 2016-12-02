<h1>
  Procesar formulario via PHP y mostrar mensaje de éxito / fallo
</h1>

<?php

echo "<h3>Nombre:</h3>";

var_dump( $_POST['formulario-contacto-nombre'] );

echo '<br />';



echo "<h3>E-mail:</h3>";

var_dump( $_POST['formulario-contacto-email'] );

echo '<br />';



echo "<h3>Mensaje:</h3>";

var_dump( $_POST['formulario-contacto-mensaje'] );

echo '<br />';



?>
