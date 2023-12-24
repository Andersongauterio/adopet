import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pet } from "../../types/pet";
import { PetImgs } from "../../types/petImgs";
import "./styles.css";
import notfound from '../../assets/images/image-not-found.png';

type Props = {
  pet: Pet;
}

const PetCard = ({ pet }: Props) => {

  const [petImgs, setPetImgs] = useState<PetImgs[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPetImgs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pet-imgs/${pet.id}/imgs`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const imgsData = await response.json();
        setPetImgs(imgsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching pet images:', error);
      }
    };

    fetchPetImgs();
  }, [pet.id]);

  if (!pet || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    < div className="pet-card-container">
      <div className="pet-card-img">
        {petImgs[0] && petImgs[0].imgurl ? (
          <img src={petImgs[0].imgurl} alt={petImgs[0].name || 'Image not found'} />
        ) : (
          <img src={notfound} alt={'Imagem do pet'} />
        )}
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