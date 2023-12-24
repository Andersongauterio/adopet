import FormLogin from '../../components/FormLogin';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';

const Login = () => {

  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className='adopet-login-container'>
      <FormLogin />
    </div>
  );
};

export default Login;