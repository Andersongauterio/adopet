import { Link } from 'react-router-dom';
import { ReactComponent as GithubIcon } from '../../assets/images/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/images/linkedin.svg';
import "./styles.css";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3 mt-auto adopet-footer-container">
      <div className="adopet-footer-text">
        <Link to="https://github.com/AndersonGauterio">
          <div className="adopet-footer-icon">
            <GithubIcon />
            <h6>Anderson Gautério</h6>
          </div>
        </Link>
        <Link to="https://br.linkedin.com/in/anderson-gautério-a57203142">
          <div className="adopet-footer-icon">
            <LinkedinIcon />
            <h6>Anderson Gautério</h6>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;