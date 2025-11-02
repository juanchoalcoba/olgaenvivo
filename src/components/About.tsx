export default function About() {
  return (
    <section
      id="about"
      className="w-full  py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}

        {/* TEXT */}
        <div className="flex flex-col gap-6  justify-center ">
          <h2 className="text-3xl sm:text-4xl text-center md:text-left font-bold text-gray-50">
            STAFF 2026 de OLGA
          </h2>

          <p className="text-lg text-gray-50 leading-relaxed text-center md:text-left">
            En 2026, OLGA dará un nuevo salto creativo con un staff formado por
            voces frescas, talento disruptivo y artistas que marcan tendencia.
            Un equipo diverso, apasionado y comprometido con reinventar la forma
            de comunicar, entretener y conectar con la audiencia.
          </p>

          <p className="text-gray-50 text-center md:text-left">
            Productores, creadores, comediantes, periodistas, realizadores y
            mentes brillantes que comparten una misma visión: hacer contenido
            auténtico, innovador y lleno de energía, manteniendo siempre la
            esencia que hace de OLGA un espacio único en la escena cultural y
            digital de la región.
          </p>
        </div>
        <div className="w-full h-auto">
          {/* Reemplazá este img por <Image /> si usás Next */}
          <img
            src="todos.png"
            alt="CEOs de OLGA"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/*
USO
- Guarda como `components/About.tsx`
- Importá en tu página:

import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        ...
      </main>
    </>
  )
}

NOTAS
- Reemplazá la imagen por la foto real.
- Si usás Next.js, cambiá <img> por:
  <Image src="/tu-imagen.jpg" alt="CEO OLGA" width={600} height={500} className="rounded-2xl shadow-lg object-cover" />
- Si querés animación suave, podés agregar framer-motion despues.
*/
