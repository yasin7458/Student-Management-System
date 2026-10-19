
import {  FaEdit, FaTrash } from "react-icons/fa";

function StudentList({ students, onEdit, onDelete }) {
    return (
        <div className="student-list-section">
            <div className="student-list-header">
                <h3>Student List</h3>
                <p>Manage your student records</p>
            </div>

            <div className="student-table-wrapper">
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Subject</th>
                            <th>Marks Scored</th>
                            <th>Type of Exam</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>
                                    <div className="student-name-cell">
                                        <div className="student-row-avatar">
                                            <img
                                                src={student.image}
                                                alt={student.name}
                                            />
                                        </div>
                                        <div className="student-name-info">
                                            <h4>{student.name}</h4>
                                            <p>{student.grade || "Grade 3"}</p>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <span className="student-subject">
                                        {student.subject}
                                    </span>
                                </td>

                                <td>
                                    <span className="student-marks">
                                        {student.marks} / 100
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={
                                            student.examType === "Online Exam"
                                                ? "exam-badge online-exam"
                                                : student.examType === "Class Exam"
                                                    ? "exam-badge class-exam"
                                                    : "exam-badge missed-exam"
                                        }
                                    >
                                        {student.examType}
                                    </span>
                                </td>

                                <td>
                                    <button
                                        type="button"
                                        className="student-edit-button"
                                        onClick={() => onEdit(student)}
                                        title="Edit Student"
                                    >
                                        <FaEdit />
                                    </button>

                                    <button
                                        type="button"
                                        className="student-delete-button"
                                        onClick={() => onDelete(student.id)}
                                        title="Delete Student"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentList;
