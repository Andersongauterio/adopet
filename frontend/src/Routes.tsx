import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PetDetail from "./pages/PetDetail";
import PetList from "./pages/PetList";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/petList" element={<PetList />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/petCardDetails/:petId" element={<PetDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;
