import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "../../types/pet";
import { PetImgs } from "../../types/petImgs";
import "./styles.css";

const PetCardDetails = () => {

  const { petId } = useParams<{ petId: string }>();
  const [pet, setPet] = useState<Pet>();
  const [petImgs, setPetImgs] = useState<PetImgs[]>([]);
  const [selectedPetImg, setSelectedPetImg] = useState<PetImgs | null>(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/pets/${petId}`);
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
        const response = await fetch(`http://localhost:8080/pet-imgs/${petId}/imgs`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const imgsData = await response.json();
        setPetImgs(imgsData);
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

  if (!pet) {
    return <div>Loading...</div>; // Loading state or error handling
  }

  return (
    <div className="pet-card-details-container">
      <div className="pet-card-details-img-container">
        <div className="pet-card-details-img-main-container">
          <div className="pet-card-details-img-main">
            <img src={petImgs[0].imgurl} alt={petImgs[0].name} />
          </div>
        </div>
        <div className="pet-card-details-img-cards">
          {petImgs.map(petImg => (
            <div className="pet-card-details-img-card" key={petImg.id}>
              <img src={petImg.imgurl} alt={petImg.name} onClick={() => handleImgCardClick(petImg)} />
            </div>
          ))}
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
