export default function GalleryAboutReverse() {
  return (
    <section
      id="gallery-about"
      className="w-full bg-gray-50 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT LEFT */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Comunidad & Energía
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            OLGA es movimiento, encuentro, risas y conexión real. No es sólo un
            estudio: es una comunidad que vibra, crea y crece.
          </p>

          <p className="text-gray-600">
            Cada proyecto, cada streaming y cada evento nace desde la creatividad,
            el esfuerzo colectivo y el amor por lo que hacemos.
          </p>
        </div>

        {/* IMAGES RIGHT */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px] order-1 md:order-2">
          {/* Big image top left spanning full width (for asymmetric layout) */}

          <div className="col-span-2 row-span-1 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmedia.telebajocero.com%2Fp%2Fcb8d3b6b84c28743de20b00137fdf0ff%2Fadjuntos%2F225%2Fimagenes%2F000%2F938%2F0000938734%2F1200x675%2Fsmart%2Folgajpeg.jpeg&sp=1761984775T9a4276f93d40bf4018d13f62495ef336c3b94fd79a99c74d90879f3bb4f4d901"
              alt="OLGA Estudio principal"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bottom left smaller */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="todos.png"
              alt="Behind the scenes OLGA"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom right smaller */}
          <div className="overflow-hidden bg-blue-950 rounded-2xl shadow-lg">
            <img
              src="olgaenvivo.png"
              alt="Comunidad OLGA en vivo"
              className="w-full h-full object-cover drop-shadow-[0_0_30px_#2213gb]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/*
USO
- Guarda como `components/GalleryAboutReverse.tsx`
- Importar en Home o donde quieras insertarlo:

import GalleryAboutReverse from "@/components/GalleryAboutReverse";

<GalleryAboutReverse />

NOTAS
- Reemplazá las imágenes por fotos reales (Next.js -> <Image /> con layout responsive)
- El diseño está invertido: texto izquierda, galería derecha
- Composición asimétrica: una img grande arriba, dos chicas abajo
- Recomendado poner luego del About para transición visual
*/