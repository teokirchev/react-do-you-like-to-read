import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(AuthContext)

    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/catalog')
            })

            .catch(() => {
                navigate('/404')
            })
    }

    return (
        <section className="login">
            <div className="form">
                <h2>Log In</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password" />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered?
                        <Link to="/register" className="register-link">Register</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}