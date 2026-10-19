
import { FaSignOutAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/action/authActions";
import image from "../../assets/dhruv.jpg";


function StudentDetails({ students }) {
    let totalStudents = students.length;
    let totalSubjects = [];

    students.map((student) => {
        if (!totalSubjects.includes(student.subject)) {
            totalSubjects.push(student.subject);
        }
    });

    let totalExams = students.length;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        dispatch(logout());
        navigate("/login");
    }


    return (
        <div className="student-header">
            <div className="student-profile">
                <div className="teacher-avatar">
                    <img src={image} alt="Yash"/>
                </div>

                <div className="teacher-info">
                    <h3>Dhruv Josi</h3>
                    <p>Student Management System</p>
                </div>
            </div>

            <div className="student-statistics">
                <div className="student-stat">
                    <h4>{totalStudents}</h4>
                    <p>Students</p>
                </div>

                <div className="student-stat">
                    <h4>
                        {totalSubjects.length}
                    </h4>
                    <p>Subjects</p>
                </div>

                <div className="student-stat">
                    <h4>
                        {totalExams}
                    </h4>
                    <p>Exams</p>
                </div>

                <button
                    type="button"
                    className="navbar-logout"
                    onClick={handleLogout}
                >
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </div>
    );
}

export default StudentDetails;
