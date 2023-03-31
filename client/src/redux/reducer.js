import { GET_USERS, DELETE_USER } from "./actions";

const initialState = {
    users: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {...state, users:action.payload};
        case DELETE_USER:
            return {...state, users:action.payload};
        default:
            return {...state};
    }
}

export default rootReducer;
