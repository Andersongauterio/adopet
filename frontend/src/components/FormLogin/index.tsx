import { useState } from 'react';
import './styles.css';

const FormLogin = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login Attempt:', username, password);
  }

  const handleSignUp = () => {
    console.log('Cadastre-se');
  }

  return (
    <div className='adopet-form-login-container'>
      <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignUp} className="adopet-form-login-button">Cadastre-se</button>
    </div>
  );
};

export default FormLogin;