import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import card from '../../assets/images/card.png';
import { useAuth } from '../../contexts/AuthContext';

const HeroCard = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handlePetCadastroClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/petCadastro');
    }
  };

  return (
    <div className='adopet-hero-card-container'>
      <div className='adopet-hero-card-img'>
        <img src={card} alt="logo" />
      </div>
      <div className='adopet-hero-card-buttons'>
        <Link to="/petList">
          <button className='btn btn-primary'>Quero Adotar</button>
        </Link>
        <button onClick={handlePetCadastroClick} className='btn btn-primary'>
          Colocar para adoção
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
