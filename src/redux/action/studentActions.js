export const GET_STUDENTS = "GET_STUDENTS";
export const ADD_STUDENT = "ADD_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";

export function getStudentsAction(students) {
    return {
        type: GET_STUDENTS,
        payload: students
    };
}

export function addStudentAction(student) {
    return {
        type: ADD_STUDENT,
        payload: student
    };
}

export function updateStudentAction(student) {
    return {
        type: UPDATE_STUDENT,
        payload: student
    };
}

export function deleteStudentAction(id) {
    return {
        type: DELETE_STUDENT,
        payload: id
    };
}