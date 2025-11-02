export default function Staff() {
  const people = [
      { name: "Bernarda Cella", role: "CEO / Productora", img: "./berni.jpeg" },
      { name: "Luis Cella", role: "CEO / Productor", img: "./luis.jpeg" },
    { name: "Miguel Granados", role: "Actor / Conductor / Comediante", img: "./miguel.jpeg" },
    { name: "Lucas Fridman", role: "Director Artistico / Conductor", img: "./lucas.jpeg" },
    { name: "Homero Pettinato", role: "Actor / Comediante", img: "./homero.jpeg" },
    { name: "Nati Jota", role: "Periodista / Conductora", img: "./nati.jpeg" },
    { name: "Damian Betular", role: "Conductor y productor", img: "./damian.jpeg" },
    { name: "Tomas Kirzner", role: "Actor / Comendiante", img: "./tomas.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <h1 className="text-center text-5xl sm:text-6xl font-montserrat mb-14 text-white 2026 
">
        Staff OLGA 2026
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {people.map((p, i) => (
          <div
            key={i}
            className="group relative h-80 bg-cover bg-center rounded-2xl overflow-hidden shadow-lg 
                       hover:scale-[1.04] transition-transform duration-300 cursor-pointer"
            style={{ backgroundImage: `url(${p.img})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0  from-black/10 via-black/40 to-black/90" />

            {/* Info */}
            <div className="absolute bottom-0 p-5 w-full backdrop-blur-md bg-white/10 
                            border-t border-white/20">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-gray-100">{p.role}</p>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                             from-[#DD1717]/40 to-[#0033FF]/40 mix-blend-screen" />
          </div>
        ))}
      </div>
    </div>
  );
}
