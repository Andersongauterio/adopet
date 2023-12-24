import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SignupForm = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState<string>('');

  const isEmailValid = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSignup = () => {

    if (!isEmailValid(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      return;
    };

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    };

    if (!username || !email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    };

    const payload = {
      login: username,
      password: password,
      email: email
    };

    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Usuário já existe.');
        }
        return response.json();
      })
      .then(data => {
        alert("Usuário cadastrado com sucesso");
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate('/login');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(''); // Limpa o erro ao editar o e-mail
  };

  const handleEmailBlur = () => {
    if (!isEmailValid(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
    }
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
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      {emailError && <p className="adopet-signup-form-error-message">{emailError}</p>}
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