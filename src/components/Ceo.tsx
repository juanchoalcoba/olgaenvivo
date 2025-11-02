export default function GalleryAboutReverse() {
  return (
    <section
      id="gallery-about"
      className="w-full bg-black py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT LEFT */}
        <div className="flex flex-col gap-6 justify-center ">
          <h2 className="text-3xl sm:text-4xl text-center md:text-left font-bold text-gray-50">
            Comunidad & Energía
          </h2>

          <p className="text-lg text-gray-50 leading-relaxed text-center md:text-left">
            OLGA es movimiento, encuentro, risas y conexión real. No es sólo un
            estudio: es una comunidad que vibra, crea y crece.
          </p>

          <p className="text-gray-50 text-center md:text-left">
            Cada proyecto, cada streaming y cada evento nace desde la creatividad,
            el esfuerzo colectivo y el amor por lo que hacemos.
          </p>
        </div>

        {/* IMAGES RIGHT */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px] order-1 md:order-2">
          {/* Big image top left spanning full width (for asymmetric layout) */}

          <div className="col-span-2 row-span-1 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="estudio.jpeg"
              alt="OLGA Estudio principal"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bottom left smaller */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="todos2.png"
              alt="Behind the scenes OLGA"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom right smaller */}
          <div className="overflow-hidden  rounded-2xl shadow-lg">
            <img
              src="olgaenvivo.png"
              alt="Comunidad OLGA en vivo"
              className="w-full h-full object-cover "
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