import { useState, useEffect } from "react";
import { FaPlus, FaUser } from "react-icons/fa";

function StudentForm({ onAddStudent, editStudent, onUpdateStudent, onCancel }) {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [marks, setMarks] = useState("");
    const [examType, setExamType] = useState("Online Exam");
    const [grade, setGrade] = useState("Grade 3");
    const [image, setImage] = useState("");
    const [showImageInput, setShowImageInput] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        if (editStudent) {
            setName(editStudent.name);
            setSubject(editStudent.subject);
            setMarks(editStudent.marks);
            setExamType(editStudent.examType);
            setGrade(editStudent.grade);
            setImage(editStudent.image || "");
            setImageUrl(editStudent.image || "");
            setShowImageInput(false);
        }
    }, [editStudent]);

    function handleImageAdd() {
        if (imageUrl.trim() !== "") {
            setImage(imageUrl.trim());
        }

        setShowImageInput(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        let student = {
            name: name,
            subject: subject,
            marks: Number(marks),
            examType: examType,
            grade: grade,
            image: image
        };

        if (editStudent) {
            student.id = editStudent.id;
            onUpdateStudent(student);
        } else {
            onAddStudent(student);
        }

        setName("");
        setSubject("");
        setMarks("");
        setExamType("Online Exam");
        setGrade("Grade 3");
        setImage("");
        setImageUrl("");
        setShowImageInput(false);
    }

    function handleCancel() {
        setName("");
        setSubject("");
        setMarks("");
        setExamType("Online Exam");
        setGrade("Grade 3");
        setImage("");
        setImageUrl("");
        setShowImageInput(false);

        onCancel();
    }

    function handleImageButton() {
        setImageUrl(image);
        setShowImageInput(true);
    }

    return (
        <div className="student-form-section">
            <div className="student-form-avatar">
                {image ? (
                    <img src={image} alt="Student" />
                ) : (
                    <FaUser className="default-student-icon" />
                )}

                <button
                    type="button"
                    className="student-image-plus"
                    onClick={handleImageButton}
                >
                    <FaPlus />
                </button>
            </div>

            {showImageInput && (
                <div className="student-form-field">
                    <input
                        type="url"
                        placeholder="Paste image URL here"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />

                    <button
                        type="button"
                        className="student-add-button"
                        onClick={handleImageAdd}
                    >
                        Add Image
                    </button>
                </div>
            )}

            <form className="student-form" onSubmit={handleSubmit}>
                <div className="student-form-field">
                    <label>Student's Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="student-form-field">
                    <label>Subject</label>
                    <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    >
                        <option value="">Select subject</option>
                        <option value="Science">Science</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="English Literature">English Literature</option>
                        <option value="English Grammar">English Grammar</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Environmental Studies">Environmental Studies</option>
                    </select>
                </div>

                <div className="student-form-field">
                    <label>Marks Scored</label>
                    <input
                        type="number"
                        placeholder="00 / 100"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                        min="0"
                        max="100"
                        required
                    />
                </div>

                <div className="student-form-field">
                    <label>Type of Exam</label>
                    <select
                        value={examType}
                        onChange={(e) => setExamType(e.target.value)}
                    >
                        <option value="Online Exam">Online Exam</option>
                        <option value="Class Exam">Class Exam</option>
                        <option value="Missed Exam">Missed Exam</option>
                    </select>
                </div>

                <div className="student-form-field">
                    <label>Grade</label>
                    <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    >
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                    </select>
                </div>

                <button type="submit" className="student-add-button">
                    <FaPlus />
                    {editStudent ? "UPDATE" : "ADD NOW"}
                </button>

                {editStudent && (
                    <button
                        type="button"
                        className="student-cancel-button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
}

export default StudentForm;
