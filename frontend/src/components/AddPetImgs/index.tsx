import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const AddPetImgs: React.FC = () => {

  const [images, setImages] = useState<string[]>([]);
  const maxImages = 6;
  const { petId } = useParams<{ petId: string }>();

  async function uploadImageToBackend(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      debugger;
      const url = `${process.env.REACT_APP_API_URL}/upload/image`;
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Erro  ao fazer upload da imagem: Status ${response.status}`);
      }

      const data = await response.text();
      return data;
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
    }
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      for (const file of filesArray) {
        const imgUrl = await uploadImageToBackend(file);
        if (imgUrl) {
          setImages((prevImages) => [...prevImages, imgUrl]);
        }
      }
    }
  }

  const handleSaveImages = async () => {

    const altText = "Descrição da imagem";

    for (const imgUrl of images) {
      const createPetImgsDto = {
        pet_id: Number(petId),
        alt: altText,
        imgurl: imgUrl
      };

      try {
        const url = `${process.env.REACT_APP_API_URL}/api/pet-imgs`
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(createPetImgsDto)
        });

        if (!response.ok) {
          throw new Error('Falha ao salvar imagem');
        }
      } catch (error) {
        console.error('Erro ao salvar imagem:', error);
      }
    }
  }

  return (
    <div className='adopet-addimgs-container'>
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        disabled={images.length >= maxImages}
      />
      <div className="adopet-addimgs-imgs">
        {images.map((image, index) => (
          <div key={index} className="adopet-addimgs-preview">
            <img src={image} alt={`Imagem ${index}`} />
          </div>
        ))}
      </div>
      <button onClick={handleSaveImages} disabled={images.length === 0}>
        Salvar Imagens
      </button>
    </div>
  );
};

export default AddPetImgs;