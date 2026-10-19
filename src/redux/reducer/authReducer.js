
import { LOGIN_SUCCESS, LOGOUT } from "../action/authActions";

let initialState = {
    user: JSON.parse(localStorage.getItem("user")),
    token: localStorage.getItem("token"),
    isAuthenticated: localStorage.getItem("token")
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true
            };

        case LOGOUT:
            return {
                user: null,
                token: null,
                isAuthenticated: false
            };

        default:
            return state;
    }
}

export default authReducer;
