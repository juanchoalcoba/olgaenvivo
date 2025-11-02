import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Staff from "./pages/Staff";
import './App.css'
import OlgaGrid from "./pages/Programacion";

export default function App() {
  return (
    <>
      <Navbar />
      
      {/* Offset para la navbar fija */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/programacion" element={<OlgaGrid />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
