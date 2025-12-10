import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Staff from "./pages/Staff";
import './App.css'
import OlgaGrid from "./pages/Programacion";
import EventsList from "./pages/EventList";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";


export default function App() {

  useEffect(() => {
    const lenis = new Lenis();

    // Aquí tipamos `e` como un objeto cualquiera (puedes ajustarlo si conoces la forma exacta)
    lenis.on('scroll', (e: unknown) => {
      console.log(e);
    });

    // Tipamos `time` como número
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  
  return (
    <>
      <Navbar />
      
      {/* Offset para la navbar fija */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/programacion" element={<OlgaGrid />} />
          <Route path="/eventos" element={<EventsList />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
