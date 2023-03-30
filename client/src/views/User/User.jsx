import { useSelector } from "react-redux";

const User = () => {

  const users = useSelector(state => state.users);

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
            users.map(user => {
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
  