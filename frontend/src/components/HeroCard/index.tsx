import { Link } from 'react-router-dom';
import './styles.css';
import card from '../../assets/images/card.png';

const HeroCard = () => {
  return (
    <div className='adopet-hero-card-container'>

      <div className='adopet-hero-card-img'>
      <img src={card} alt="logo" />
      </div>
      <div className='adopet-hero-card-buttons'>
        <Link to="/petList">
          <button className='btn btn-primary'>Quero Adotar</button>
        </Link>
        <Link to={"/petCadastro"}>
          <button className='btn btn-primary'>Colocar para adoção</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroCard;