import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary navbar-container">
            <div className="container-fluid">
                <Link to="/" className="adopet-navbat-logo">
                    <h4>AdoPets</h4>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#adopet-navbar"
                    aria-controls="adopet-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="adopet-navbar">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li>
                            <NavLink to="/">
								HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pet">
								Pets
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" >
								Contato
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;