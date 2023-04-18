import { Pet } from '../../types/pet';
import PetCard from '../PetCard';
import './styles.css';

const PetsList = () => {

  const pets: Pet[] = [
    {
      id: 1,
      name: "Marley",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://vetsmart-parsefiles.s3.amazonaws.com/3327f2ceb6e24aad97bdb7dfe824fd9c_breed.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 1,
      name: "Penny",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      cidade: "Dois Irmãos/RS"
    },

  ]

  return (
    <div className="pets-list-container">
      <div className="row">
        {pets.map(pet => (
          <div className="col-sm-12s col-lg-6 col-xl-3">
            <PetCard pet={pet} />
          </div>
        ))};
      </div>
    </div>
  );
};

export default PetsList;