import { Link } from 'react-router-dom';
import './styles.css';

const UserMenu = () => {
  return (
    <div className='adopet-usermenu-container'>
      <div className='adopet-usermenu-buttons'>
        <Link to={"/petCadastro"}>
          <button className='btn btn-secondary'>Cadastrar Pet</button>
        </Link>
        <button className='btn btn-secondary'>Minhas mensagens</button>
      </div>
    </div>
  )
}

export default UserMenu;