import { useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

// Sample schedule data
const schedule = [
  // Lunes
  {
    days: "Lunes",
    time: "06:00",
    title: "Paraiso Fiscal",
    img: "/grilla/paraiso.jpeg",
  },
  {
    days: "Lunes",
    time: "08:00",
    title: "Seria Increible",
    img: "/grilla/si.jpeg",
  },
  {
    days: "Lunes",
    time: "10:00",
    title: "Soñe que Volaba",
    img: "/grilla/sqv.jpeg",
  },
  {
    days: "Lunes",
    time: "12:30",
    title: "Tapados de Laburo",
    img: "/grilla/tapados.jpeg",
  },
  { days: "Lunes", time: "14:30", title: "TDT", img: "/grilla/tdt.jpeg" },
  {
    days: "Lunes",
    time: "16:30",
    title: "El fin del mundo",
    img: "/shows/golgana.jpg",
  },

  // Martes
  {
    days: "Martes",
    time: "06:00",
    title: "Paraiso Fiscal",
    img: "/grilla/paraiso.jpeg",
  },
  {
    days: "Martes",
    time: "08:00",
    title: "Seria Increible",
    img: "/grilla/si.jpeg",
  },
  {
    days: "Martes",
    time: "10:00",
    title: "Soñe que Volaba",
    img: "/grilla/sqv.jpeg",
  },
  {
    days: "Martes",
    time: "12:30",
    title: "Tapados de Laburo",
    img: "/grilla/tapados.jpeg",
  },
  {
    days: "Martes",
    time: "14:30",
    title: "Faltan Varones",
    img: "/grilla/varones.jpeg",
  },
  {
    days: "Martes",
    time: "16:00",
    title: "Paren a Olga",
    img: "/grilla/paren.jpeg",
  },
  {
    days: "Martes",
    time: "18:00",
    title: "GOL GANA",
    img: "/grilla/golgana.png",
  },

  // Miércoles
  {
    days: "Miércoles",
    time: "06:00",
    title: "Paraiso Fiscal",
    img: "/grilla/paraiso.jpeg",
  },
  {
    days: "Miércoles",
    time: "08:00",
    title: "Seria Increible",
    img: "/grilla/si.jpeg",
  },
  {
    days: "Miércoles",
    time: "10:00",
    title: "Soñe que Volaba",
    img: "/grilla/sqv.jpeg",
  },
  {
    days: "Miércoles",
    time: "12:30",
    title: "Tapados de Laburo",
    img: "/grilla/tapados.jpeg",
  },
  { days: "Miércoles", time: "14:30", title: "TDT", img: "/grilla/tdt.jpeg" },
  {
    days: "Miércoles",
    time: "16:30",
    title: "El fin del mundo",
    img: "/grilla/findelmundo.png",
  },

  // Jueves
  {
    days: "Jueves",
    time: "06:00",
    title: "Paraiso Fiscal",
    img: "/grilla/paraiso.jpeg",
  },
  {
    days: "Jueves",
    time: "08:00",
    title: "Seria Increible",
    img: "/grilla/si.jpeg",
  },
  {
    days: "Jueves",
    time: "10:00",
    title: "Soñe que Volaba",
    img: "/grilla/sqv.jpeg",
  },
  {
    days: "Jueves",
    time: "12:30",
    title: "Tapados de Laburo",
    img: "/grilla/tapados.jpeg",
  },
  {
    days: "Jueves",
    time: "14:30",
    title: "Mi Primo es Así",
    img: "/grilla/primo.jpeg",
  },

  // Viernes
  {
    days: "Viernes",
    time: "06:00",
    title: "Paraiso Fiscal",
    img: "/grilla/paraiso.jpeg",
  },
  {
    days: "Viernes",
    time: "08:00",
    title: "Seria Increible",
    img: "/grilla/si.jpeg",
  },
  {
    days: "Viernes",
    time: "10:00",
    title: "Soñe que Volaba",
    img: "/grilla/sqv.jpeg",
  },
  {
    days: "Viernes",
    time: "12:30",
    title: "Tapados de Laburo",
    img: "/grilla/tapados.jpeg",
  },
  { days: "Viernes", time: "14:30", title: "TDT", img: "/grilla/tdt.jpeg" },
  {
    days: "Viernes",
    time: "16:30",
    title: "El fin del mundo",
    img: "/grilla/findelmundo.png",
  },
];

export default function OlgaGrid() {
  const [filter, setFilter] = useState("Lunes"); // ✅ por defecto Lunes
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  const filtered = schedule.filter((item) =>
    filter === "Todos" ? true : item.days.includes(filter)
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 pt-24">
      <h2 className="text-4xl font-bold mb-8 text-center flex flex-col md:flex-row items-center justify-center gap-2">
        <FaYoutube className="text-red-500 w-10 h-10 hover:scale-110 transition-all cursor-pointer" />
        Programación OLGA
      </h2>

      <div className="flex gap-3 flex-wrap justify-center mb-10">
        {days.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-4 py-2 cursor-pointer rounded-2xl text-sm md:text-base border transition backdrop-blur-lg 
            ${
              filter === d
                ? "bg-white text-black font-bold"
                : "border-white/30 hover:bg-white/10"
            }
          `}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative rounded-2xl border border-white/10 shadow-xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay oscuro + blur */}
            <div className="absolute inset-0 bg-black/40  opacity-100 group-hover:bg-black/60 transition"></div>

            {/* Texto */}
            <div className="relative p-6">
              <div className="text-sm uppercase tracking-widest text-white/70 mb-1">
                {item.days}
              </div>
              <div className="text-2xl font-extrabold drop-shadow-lg mb-1">
                {item.title}
              </div>
              <div className="text-white/90 text-lg font-medium">
                {item.time} hs
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
