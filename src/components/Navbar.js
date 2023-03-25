import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <img className="nav-img" src="./assets/favpng_book-download-商务大全.png" />
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}