import { Link } from "react-router-dom"


export const Register = () => {
    const onSubmit = (e) => {
        e.preventDefault();






    }
    return (
        <section className="register">
            <div className="form">
                <h2>Sign Up</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email" />
                    <input 
                        type="password" 
                        name="password" 
                        id="register-password" 
                        placeholder="password" />
                    <input 
                        type="password" 
                        name="repeatPassword" 
                        id="repeat-password" 
                        placeholder="repeat password" />
                    <button type="submit">login</button>
                    <p className="message">Already registered?
                        <Link to="/login">Log In</Link>
                    </p>
                </form>
            </div>
        </section >
    )
}