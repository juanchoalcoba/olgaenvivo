import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcula zoom y movimiento suave
  const scale = 1 + scrollY * 0.0004; // zoom
  const translateY = scrollY * 0.15;  // movimiento

  return (
    <div className="min-h-screen bg-black text-white pt-24 flex items-center justify-center overflow-hidden p-6 relative">
      
      {/* Background con parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/todos2.png')",
          opacity: "20%",
          transform: `scale(${scale}) translateY(${translateY}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0  from-black/80 via-[#0F4392]/40 to-black/90" />

      <div className="max-w-7xl mx-auto flex md:flex-row md:mt-8 mb-12 md:gap-24 items-center flex-col-reverse relative z-10">

        {/* Text */}
        <div className="w-96 md:w-138 flex justify-evenly items-center flex-col">
          <h1 className="text-4xl md:text-6xl p-4 md:p-0 font-extrabold mb-0 md:mb-6 leading-tight text-center md:text-left">
            Bienvenidos a <span className="text-gray-200">OLGA</span> en <span className="text-[#FF004E]">vivo</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 p-8 md:p-0 text-center md:text-left">
            El nuevo hogar digital de la radio más innovadora de Argentina.
            Conectate, mirá y viví Olga en una experiencia web de otro nivel.
          </p>
          <a
            href="https://www.youtube.com/@olgaenvivo_"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0F4392] hover:bg-blue-600 self-center md:self-start rounded-full z-30 font-semibold transition-all"
          >
            Ver Programación
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/olgaenvivo.png"
            alt="Olga en Vivo"
            className="w-72 md:w-96 drop-shadow-[0_0_30px_#2563eb] animate-subtle-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
