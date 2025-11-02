import { useState } from "react";

type NavItem = { name: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { name: "Inicio", href: "/" },
  { name: "Programación", href: "https://www.youtube.com/@olgaenvivo_" },
  { name: "TiendaOlga", href: "https://olga.store/" },
  { name: "Eventos", href: "#eventos" },
  { name: "Staff", href: "/staff" },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/60 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="#inicio" className="flex items-center gap-3">
              {/* Inline SVG logo placeholder - reemplazalo con tu logo o <img /> */}
              <img src="olgaenvivo.png" className="w-16" alt="" />
              <span className="sr-only">OLGA Argentina — Inicio</span>
              <span className="hidden sm:inline-block font-semibold text-lg text-gray-800">OLGA</span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
              target=""
                key={item.name}
                href={item.href}
                className="px-2 py-1 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right actions + Mobile button */}
          <div className="flex items-center gap-3">
            {/* Example action (puedes añadir iconos) */}
            <a href="#contacto" className="hidden md:inline-block text-sm font-medium px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-[#DD1717]">Contacto</a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - slide down */}
      <div className={`md:hidden transition-max-h duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              {item.name}
            </a>
          ))}
          <a href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-red-700 text-center">Contacto</a>
        </div>
      </div>
    </header>
  );
}

/*
USO
- Guarda este archivo como `components/Navbar.tsx`.
- En tu `Home.tsx` o layout importa: `import Navbar from "@/components/Navbar";` y agrega `<Navbar />` al top del JSX.

Notas / Troubleshooting rápido
- Tailwind: asegúrate de tener Tailwind configurado y que el `content` en tailwind.config.js incluya tus archivos .tsx.
- Si usás Next.js y querés usar `next/image`, reemplaza el SVG por <Image src={logo} alt="OLGA" width={36} height={36} /> y asegura importar `Image`.
- Error común "className property not allowed": revisá que tu archivo sea .tsx y que tsconfig tenga "jsx": "react-jsx" (o import React si usás la antigua transform).
- Si recibís problemas de posicionamiento (navbar sobreponiéndose al contenido), agrega `pt-16` al contenedor principal para compensar la altura fija (h-16).
- Si querés que el link activo tenga estilo, puedes comparar `window.location.hash` o usar el router de tu framework para aplicar clases condicionales.
*/
