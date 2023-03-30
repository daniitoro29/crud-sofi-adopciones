const Form = () => {
  return (
    <>
    <h2>Registrarse</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <label>
          Apellido:
          <input type="text" name="apellido" />
        </label>
        <label>
          Teléfono:
          <input type="text" name="telefono" />
        </label>
        <label>
          Correo:
          <input type="text" name="correo" />
        </label>
        <label>
          Contraseña:
          <input type="text" name="contraseña" />
        </label>
        <label>
          Género:
          <input type="text" name="genero" />
        </label>
        <label>
          Estado:
          <input type="text" name="estado" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
