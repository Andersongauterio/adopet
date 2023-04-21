import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PetDetails from "./components/PetDetails";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pet" element={<PetDetails />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;
