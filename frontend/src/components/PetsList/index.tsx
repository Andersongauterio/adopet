import { useEffect, useState } from "react";
import { Pet } from "../../types/pet";
import PetCard from "../PetCard";
import "./styles.css";

const PetsList = () => {

  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:8080/pets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

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