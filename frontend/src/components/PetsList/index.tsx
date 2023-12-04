import { Pet } from "../../types/pet";
import PetCard from "../PetCard";
import "./styles.css";

const PetsList = () => {

  const pets: Pet[] = [
    {
      id: 1,
      name: "Marley",
      telefone: 51984322799,
      description: "Pet muito querido buscando um lar",
      size: "G",
      cidade: "Dois Irmãos/RS"
    }
  ];

  return (
    <div className="pets-list-container">
      <div className="row">
        {pets.map(pet => (
          <div className="col-sm-12s col-lg-5 col-xl-4 pets-list-container-card" key={pet.id}>
            <PetCard pet={pet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsList;