import { Link } from "react-router-dom";
import { ReactComponent as MessageIcon } from '../../assets/images/message.svg';
import "./styles.css";
import logo from '../../assets/images/logo.png';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary navbar-container">
      <div className="container-fluid">
        <Link to="/" className="adopet-navbat-logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="adopet-navbar-buttons">
          <button className="btn btn-secondary">Cadastre-se</button>
          <button className="btn btn-secondary">Fazer login</button>
          <Link to={"/userArea/1"}>
            <button className="btn btn-secondary">Área do usuário</button>
          </Link>
          <Link to={"/messages"}>
            <MessageIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;