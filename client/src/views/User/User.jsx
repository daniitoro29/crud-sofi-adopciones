import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions";

const User = () => {
  
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(users[0].Usu_Id));
  }

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
              <th></th>
            </tr>
            
            {
            users.map(user => {
             return (
            <tr>
              <td>{user.Usu_Nombre}</td>
              <td>{user.Usu_Apellido}</td>
              <td>{user.Usu_Telefono}</td>
              <td>{user.Usu_Correo}</td>
              <td>{user.Usu_Genero}</td>
              <td>{user.Usu_Estado}</td>
              <button>Editar datos</button>
              <button onClick={handleDelete}>Eliminar usuario</button>
              </tr>
              )
            })
          }
          </table>
        </div>
      </>
    );
  };
  
  export default User;
  