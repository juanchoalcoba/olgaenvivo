import React from "react";

interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string; // ISO or readable
  videoUrl: string; // youtube link or direct mp4
}

interface EventsListProps {
  events?: EventItem[];
}

// Helper: transforma un link de YouTube en URL embebida
const toYouTubeEmbed = (url: string) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const params = u.searchParams;
      const v = params.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      // revisa rutas /embed/VIDEOID
      const parts = u.pathname.split("/").filter(Boolean);
      const embedIndex = parts.indexOf("embed");
      if (embedIndex >= 0 && parts[embedIndex + 1]) return `https://www.youtube.com/embed/${parts[embedIndex + 1]}`;
    }
  } catch (e) {
    console.error(e, "No se que esta pasando")
  }
  return null;
};

const isVideoFile = (url: string) => {
  return url.match(/\.(mp4|webm|ogg)(\?|$)/i);
};

const EventCard: React.FC<{ event: EventItem }> = ({ event }) => {
  const embed = toYouTubeEmbed(event.videoUrl);
  const directVideo = isVideoFile(event.videoUrl);

  return (
    <article className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center border-b border-gray-800 py-6 last:border-b-0">
      {/* Video (left on desktop, top on mobile) */}
      <div className="w-full md:w-1/3">
        <div className="relative rounded-lg overflow-hidden shadow-sm bg-black">
          {/* Mantener ratio 16:9 usando aspect-video */}
          <div className="aspect-video bg-gray-900">
            {embed ? (
              <iframe
                src={embed}
                title={event.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : directVideo ? (
              <video className="w-full h-full object-cover" controls>
                <source src={event.videoUrl} />
                Tu navegador no soporta la reproducción de video.
              </video>
            ) : (
              // Si no reconocemos el link, mostramos un enlace con thumbnail genérico
              <a
                href={event.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center text-sm text-gray-400 p-4"
                aria-label={`Abrir video de ${event.title} en nueva pestaña`}
              >
                Ver video
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Texto (derecha en desktop, abajo en mobile) */}
      <div className="w-full md:w-2/3">
        <h3 className="text-xl md:text-2xl font-semibold leading-snug">{event.title}</h3>
        <time className="block text-sm text-gray-400 mt-2">{event.date}</time>
        <p className="mt-3 text-gray-200 text-base leading-relaxed">{event.description}</p>
        <div className="mt-4">
          <a
            href={event.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 border border-gray-700 text-white rounded-md text-sm hover:scale-105 transition-transform"
            aria-label={`Abrir video de ${event.title}`}
          >
            Abrir en YouTube
          </a>
        </div>
      </div>
    </article>
  );
};

const DEFAULT_EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Un dia Maradoniano",
    description:
      "Festejamos el cumpleaños de D10S con familia del Diego e increibles invitados + shows en vivo",
    date: "2025-10-30",
    videoUrl: "https://www.youtube.com/watch?v=sfIbLI-byAI&pp=0gcJCQMKAYcqIYzv",
  },
  {
    id: "2",
    title: "Mambru y Bandana Day",
    description: "Recordamos estas dos bandas que marcaron una generacion",
    date: "2025-07-09",
    videoUrl: "https://www.youtube.com/watch?v=QW6EDJT92IU",
  },
  {
    id: "3",
    title: "Cerati Day",
    description: "Homenaje a uno de los musicos y artistas mas grandes de la historia Argentina",
    date: "2024-10-24",
    videoUrl: "https://www.youtube.com/watch?v=CVD45nWNRN0&t=510s", // ejemplo de link no-YouTube
  },
  {
    id: "4",
    title: "La Cruda",
    description: "Primer Episodio de la cruda formato 2025",
    date: "2025-06-02",
    videoUrl: "https://www.youtube.com/watch?v=jS2LoXykaRw&t=1236s",
  },
  {
    id: "5",
    title: "Capricho VIDEOMATCH",
    description: "Caprichito con un pedazo de la historia del humor argentino",
    date: "2025-06-02",
    videoUrl: "https://www.youtube.com/watch?v=YzRTnGaN_s4&t=11860s",
  },
];

const EventsList = ({ events = DEFAULT_EVENTS }: EventsListProps) => {
  return (
    <section aria-label="Eventos especiales" className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Eventos Especiales</h2>
        <p className="text-gray-400 mt-2">Recopilación de shows, entrevistas y momentos destacados.</p>
      </header>

      <div className="flex flex-col divide-y divide-gray-800">
        {events.map((ev) => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </section>
  );
};

export default EventsList;
