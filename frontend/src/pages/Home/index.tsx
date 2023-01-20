import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PetsList from '../../components/PetsList';
import './styles.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <PetsList />
            <Footer />
        </div>
    );
}

export default Home;