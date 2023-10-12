import { useState } from "react";
import { Pet } from "../../types/pet";
import PetCard from "../PetCard";
import "./styles.css";
import { Link } from "react-router-dom";

const PetsList = () => {

  const pets: Pet[] = [
    {
      id: 1,
      name: "Marley",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
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
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 5,
      name: "Marley",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 4,
      name: "Marley",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      cidade: "Dois Irmãos/RS"
    },
    {
      id: 6,
      name: "Marley",
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
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      cidade: "Dois Irmãos/RS"
    }
  ];

  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const handlePetCardClick = (pet: Pet) => {
    setSelectedPet(pet);
  };

  return (
    <div className="pets-list-container">
      <div className="row">
        {pets.map(pet => (
          <div className="col-sm-12s col-lg-5 col-xl-4 pets-list-container-card" key={pet.id}>
            <Link to="/petCardDetails/1">
              <PetCard pet={pet} onClick={() => handlePetCardClick(pet)} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsList;