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
    <div>
      <h1>Fundación Peluditos con Futuro</h1>
      <div className="containerHome">
        <button className="buttonHome" onClick={handlerRegister}>
          Registrarse
        </button>
        {isRegister ? <Form /> : null}
      </div>
      <div>
        <button className="buttonHome" onClick={handlerUser}>
          Usuarios registrados
        </button>
        {showUser ? <User /> : null}
      </div>
    </div>
  );
}

export default Home;
