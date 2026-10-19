import {
    GET_STUDENTS,
    ADD_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT
} from "../action/studentActions";

let initialState = [];

function studentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.payload;

        case ADD_STUDENT:
            return [...state, action.payload];

        case UPDATE_STUDENT:
            return state.map((student) => {
                if (student.id === action.payload.id) {
                    return action.payload;
                } else {
                    return student;
                }
            });

        case DELETE_STUDENT:
            return state.filter((student) => {
                return student.id !== action.payload;
            });

        default:
            return state;
    }
}

export default studentReducer;