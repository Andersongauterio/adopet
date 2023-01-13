import { Pet } from '../../types/pet';
import PetCard from '../PetCard';
import './styles.css';

const PetsList = () => {

    const pet: Pet = {
        id: 1,
        name: "Marley",
        description: "Pet muito querido buscando um lar",
        size: "G",
        imgUrl: "https://totosdatete.org.br/wp-content/uploads/2019/05/asdasda.png"
    }

    return (
        <div className="pets-list-container">
            <div className="row">
                <div className="col-sm-12s col-lg-6 col-xl-3">
                    <PetCard pet={pet} />
                </div>
                <div className="col-sm-12s col-lg-6 col-xl-3">
                    <PetCard pet={pet} />
                </div>
                <div className="col-sm-12s col-lg-6 col-xl-3">
                    <PetCard pet={pet} />
                </div>
                <div className="col-sm-12s col-lg-6 col-xl-3">
                    <PetCard pet={pet} />
                </div>
                <div className="col-sm-12s col-lg-6 col-xl-3">
                    <PetCard pet={pet} />
                </div>
                
            </div>
        </div>
    );
};

export default PetsList;