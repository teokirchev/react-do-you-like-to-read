import { Link } from "react-router-dom";

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
                    <Link to="/catalog">Library</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    {/* log in user */}
                    <Link to="/create">Add Book</Link>
                    <Link to="/logout">Logout</Link>

                </div>
            </nav>
        </header>
    );
}