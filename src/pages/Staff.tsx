export default function Staff() {
  const people = [
    { name: "Miguel Granados", role: "CEO / Conductor / Comediante", img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmetadata-static.plex.tv%2Fa%2Fpeople%2Faeb5271be1f8d6289f8d0b67ba769cd8.jpg&sp=1762098220Tc7b42287fa889e2e5cfd9628c3da0b5f6c1eafe30878eb2a413e0c1df5b6b5a5" },
    { name: "Lucas Fridman", role: "Director Artistico / Conductor", img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fs.yimg.com%2Fny%2Fapi%2Fres%2F1.2%2FnSsHDGhhnEhs8wT.V1PQBA--%2FYXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mzk-%2Fhttps%3A%2F%2Fmedia.zenfs.com%2Fes%2Flanacion.com.ar%2Ff2b9f58c1ae7cbeb535310006b617bdc&sp=1762098186Te4ddc5c61d4e1990a330d772c3ef23664c4f100ca6228eb62b83d0a804f49e77" },
    { name: "Bernarda Cella", role: "CEO / Productora", img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.viapais.com.ar%2Fresizer%2Fv2%2FKVK44JRJC5FQPIVSLEOPW3JQ4M.jpg%3Fquality%3D75%26smart%3Dtrue%26auth%3Db482ff06ace8c0c9481b57df07a1282ec01288adb50e6d7be606ab90f359a59d%26width%3D980%26height%3D640&sp=1762098294Tc18932d370ef7fdfcd018db86630be2546c280bd01bdbfb44bf7481d1a9f9fdb" },
    { name: "Luis Cella", role: "CEO / Productor", img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fvisionshow.com.ar%2Fwp-content%2Fuploads%2F2024%2F10%2Fluis-cella-el-cerebro-detras-de-olga-y-de-susana-gimenez-como-se-lleva-con-migue-granado-y-por-que-adora-a-la-diva-5.jpg&sp=1762098344Tb7a8e9253c818f45a7c922f78614a94d7e7b0c1aad04011aacd97617f8eeff01" },
    { name: "Homero Pettinato", role: "Humorista / Comediante", img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fresizer.glanacion.com%2Fresizer%2Fv2%2Fhomero-pettinato-hablo-con-la-nacion-y-no-evito-SSAFLWOPZJBXVM5TKLVBNB6ASQ.JPG%3Fauth%3D602f2a37234966748ec2649e8e718aae42ede16d553e8322b3cd9793a9fbbf01%26width%3D768%26quality%3D70%26smart%3Dfalse&sp=1762098392T89ff3126f6ccddbff4212b50077f1b0cff4c8e6a01e475e1fbabab60ae0a25ec" },
    { name: "Nati Jota", role: "Periodista / Conductora", img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia.a24.com%2Fp%2Ff846baa76b3e94ed56b90834ebc6adb8%2Fadjuntos%2F296%2Fimagenes%2F009%2F362%2F0009362608%2F1200x675%2Fsmart%2Fnati-jotajpg.jpg&sp=1762098442T57bfb6d4ee05f6a261f74ed23011ae1be41c4db7dd68c6b4c52ff0f8c3717707" },
    { name: "Damian Betular", role: "Conductor y productor", img: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.uaxmuRQkXoK7hXrZBiSMpQHaEK%3Fpid%3DApi&sp=1762098610Tdf18d4e6d2dc48c92c290b39ceae65259928537060ba8198fb8b255e172e338e" },
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
