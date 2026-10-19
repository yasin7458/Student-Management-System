
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import StudentDetails from "./StudentDetails";
import StudentForm from "./StudentForm";
import StudentSearch from "./StudentSearch";
import StudentList from "./StudentList";

import {
    getStudentsAction,
    addStudentAction,
    updateStudentAction,
    deleteStudentAction
} from "../../redux/action/studentActions";

import {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
} from "./studentService";

function Dashboard() {
    const dispatch = useDispatch();

    const students = useSelector((state) => state.students);

    const [search, setSearch] = useState("");
    const [examFilter, setExamFilter] = useState("All");
    const [editStudent, setEditStudent] = useState(null);

    useEffect(() => {
        getStudents().then((res) => {
            dispatch(getStudentsAction(res.data));
        });
    }, [dispatch]);

    function handleAddStudent(student) {
        addStudent(student).then((res) => {
            dispatch(addStudentAction(res.data));
        });
    }

    function handleUpdateStudent(student) {
        updateStudent(student.id, student).then((res) => {
            dispatch(updateStudentAction(res.data));
            setEditStudent(null);
        });
    }

    function handleDeleteStudent(id) {
        deleteStudent(id).then(() => {
            dispatch(deleteStudentAction(id));
        });
    }

    function handleEditStudent(student) {
        setEditStudent(student);
    }

    function handleCancelEdit() {
        setEditStudent(null);
    }

    let filteredStudents = students.filter((student) => {
        let matchSearch =
            student.name.toLowerCase().includes(search.toLowerCase()) ||
            student.subject.toLowerCase().includes(search.toLowerCase());

        let matchExam = true;

        if (examFilter !== "All") {
            matchExam = student.examType === examFilter;
        }

        return matchSearch && matchExam;
    });

    return (
        <div className="dashboard-page">
            <div className="container">
                <StudentDetails students={students} />
                

                <div className="student-management-layout">
                    <StudentForm
                        onAddStudent={handleAddStudent}
                        editStudent={editStudent}
                        onUpdateStudent={handleUpdateStudent}
                        onCancel={handleCancelEdit}
                    />

                    <div className="student-records-section">
                        <div className="student-filter-bar">
                            <div className="exam-filters">
                                <button
                                    type="button"
                                    className={examFilter === "All" ? "active" : ""}
                                    onClick={() => setExamFilter("All")}
                                >
                                    All
                                </button>

                                <button
                                    type="button"
                                    className={examFilter === "Class Exam" ? "active" : ""}
                                    onClick={() => setExamFilter("Class Exam")}
                                >
                                    Class Exam
                                </button>

                                <button
                                    type="button"
                                    className={examFilter === "Online Exam" ? "active" : ""}
                                    onClick={() => setExamFilter("Online Exam")}
                                >
                                    Online Exam
                                </button>

                                <button
                                    type="button"
                                    className={examFilter === "Missed Exam" ? "active" : ""}
                                    onClick={() => setExamFilter("Missed Exam")}
                                >
                                    Missed Exam
                                </button>
                            </div>

                            <StudentSearch
                                search={search}
                                setSearch={setSearch}
                            />
                        </div>

                        <StudentList
                            students={filteredStudents}
                            onEdit={handleEditStudent}
                            onDelete={handleDeleteStudent}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
