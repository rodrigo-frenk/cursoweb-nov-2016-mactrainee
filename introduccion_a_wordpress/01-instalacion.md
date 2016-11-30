# Instalacion a Wordpress

1. Descargar .zip de wordpress.org (es.wordpress.org para la versión en español)

1. Extraer el archivo comprimido dentro de una carpeta conocida por nuestro servidor (ejemplo, ".../htdocs/")

1. Abrir PhpMyAdmin (http://nombreservidor/phpmyadmin)

1. Crear una Base de Datos
  * Ir al panel llamado "Bases de Datos"
  * Introducir nombre (p. ej. "mi_wp")
  * Crear

1. Asignar permisos
  * Dentro del menú izquierdo, seleccionar la base de Datos
  * Abrir pestaña "Privilegios"
  * Crear un nuevo usuario
    * username (p. ej. "mi_wp_user")
    * servidor: muy probablemente "Local" o "localhost"
    * contraseña (phpmyadmin puede generarlas con un botón)
  * Guardar las credenciales en un lugar seguro

1. Conectar base de datos con la instalación de WP
  * navegar a nuestro wp (p. ej. http://nombreservidor/mi_wp )
  * Introducir credenciales generadas en PhpMyAdmin
  * Importante: Cambiar el prefijo de tabla (de "wp_" a otra cosa. P. ej: "mi_wp_")

1. Configurar nuestro Wordpress

1. Instalar
