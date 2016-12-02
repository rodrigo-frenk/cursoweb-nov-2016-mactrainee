<form
action="formulario.php"
method="POST"
class="columns medium-6 large-4 medium-centered p-1">

  <div class="columns h-a">

    <label for="formulario-contacto-nombre">
      Nombre
    </label>

    <input
    id="formulario-contacto-nombre"
    name="formulario-contacto-nombre"
    type="text"
    placeholder="Tu nombre">

  </div>

  <div class="columns h-a">

    <label for="formulario-contacto-email">
      E-mail
    </label>

    <input
    id="formulario-contacto-email"
    name="formulario-contacto-email"
    type="email"
    placeholder="tu.email@ejemplo.com">

  </div>

  <div class="columns h-a">

    <label for="formulario-contacto-mensaje">
      Mensaje
    </label>

    <textarea
    id="formulario-contacto-mensaje"
    name="formulario-contacto-mensaje"
    placeholder="Escribe tu mensaje">
    </textarea>

  </div>

  <div class="columns h-a">

    <input
    type="submit"
    name="formulario-contacto-enviar"
    value="Enviar"
    class="button">

  </div>

</form>
