import { Pet } from '../../types/pet';
import './styles.css';

type Props = {
  pet: Pet;
}

const PetAdoptInfo = ({ pet }: Props) => {
  return (
    <div className='adopet-pet-adopt-info-container'>
      <h4>Nome: {pet.name}</h4>
      <h4>Descrição: {pet.description}</h4>
      <h4>Tamanho: {pet.size}</h4>
    </div>
  );
};

export default PetAdoptInfo;