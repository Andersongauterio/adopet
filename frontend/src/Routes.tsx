import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Adote from "./pages/Adote";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import PetCadastro from "./pages/PetCadastro";
import PetDetail from "./pages/PetDetail";
import PetList from "./pages/PetList";
import Signup from "./pages/Signup";
import UserArea from "./pages/UserArea";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petList" element={<PetList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/petCardDetails/:petId" element={<PetDetail />} />
        <Route path="/userArea/:userId" element={<UserArea />} />
        <Route path="/petCadastro" element={<PetCadastro />} />
        <Route path="/adotar/:petId" element={<Adote />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastre-se" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
