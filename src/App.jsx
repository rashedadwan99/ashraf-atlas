import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddAd from "./pages/AddAd";
import Contact from "./pages/Contact";
import AdDetails from "./pages/AdDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-ad" element={<AddAd />} />
          <Route path="/ad/:id" element={<AdDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
