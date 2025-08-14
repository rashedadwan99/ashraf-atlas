/*import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddAd from "./pages/AddAd";
import AdDetails from "./pages/AdDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-ad" element={<AddAd />} />
          <Route path="/ad/:id" element={<AdDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
*/
export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React is working!</h1>
      <p>If you see this, the frontend is rendering correctly.</p>
    </div>
  );
}
