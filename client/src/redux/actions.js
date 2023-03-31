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

