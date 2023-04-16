import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PetDetails from './components/PetDetails';
import Contact from './pages/Contact';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pet" element={<PetDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
