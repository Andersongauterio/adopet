import './App.css';
import './assets/styles/custom.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PetsList from './components/PetsList';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <PetsList />
        <Footer />
      </>
    </div>
  );
}

export default App;
