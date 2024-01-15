import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPetImgs: React.FC = () => {

  type PetImgs = {
    id?: number;
    imgurl: string;
  };

  type UpdatedImageData = {
    imgurl?: string;
    name?: string;
  };

  const [images, setImages] = useState<PetImgs[]>([]);
  const [currentImageId, setCurrentImageId] = useState<number | null>(null);
  const maxImages = 6;
  const { petId } = useParams<{ petId: string }>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initiateImageUpdate = (imageId: number) => {
    setCurrentImageId(imageId);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newImageUrl = await uploadImageToBackend(file);

      if (newImageUrl && currentImageId) {
        const updatedImageData = { imgurl: newImageUrl };
        await updateImageInBackend(currentImageId, updatedImageData);
        setImages((prevImages) =>
          prevImages.map((img) =>
            img.id === currentImageId ? { ...img, imgurl: newImageUrl } : img
          )
        );
      }
    }
  };

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
          setImages(prevImages => [...prevImages, { imgurl: imgUrl }]);
          toast.success("Imagem carregada com sucesso!");
        }
      }
    }
  };

  const handleSaveImages = async () => {

    const altText = "Descrição da imagem";
    debugger;
    for (const imgUrl of images) {
      const createPetImgsDto = {
        pet_id: Number(petId),
        alt: altText,
        imgurl: imgUrl
      };

      try {
        const url = `${process.env.REACT_APP_API_URL}/pet-imgs`
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(createPetImgsDto)
        });
        toast.success("Imagem salva com sucesso!");

        if (!response.ok) {
          throw new Error('Falha ao salvar imagem');
        }
      } catch (error) {
        console.error('Erro ao salvar imagem:', error);
      }
    }
  }

  const updateImageInBackend = async (
    imageId: number,
    updatedImageData: UpdatedImageData
  ) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/pet-imgs/${imageId}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedImageData),
      });

      if (!response.ok) {
        throw new Error(`Erro ao atualizar a imagem: Status ${response.status}`);
      }

      toast.success('Imagem atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar imagem:', error);
      toast.error('Erro ao atualizar imagem.');
    }
  };

  useEffect(() => {
    async function fetchPetImages() {
      try {
        const url = `${process.env.REACT_APP_API_URL}/pet-imgs/${petId}/imgs`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro ao carregar imagens');
        }
        const images = await response.json();
        setImages(images);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    }

    fetchPetImages();
  }, [petId]);

  return (
    <div className='adopet-addimgs-container'>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        disabled={images.length >= maxImages}
      />
      <div className="adopet-addimgs-imgs">
        {images.map((image, index) => (
          <div key={image.id} className="adopet-addimgs-preview">
            <img src={image.imgurl} alt={`Imagem ${index}`} />
            {image.id !== undefined && (
              <button onClick={() => initiateImageUpdate(image.id as number)}>Atualizar</button>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleSaveImages} disabled={images.length === 0}>
        Salvar Imagens
      </button>
      <ToastContainer />
    </div>
  );
};

export default AddPetImgs;