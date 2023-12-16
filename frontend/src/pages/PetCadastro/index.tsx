import AddPetImgs from '../../components/AddPetImgs';
import FormPetCadastro from '../../components/FormPetCadastro';
import './styles.css';

const PetCadastro = () => {
  return (
    <div className='adopet-pet-cadastro-container bg-primary;'>
      <div className='adopet-pet-cadastro-informacoes'>
        <h3 className='adopet-pet-cadastro-informacoes-title'>Informações do Pet</h3>
        <FormPetCadastro />
      </div>
      <div className='adopet-pet-cadastro-imgs'>
        <AddPetImgs />
      </div>
    </div>
  )
}

export default PetCadastro;