import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    contraseña: "",
    genero: "",
    estado: "",
  });

const changeHandler = (event) => {
  const property = event.target.name;
  const value = event.target.value;

  setForm({
    ...form, [property]:value
  })
}

  return (
    <>
      <h2>Registrarse</h2>
      <form>
        <div>
          <label>Nombre: </label>
          <input type="text" name="nombre" value={form.nombre} onChange={changeHandler}/>
        </div>

        <div>
          <label>Apellido: </label>
          <input type="text" name="apellido" value={form.apellido} onChange={changeHandler}/>
        </div>

        <div>
          <label>Teléfono: </label>
          <input type="text" name="telefono" value={form.telefono} onChange={changeHandler}/>
        </div>

        <div>
          <label>Correo: </label>
          <input type="text" name="correo" value={form.correo} onChange={changeHandler}/>
        </div>

        <div>
          <label>Contraseña: </label>
          <input type="text" name="contraseña" value={form.contraseña} onChange={changeHandler}/>
        </div>

        <div>
          <label>Género: </label>
          <input type="text" name="genero" value={form.genero} onChange={changeHandler}/>
        </div>

        <div>
          <label>Estado: </label>
          <input type="text" name="estado" value={form.estado} onChange={changeHandler}/>
        </div>
        <input type="submit" value="Registrarse" />
      </form>
    </>
  );
};

export default Form;
