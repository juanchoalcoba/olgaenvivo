
const Hero = () => {
  return (
    <div  className="min-h-screen bg-black text-white pt-24 flex items-center justify-center  overflow-x-hidden p-6">
       <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/todos2.png')", opacity: "10%" }}
      />

            <div className="absolute inset-0  from-black/80 via-[#0F4392]/40 to-black/90" />



      <div className="max-w-7xl mx-auto flex md:flex-row gap-12 md:gap-24 items-center flex-col-reverse">
        {/* Text */}
        <div className="w-96 md:w-138 flex justify-evenly items-center  flex-col">
          <h1 className="text-4xl md:text-6xl p-4 md:p-0 font-extrabold mb-0 md:mb-6 leading-tight text-center md:text-left">
            Bienvenidos a <span className="text-[#0F4392]">OLGA</span> en Vivo
          </h1>
          <p className="text-lg text-gray-300 mb-8 p-8 md:p-0 text-center md:text-left">
            El nuevo hogar digital de la radio más innovadora de Argentina.
            Conectate, mirá y viví Olga en una experiencia web de otro nivel.
          </p>
          <button className="px-6 py-3 bg-[#0F4392] hover:bg-blue-600 self-center md:self-start rounded-full font-semibold transition-all ">
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
