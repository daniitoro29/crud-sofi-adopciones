import axios from "axios";

/* export const getUsers = () => {
    return async function(dispatch){
        // Hace la petición
        const apiData = await axios.get("http://localhost:3001/users");
        const users = apiData.data;
        // Despacha la acción
        dispatch({type: GET_USERS, payload:users});
    };
} */
export const GET_USERS = 'GET_USERS';

export const getUsers = () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      dispatch({ type: GET_USERS, payload: users });
    } catch (error) {
      console.error(error);
    }
  };

