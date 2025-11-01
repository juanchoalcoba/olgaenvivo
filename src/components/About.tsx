export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div className="w-full h-auto">
          {/* Reemplazá este img por <Image /> si usás Next */}
          <img
            src="todos.png"
            alt="CEOs de OLGA"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            STAFF 2025 de OLGA
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            OLGA nació como una visión compartida: llevar comunicación fresca,
            humor, cultura y comunidad a cada rincón. Nuestro equipo crea con
            pasión, autenticidad y una energía que impulsa cada proyecto a
            nuevas alturas.
          </p>

          <p className="text-gray-600">
            Desde el estudio al streaming, de eventos en vivo a contenido
            digital, buscamos conectar, inspirar y crear un espacio hecho por y
            para la gente.
          </p>
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