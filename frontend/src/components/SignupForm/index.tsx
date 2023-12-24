import { useState } from 'react';
import './styles.css';

const SignupForm = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log('Signup Attempt:', username, email, password, confirmPassword);
  };

  return (
    <div className="adopet-signup-form-container">
      <h2>Cadastre-se</h2>
      <input
        type="text"
        placeholder="Nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirme a senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Cadastre-se</button>
    </div>
  );
};

export default SignupForm;