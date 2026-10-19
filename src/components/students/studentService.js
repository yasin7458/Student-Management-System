import axios from "axios";

const API = "http://localhost:3000/students";

export function getStudents() {
    return axios.get(API);
}

export function addStudent(student) {
    return axios.post(API, student);
}

export function updateStudent(id, student) {
    return axios.put(API + "/" + id, student);
}

export function deleteStudent(id) {
    return axios.delete(API + "/" + id);
}