import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPetImgs from "./components/AddPetImgs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddImgs from "./pages/AddImgs";
import Adote from "./pages/Adote";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import PetCadastro from "./pages/PetCadastro";
import PetDetail from "./pages/PetDetail";
import PetList from "./pages/PetList";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petList" element={<PetList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/petCardDetails/:petId" element={<PetDetail />} />
        <Route path="/userArea" element={<UserDashboard />} />
        <Route path="/petCadastro" element={<PrivateRoute element={<PetCadastro />} />} />
        <Route path="/adotar/:petId" element={<PrivateRoute element={<Adote />} />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastre-se" element={<Signup />} />
        <Route path="/editPet/:petId" element={<PrivateRoute element={<PetCadastro />} />} />
        <Route path="/add-images/:petId" element={< AddImgs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
