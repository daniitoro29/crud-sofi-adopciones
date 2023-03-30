import Form from "../Form/Form";
import Login from "../Login/Login";
import User from "../User/User";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";



function Home() {
/*   const dispatch = useDispatch;
  useEffect(() => {
      dispatch(getUsers());
      // eslint-disable-next-line
  }, []); */

  return (
    <div>
      <Form />
      <Login />
      <User />
    </div>
  );
}

export default Home;
