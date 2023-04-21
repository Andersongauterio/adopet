import { Pet } from "../../types/pet";
import "./styles.css";

type Props = {
    pet: Pet;
}

const PetCard = ({ pet }: Props) => {
    return (
        < div className="pet-card-container" >
            <div className="pet-card-img">
                <img src={pet.imgUrl} alt="Imagem do pet" />
            </div>
            <div className="pet-card-info">
                <h4>Nome: {pet.name}</h4>
                <h4>Telefone: {pet.telefone}</h4>
                <h4>Cidade: {pet.cidade}</h4>
                <h4>Descrição: {pet.description}</h4>
            </div>
        </div >
    );
};

export default PetCard;