import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, editUser } from "../../redux/actions";

const User = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleDelete = (user) => {
    dispatch(deleteUser(user.Usu_Id));
  };

  const handlerEdit = (user) => {
    const userResult = users.filter((u) => u.Usu_Id === user.Usu_Id)[0];
    console.log('Este es el usuario que vamos a editar', userResult);
    // dispatch(editUser(userResult.Usu_Id));
  };

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

          {users.map((user) => {
            return (
              <tr key={user.Usu_Id}>
                <td>{user.Usu_Nombre}</td>
                <td>{user.Usu_Apellido}</td>
                <td>{user.Usu_Telefono}</td>
                <td>{user.Usu_Correo}</td>
                <td>{user.Usu_Genero}</td>
                <td>{user.Usu_Estado}</td>
                <td>
                  <button onClick={() => handlerEdit(user)}>Editar datos</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user)}>Eliminar usuario</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default User;
