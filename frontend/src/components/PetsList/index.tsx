import { Pet } from "../../types/pet";
import PetCard from "../PetCard";
import "./styles.css";

const PetsList = () => {

  const pets: Pet[] = [
    {
      id: 1,
      name: "Marley",
      description: "Pet muito querido buscando um lar",
      size: "G",
      type: "Cachorro",
      createAt: "2023-11-08T02",
      updateAt: "2023-11-08T02:08:51.962Z"
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