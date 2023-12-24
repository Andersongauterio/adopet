import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './styles.css';

const FormLogin = () => {

  const [login, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login: performLogin } = useAuth();

  const handleLogin = () => {
    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha no login.');
      }
      return response.json();
    })
    .then(data => {
      console.log('Login Successful:', data);
      performLogin(data.access_token, data.user);
      navigate('/');
    })
    .catch((error) => {
      alert(error.message);
    });
  }

  const handleSignUp = () => {
    navigate('/cadastre-se');
  }

  return (
    <div className='adopet-form-login-container'>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={login}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp} className="adopet-form-login-button">Cadastre-se</button>
    </div>
  );
};

export default FormLogin;