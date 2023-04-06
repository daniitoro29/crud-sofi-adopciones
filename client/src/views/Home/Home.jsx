import Form from "../Form/Form";
import User from "../User/User";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";
import "../Home/Home.css";

function Home() {
  const [isRegister, setIsRegister] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  const handlerRegister = () => {
    setIsRegister(true);
  };

  const handlerUser = () => {
    setShowUser(true);
  };

  return (
    <div className="container-general_home">
      <nav>
        <ul>
            <img
              src="https://peluditosconfuturo.org/wp-content/uploads/2015/01/logo2.png"
              alt="log"
            />

          <ol>
            <p>Inicio</p>
          </ol>
          <ol>
            <p>Acerca de nosotros</p>
          </ol>
          <ol>
            <p>Adopciones</p>
          </ol>
          <ol>
            <p onClick={handlerRegister}>
              Registrate
              {isRegister && <Form />}
            </p>
          </ol>
          <ol>
            <p onClick={handlerUser}>
              Usuarios
              {showUser && <User /> }
            </p>
          </ol>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
