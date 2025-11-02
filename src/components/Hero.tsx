import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 flex items-center  overflow-x-hidden px-6">
      <div className="max-w-7xl mx-auto flex md:flex-row gap-12 md:gap-24 items-center flex-col-reverse">
        {/* Text */}
        <div className="w-96 md:w-138 flex justify-evenly items-center  flex-col">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-0 md:mb-6 leading-tight text-center md:text-left ">
            Bienvenidos a <span className="text-blue-600">OLGA</span> en Vivo
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center md:text-left">
            El nuevo hogar digital de la radio más innovadora de Argentina.
            Conectate, mirá y viví Olga en una experiencia web de otro nivel.
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 self-center md:self-start rounded-full font-semibold transition-all ">
            Ver Programación
          </button>
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
