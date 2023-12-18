import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormAdocao from '../../components/FormAdocao';
import PetAdoptInfo from '../../components/PetAdoptInfo';
import { Pet } from '../../types/pet';
import './styles.css';

const Adote = () => {

  const { petId } = useParams();
  const [pet, setPet] = useState<Pet>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/pets/${petId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch pet data');
        }
        const data = await response.json();
        setPet(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPetData();
  }, [petId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='adopet-adote-container'>
      {pet && (
        <>
          <div className='adopet-adote-info'>
            <PetAdoptInfo pet={pet} />
          </div>
          <div className='adopet-adote-form'>
            <FormAdocao pet={pet} />
          </div>
        </>
      )}
    </div>
  );
}

export default Adote;

