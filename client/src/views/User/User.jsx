const User = () => {

  const user = [
    {
      "Usu_Id": "2ac8321b-784d-4c04-adbd-f8a8c55f46ac",
      "Usu_Nombre": "Jessica",
      "Usu_Apellido": "Correa",
      "Usu_Telefono": "3193241477",
      "Usu_Correo": "jesssss@gmail.com",
      "Usu_Contraseña": "1234343",
      "Usu_Genero": "Femenino",
      "Usu_Estado": "Activo",
      "rolRolId": null
    },
    {
      "Usu_Id": "bb9582ac-43c5-491d-91b6-2c0ad935474e",
      "Usu_Nombre": "Daniela",
      "Usu_Apellido": "Toro",
      "Usu_Telefono": "3193241477",
      "Usu_Correo": "daniiii@gmail.com",
      "Usu_Contraseña": "1234343",
      "Usu_Genero": "Femenino",
      "Usu_Estado": "Activo",
      "rolRolId": null
    },
    {
      "Usu_Id": "5502a8f2-8157-4ac2-b3e4-bd84f26402b0",
      "Usu_Nombre": "Cristian",
      "Usu_Apellido": "Muñoz",
      "Usu_Telefono": "3193241477",
      "Usu_Correo": "crisss@gmail.com",
      "Usu_Contraseña": "1234343",
      "Usu_Genero": "Masculino",
      "Usu_Estado": "Activo",
      "rolRolId": null
    }
  ]

    return (
      <>
        <h2>Usuarios Registrados</h2>
        <div>
          <table>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Genero</th>
              <th>Estado</th>
            </tr>
            
            {
            user.map(user => {
             return (
            <tr>
              <td>{user.Usu_Nombre}</td>
              <td>{user.Usu_Telefono}</td>
              <td>{user.Usu_Correo}</td>
              <td>{user.Usu_Genero}</td>
              <td>{user.Usu_Estado}</td>
              </tr>
              )
            })
          }
          </table>


          <button>Editar datos</button>
          <button>Eliminar usuario</button>
        </div>
      </>
    );
  };
  
  export default User;
  