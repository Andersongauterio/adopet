import './App.css';
import Navbar from './components/Navbar';
import PetCard from './components/PetCard';
import PetFilter from './components/PetFilter';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <PetFilter />
        <PetCard />
      </>
    </div>
  );
}

export default App;
