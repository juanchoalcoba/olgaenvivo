import "./App.css";
import About from "./components/About";
import GalleryAboutReverse from "./components/Ceo";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// Home.tsx
export default function App() {

  



  return (
    <>
    <Navbar />
    <Hero />

    <main>
      <GalleryAboutReverse />
      <About />
    </main>
    </>
  );
}
