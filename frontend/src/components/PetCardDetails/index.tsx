import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "../../types/pet";
import "./styles.css";

const PetCardDetails = () => {

  const { petId } = useParams();
  //  const [pet, setPet] = useState<Pet>();

  //  useEffect(() => {
  //    fetch(`/api/pets/${petId}`)
  //      .then((response) => response.json())
  //      .then((data) => setPet(data));
  //  }, [petId]);

  const pet: Pet =
  {
    id: 1,
    name: "Marley",
    telefone: 51984322799,
    description: "Pet muito querido buscando um lar",
    size: "G",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
    cidade: "Dois Irmãos/RS"
  }

  if (!pet) {
    // Loading state or error handling
    return <div>Loading...</div>;
  }

  return (
    <div className="pet-card-details-container">
      <div className="pet-card-details-img-container">
        <div className="pet-card-details-img-main">
          <img src={pet.imgUrl} alt={pet.name} />
        </div>
        <div className="pet-card-details-img-others">
          <img src={pet.imgUrl} alt={pet.name} />
          <img src={pet.imgUrl} alt={pet.name} />
          <img src={pet.imgUrl} alt={pet.name} />
          <img src={pet.imgUrl} alt={pet.name} />
          <img src={pet.imgUrl} alt={pet.name} />
          <img src={pet.imgUrl} alt={pet.name} />
        </div>
      </div>
      <div className="pet-card-details-text">
        <h2>{pet.name}</h2>
        <h4>{pet.cidade}</h4>
        <p>{pet.description}</p>
        <p>Telefone: {pet.telefone}</p>
        <p>Tamanho: {pet.size}</p>
      </div>
    </div>
  );
};

export default PetCardDetails;
