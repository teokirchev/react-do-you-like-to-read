import { Link, NavLink } from "react-router-dom";


export const Header = () => {

    return (
        <header className="header">
            <nav className="navbar">
                <div className="links">
                    <Link to="/"><img className="nav-img" src="./assets/favpng_book-download-商务大全.png" /></Link>
                {/* {user.email && <span className="user-wellcome">Good to see you, {user.email}!</span>} */}
                </div>
                {/* {user.email */}
                    {/* ?  */}
                    <div className="links user">
                    </div>
                    {/* // :  */}
                    <div className="links guest">
                        <NavLink to="/catalog">Library</NavLink>
                        <NavLink to="/create">Add Book</NavLink>
                        <NavLink to="/login">Log In</NavLink>
                        <NavLink to="/register">Sign Up</NavLink>
                        <NavLink to="/logout">Logout</NavLink>
                    </div>
                {/* } */}



            </nav>
        </header >
    );
}