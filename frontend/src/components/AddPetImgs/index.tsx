import { useState } from 'react';
import './styles.css';

const AddPetImgs: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const maxImages = 6;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray: string[] = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...filesArray]);
      return () => filesArray.forEach((file) => URL.revokeObjectURL(file));
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, idx) => idx !== index));
  };

  return (
    <div className='adopet-addimgs-container'>
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        disabled={images.length >= maxImages}
      />
      <div className="adopet-addimgs-imgs">
        { images.map((image, index) => (
          <div key={ index } className="adopet-addimgs-preview">
            <img src={ image } alt={ `Imagem ${ index }` } />
            <button onClick={ () => removeImage(index) }>Remover</button>
          </div>
        )) }
      </div>
    </div>
  );
};

export default AddPetImgs;