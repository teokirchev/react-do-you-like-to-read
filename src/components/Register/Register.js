import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <section className="register">
            <div className="form">
                <h2>Register</h2>
                <form className="login-form">
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">login</button>
                    <p className="message">Already registered?
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </section >
    )
}