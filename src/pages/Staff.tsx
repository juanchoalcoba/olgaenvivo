export default function Staff() {
  const people = [
    { name: "Nombre 2", role: "Producción", img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe" },
    { name: "Nombre 3", role: "Creatividad / Guion", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
    { name: "Nombre 4", role: "Dirección Técnica", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c" },
    { name: "Nombre 5", role: "Streaming / Cámaras", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
    { name: "Nombre 6", role: "Community Manager", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
    { name: "Nombre 7", role: "Edición / Post", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36" },
    { name: "Nombre 8", role: "Art & Diseño", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <h1 className="text-center text-5xl sm:text-6xl font-extrabold mb-14 text-white 2026 
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
              <p className="text-sm text-gray-300">{p.role}</p>
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
