import { useState } from "react";
import { Pet } from "../../types/pet";
import PetCard from "../PetCard";
import Modal from 'react-modal';
import PetCardDetails from "../PetCardDetails";
import "./styles.css";

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
      id: 2,
      name: "Penny",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 3,
      name: "Marley",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://vetsmart-parsefiles.s3.amazonaws.com/3327f2ceb6e24aad97bdb7dfe824fd9c_breed.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 4,
      name: "Penny",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 5,
      name: "Marley",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://vetsmart-parsefiles.s3.amazonaws.com/3327f2ceb6e24aad97bdb7dfe824fd9c_breed.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 6,
      name: "Penny",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 7,
      name: "Marley",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://vetsmart-parsefiles.s3.amazonaws.com/3327f2ceb6e24aad97bdb7dfe824fd9c_breed.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 8,
      name: "Penny",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      cidade: "Dois Irmãos/RS"
    }
  ];

  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const handlePetCardClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

  const closeModal = () => {
    setSelectedPet(null);
  };

  return (
    <div className="pets-list-container">
      <div className="row">
        {pets.map(pet => (
          <div className="col-sm-12s col-lg-6 col-xl-3" key={pet.id}>
            <PetCard pet={pet} onClick={() => handlePetCardClick(pet)} />
          </div>
        ))}
        {selectedPet && (
        <Modal 
          isOpen={true} 
          onRequestClose={closeModal} style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            maxHeight: '80%',
            overflow: 'auto'
          }
        }}>
          <div className="pet-card-modal-container">
            <PetCardDetails pet={selectedPet} />
            <button 
              className="btn btn-primary"
              onClick={closeModal}>Fechar</button>
          </div>
        </Modal>
      )}
      </div>
    </div>
  );
};

export default PetsList;