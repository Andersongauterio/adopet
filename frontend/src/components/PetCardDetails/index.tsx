import { useState } from "react";
import { ReactComponent as LeftArrowIcon } from '../../assets/images/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/images/right-arrow.svg';
import { useParams } from "react-router-dom";
import { Pet } from "../../types/pet";
import { PetImgs } from "../../types/petImgs";
import "./styles.css";

const PetCardDetails = () => {

  const { petId } = useParams();
  //  const [pet, setPet] = useState<Pet>();

  //  useEffect(() => {
  //    fetch(`/api/pets/${petId}`)
  //      .then((response) => response.json())
  //      .then((data) => setPet(data));
  //  }, [petId]);

  const petImgs: PetImgs[] = [
    {
      pet_id: 1,
      img_id: 1,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      name: "Foto 1"
    },
    {
      pet_id: 1,
      img_id: 2,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      name: "Foto 2"
    },
    {
      pet_id: 1,
      img_id: 3,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      name: "Foto 3"
    },
    {
      pet_id: 1,
      img_id: 4,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      name: "Foto 4"
    },
    {
      pet_id: 1,
      img_id: 5,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/200px-YellowLabradorLooking_new.jpg",
      name: "Foto 5"
    }
  ]

  const pet: Pet =
  {
    id: 1,
    name: "Marley",
    description: "Pet muito querido buscando um lar",
    size: "G",
    type: "Cachorro",
    createAt: "2023-11-08T02",
    updateAt: "2023-11-08T02:08:51.962Z"
  };

  const [selectedPetImg, setSelectedPetImg] = useState<PetImgs | null>(null);

  if (!pet) {
    // Loading state or error handling
    return <div>Loading...</div>;
  };

  const handleImgCardClick = (petImg: PetImgs) => {
    console.log(petImg);
    setSelectedPetImg(petImg);
  };

  return (
    <div className="pet-card-details-container">
      <div className="pet-card-details-img-container">
        <div className="pet-card-details-img-main-container">
          <LeftArrowIcon />
          <div className="pet-card-details-img-main">
            <img src={"https://www.petz.com.br/blog/wp-content/uploads/2019/05/cachorro-independente-1.jpg"} alt={pet.name} />
          </div>
          <RightArrowIcon />
        </div>
        <div className="pet-card-details-img-cards">
          {petImgs.map(petImg => (
            <div className="pet-card-details-img-card" key={petImg.img_id}>
              <img src={petImg.imgUrl} alt={petImg.name} onClick={() => handleImgCardClick(petImg)} />
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
