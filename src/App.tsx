import "./App.css";
import About from "./components/About";
import GalleryAboutReverse from "./components/Ceo";
import Navbar from "./components/Navbar";

// Home.tsx
export default function App() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white pt-24 flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto flex md:flex-row gap-24 items-center flex-col-reverse">
        {/* Text */}
        <div className="">
          <h1 className="text-5xl md:text-6xl w-125 font-extrabold mb-6 leading-tight">
            Bienvenidos a <span className="text-blue-400">Olga</span> en Vivo
          </h1>
          <p className="text-lg text-gray-300 mb-8 w-125">
            El nuevo hogar digital de la radio más innovadora de Argentina.
            Conectate, mirá y viví Olga en una experiencia web de otro nivel.
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-all">
            Ver Programación
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center ">
          <img
            src="/olgaenvivo.png"
            alt="Olga en Vivo"
            className="w-72 md:w-96 drop-shadow-[0_0_30px_#2563eb]"
          />
        </div>
      </div>
    </div>

    <main>
      <About />
      <GalleryAboutReverse />
    </main>
    </>
  );
}
