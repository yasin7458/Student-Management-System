
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export function loginSuccess(user, token) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            user: user,
            token: token
        }
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}
