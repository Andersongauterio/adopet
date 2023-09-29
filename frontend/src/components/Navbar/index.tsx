import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary navbar-container">
            <div className="container-fluid">
                <Link to="/" className="adopet-navbat-logo">
                    <h4>Logo</h4>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;