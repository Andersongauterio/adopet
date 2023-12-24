import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "../../types/pet";
import { PetImgs } from "../../types/petImgs";
import "./styles.css";
import notfound from '../../assets/images/image-not-found.png';

const PetCardDetails = () => {

  const { petId } = useParams<{ petId: string }>();
  const [pet, setPet] = useState<Pet>();
  const [petImgs, setPetImgs] = useState<PetImgs[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPetImg, setSelectedPetImg] = useState<PetImgs | null>(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pets/${petId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPet(data);
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };

    const fetchPetImgs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/pet-imgs/${petId}/imgs`);
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

    fetchPetDetails();
    fetchPetImgs();
  }, [petId]);

  const handleImgCardClick = (petImg: PetImgs) => {
    setSelectedPetImg(petImg);
  };

  if (!pet || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pet-card-details-container">
      <div className="pet-card-details-img-container">
        <div className="pet-card-details-img-main-container">
          <div className="pet-card-details-img-main">
            { petImgs[0] && petImgs[0].imgurl ? (
              <img src={ petImgs[0].imgurl || notfound } alt={ petImgs[0].name || 'Imagem do pet' } />
            ) : (
              <img src={ notfound } alt={ 'Not found' } />
            ) }
          </div>
        </div>
        <div className="pet-card-details-img-cards">
          {petImgs.length > 0 ? (
            petImgs.map(petImg => (
              <div className="pet-card-details-img-card" key={petImg.id}>
                <img src={petImg.imgurl || 'url-imagem-padrao.jpg'} alt={petImg.name || 'Imagem do pet'} onClick={() => handleImgCardClick(petImg)} />
              </div>
            ))
          ) : (
            <div>Sem imagens disponíveis</div>
          )}
        </div>
      </div>
      <div className="pet-card-details-text">
        <h2>{pet.name}</h2>
        <p>{pet.description}</p>
        <p>Tamanho: {pet.size}</p>
      </div>
    </div>
  );
};

export default PetCardDetails;
