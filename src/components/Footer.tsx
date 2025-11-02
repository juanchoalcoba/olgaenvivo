import {
  FaYoutube,
  FaInstagram,

  FaTwitch,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/olgaenvivo.png"
            alt="OLGA Logo"
            className="w-14 opacity-90 bg-white rounded-full"
          />
          <h2 className="text-white text-xl font-bold tracking-tight">OLGA</h2>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm font-medium">
          <a href="https://olga.store/" className="hover:text-white transition">
            Olga.Store
          </a>
          <a href="#" className="hover:text-white transition">
            Programación
          </a>
          
          <a href="#" className="hover:text-white transition">
            Eventos
          </a>
          <a href="#" className="hover:text-white transition">
            Contacto
          </a>
        </nav>

        {/* Icons */}
        <div className="flex gap-5 text-xl text-gray-400">
          <a
            href="https://www.youtube.com/@olgaenvivo_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="hover:text-red-500 hover:scale-110 transition-all cursor-pointer" />
          </a>

          <a
            href="https://www.instagram.com/olgaenvivo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-pink-500 hover:scale-110 transition-all cursor-pointer" />
          </a>

          <a
            href="hhttps://www.twitch.tv/olgaenvivo?lang=es"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitch"
          >
            <FaTwitch className="hover:text-purple-500 hover:scale-110 transition-all cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} OLGA - Todos los derechos reservados.
      </div>
    </footer>
  );
}
