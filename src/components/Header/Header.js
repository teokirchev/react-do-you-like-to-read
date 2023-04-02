import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="links">
                    {/* снимката ми е линкната към хоме */}
                    <Link to="/"><img className="nav-img" src="./assets/favpng_book-download-商务大全.png" /></Link>
                    
                </div>

                <div className="links">
                    {/* guest user */}
                    <NavLink to="/catalog">Library</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/register">Sign Up</NavLink>
                    {/* log in user */}
                    <NavLink to="/create">Add Book</NavLink>
                    <NavLink to="/logout">Logout</NavLink>

                </div>
            </nav>
        </header>
    );
}