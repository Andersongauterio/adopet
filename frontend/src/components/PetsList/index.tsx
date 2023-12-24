import { useEffect, useState } from "react";
import { Pet } from "../../types/pet";
import PetCard from "../PetCard";
import "./styles.css";

interface PetsListProps {
  currentPage: number;
  pageSize: number;
}

const PetsList: React.FC<PetsListProps> = ({ currentPage, pageSize }) => {

  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const url = `${process.env.REACT_APP_API_URL}/pets?page=${currentPage}&limit=${pageSize}`;
        const response = await fetch(url);
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
  }, [currentPage, pageSize]);

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