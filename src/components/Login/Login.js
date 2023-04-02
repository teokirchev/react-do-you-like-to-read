import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'ContentType': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });
            const data = await response.json();
            return data;
        }
        catch (error) {

        }

    }

    return (
        <section className="login">
            <div className="form">
                <h2>Log In</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={email}
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