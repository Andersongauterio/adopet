import { Pet } from "../../types/pet";
import "./styles.css";

interface PetCardDetailsProps {
  pet: Pet;
  onClose: () => void;
}

const PetCardDetails = ({ pet, onClose }: PetCardDetailsProps) => {
  return (
    <div className="pet-card-details-container">
      <div className="pet-card-details-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="pet-card-details-img">
          <img src={pet.imgUrl} alt={pet.name} />
        </div>
        <div className="pet-card-details-text">
          <h2>{pet.name}</h2>
          <h4>{pet.cidade}</h4>
          <p>{pet.description}</p>
          <p>Telefone: {pet.telefone}</p>
          <p>Tamanho: {pet.size}</p>
        </div>
      </div>
    </div>
  );
};

export default PetCardDetails;
