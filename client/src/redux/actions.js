import axios from "axios";

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

export const DELETE_USER = 'DELETE_USER';

export const deleteUser = (Usu_Id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3001/users/${Usu_Id}`)
    const users = response.data;
    dispatch({type: DELETE_USER, payload: users})
  } catch (error) {
    console.error(error);
  }
}

