import { Link } from "react-router-dom";
import { Pet } from "../../types/pet";
import "./styles.css";

type Props = {
  pet: Pet;
}

const PetCard = ({ pet }: Props) => {

  return (
    < div className="pet-card-container">
      <div className="pet-card-img">
        <img src={"https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg"} alt="Imagem do pet" />
      </div>
      <div className="pet-card-infos">
        <div className="pet-card-info">
          <h5>Nome: {pet.name}</h5>
        </div>
        <div className="adopet-card-buttons">
          <div className="pet-card-adote">
            <Link to={`/adotar/${pet.id}`}>
              <button className="btn btn-secondary">Adote</button>
            </Link>
          </div>
          <div className="pet-card-mre-info">
            <Link to={`/petCardDetails/${pet.id}`}>
              <button className="btn btn-secondary">Detalhes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;