import { Pet } from "../../types/pet";
import "./styles.css";

type Props = {
  pet: Pet;
  onClick: () => void;
}

const PetCard = ({ pet, onClick }: Props) => {
  const handleClick = () => {
    onClick();
  };

  return (
    < div className="pet-card-container" onClick={handleClick}>
      <div className="pet-card-img">
        <img src={pet.imgUrl} alt="Imagem do pet" />
      </div>
      <div className="pet-card-info">
        <h5>Nome: {pet.name}</h5>
        <h5>Telefone: {pet.telefone}</h5>
        <h5>Cidade: {pet.cidade}</h5>
      </div>
    </div >
  );
};

export default PetCard;