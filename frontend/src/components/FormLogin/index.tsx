import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const FormLogin = () => {

  const [login, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login Attempt:', login, password);
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