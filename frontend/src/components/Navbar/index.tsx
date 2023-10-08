import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary navbar-container">
      <div className="container-fluid">
        <Link to="/" className="adopet-navbat-logo">
          <h4>Logo</h4>
        </Link>
        <div className="adopet-navbar-buttons">
          <button className="btn btn-secondary">Cadastre-se</button>
          <button className="btn btn-secondary">Fazer login</button>
          <Link to={"/userArea/1"}>
            <button className="btn btn-secondary">Área do usuário</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;