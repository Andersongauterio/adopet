import { useParams } from 'react-router-dom';
import FormAdocao from '../../components/FormAdocao';
import PetAdoptInfo from '../../components/PetAdoptInfo';
import { Pet } from '../../types/pet';
import './styles.css';


const Adote = () => {

  const { petId } = useParams();
  //  const [pet, setPet] = useState<Pet>();

  //  useEffect(() => {
  //    fetch(`/api/pets/${petId}`)
  //      .then((response) => response.json())
  //      .then((data) => setPet(data));
  //  }, [petId]);

  const pet: Pet = {
    id: 1,
    name: "Marley",
    telefone: 984322799,
    description: "Pet super ativo",
    size: "Grande",
    imgUrl: "",
    cidade: "Dois Irmãos"
  }

  return (
    <div className='adopet-adote-container'>
      <div className='adopet-adote-info'>
        <PetAdoptInfo pet={pet} />
      </div>
      <div className='adopet-adote-form'>
        <FormAdocao />
      </div>
    </div>
  );
};

export default Adote;

