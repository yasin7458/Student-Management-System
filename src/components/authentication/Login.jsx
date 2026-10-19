import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    FaGraduationCap,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaArrowRight
} from "react-icons/fa";

import { validation } from "./validation";
import { loginSuccess } from "../../redux/action/authActions";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        let result = validation(email, password);
        setErrors(result);

        axios.get("http://localhost:3000/users")
            .then((res) => {
                res.data.map((item) => {
                    if (item.email === email && item.password === password) {
                        let token = "user" + item.id + Date.now();

                        localStorage.setItem("user", JSON.stringify(item));
                        localStorage.setItem("token", token);

                        dispatch(loginSuccess(item, token));
                        navigate("/dashboard");
                    }
                });

            });
    }

    return (
        <div className="login-page">
            <div className="login-container">

                <div className="login-info">
                    <div className="login-brand">
                        <div className="brand-icon">
                            <FaGraduationCap />
                        </div>
                        <span>
                            STUDENT<span className="brand-highlight">HUB</span>
                        </span>
                    </div>

                    <div className="login-info-content">
                        <span className="welcome-label">WELCOME BACK</span>

                        <h1>Manage your students with confidence.</h1>

                        <p>
                            Your learning journey starts here.
                            Sign in to access your student management dashboard.
                        </p>

                        <div className="login-feature">
                            <div className="feature-icon">
                                <FaGraduationCap />
                            </div>

                            <div>
                                <h4>Student Management</h4>
                                <p>
                                    Keep your student records organized in one place.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="login-footer">
                        Student Management System
                    </div>
                </div>

                <div className="login-form-section">
                    <div className="login-form-content">

                        <div className="mobile-brand">
                            <FaGraduationCap />
                            <span>
                                STUDENT<span className="brand-highlight">HUB</span>
                            </span>
                        </div>

                        <span className="form-label-top">YOUR ACCOUNT</span>

                        <h2>Sign in</h2>

                        <p className="form-subtitle">
                            Enter your details to continue.
                        </p>

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="login-input-group">
                                <label htmlFor="email">Email address</label>

                                <div className="login-input-wrapper">
                                    <FaEnvelope className="login-input-icon" />

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrors({});
                                        }}
                                        className={errors.email ? "input-error" : ""}
                                    />
                                </div>

                                {errors.email && (
                                    <small className="login-error">
                                        {errors.email}
                                    </small>
                                )}
                            </div>

                            <div className="login-input-group">
                                <label htmlFor="password">Password</label>

                                <div className="login-input-wrapper">
                                    <FaLock className="login-input-icon" />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setErrors({});
                                        }}
                                        className={errors.password ? "input-error" : ""}
                                    />

                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={
                                            showPassword ? "Hide password" : "Show password"
                                        }
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>

                                {errors.password && (
                                    <small className="login-error">
                                        {errors.password}
                                    </small>
                                )}
                            </div>

                            <button type="submit" className="login-submit">
                                <span>Sign in to dashboard</span>
                                <FaArrowRight />
                            </button>
                        </form>

                        <div className="login-bottom-text">
                            Secure access to your student dashboard.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;