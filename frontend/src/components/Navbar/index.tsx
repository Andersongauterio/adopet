import { Link } from "react-router-dom";
import "./styles.css";
import logo from '../../assets/images/logo.png';
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary navbar-container">
      <div className="container-fluid">
        <Link to="/" className="adopet-navbat-logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="adopet-navbar-buttons">
          {isLoggedIn ? (
            <button onClick={logout} className="btn btn-secondary">Logout</button>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-secondary">Fazer login</button>
              </Link>
              <Link to="/cadastre-se">
                <button className="btn btn-secondary">Cadastre-se</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;