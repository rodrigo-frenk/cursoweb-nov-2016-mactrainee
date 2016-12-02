<?php

/*
PHP
HTML Pre-Processor

1. se utilizan los símbolos '<?php' y '?>' para marcar un bloque de código PHP

*/



// comentario de una línea

# otro comentario de una línea

/*
Comentario
Multilínea
*/


?>

<!-- Esto es HTML -->

<?php

echo 'Podemos escribir en la pantalla';

echo '<br />';

echo 'Podemos ' . 'concatenar ' . 'texto';

echo '<br />';

echo 'Podemos combinar ' . '<a href="">' . 'texto y HTML' . '</a>';

echo '<br />';


?>

<!-- Estilo Intercalado -->

<h4>
  <?php echo 'Podemos interrumpir el PHP'; ?>
</h4>

<h6>
  y alternarlo con contenido HTML
</h6>


<?php

// Estilo Concatenado

$html = '<p>';
$html .= 'Podemos escribir nuestro HTML ';
$html .= 'concatenándolo ';
$html .= 'en una variable ';
$html .= 'dentro de PHP';
$html .= '</p>';

echo $html;




// Variables:

$una_variable = 10;
$otra_variable = 25;

$resultado = $una_variable + $otra_variable;


// podemos almacenar cualquier tipo de dato (tipos débiles)
$cualquier_dato = NULL;
$cualquier_dato = 1;
$cualquier_dato = "texto";
$cualquier_dato = [ 1, 2, 3 ];
// $cualquier_dato = function() { echo "una funcion"; };


// estructuras de control:

if( $resultado > 30 ) {
  # ...
} else {
  # ...
}


$a = 0;
while ($a < 10) {
  echo $a;
  $a++;
}



for ($i=0; $i < 10; $i++) {
  echo $i;
}


echo "<br />";




// Arreglos:

$arreglo = [ 1, 2, 3 ];

$palabras = array();

array_push( $palabras, "hola" );
array_push( $palabras, "qué" );
array_push( $palabras, "tal?" );

foreach( $palabras as $una_palabra ) {

  echo $una_palabra;

  ?>
    <br />
  <?php

}


echo "el número total de palabras es: " . count( $palabras );


?>

<h2>Arreglos Asociativos</h2>

<?php

$arreglo_asociativo = array(
  "indice1" => "valor1",
  "indice2" => "valor2",
  "indice3" => "valor3"
);

foreach ($arreglo_asociativo as $key => $value) {

  echo $key . " ---> " . $value;
  echo "<br />";

}

$arreglo_asociativo[ "indice1" ] = "Nuevo Valor";

echo "el valor de indice 1 es: " . $arreglo_asociativo[ "indice1" ];

?>
