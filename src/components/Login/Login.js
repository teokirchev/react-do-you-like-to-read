import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Login = () => {

    const [email, setEmail] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <section className="login">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={onSubmitHandler}>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="email"
                        value={email} 
                        onChange={onEmailChange}/>
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