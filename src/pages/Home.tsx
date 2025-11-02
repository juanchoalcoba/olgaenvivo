import Hero from "../components/Hero";
import About from "../components/About";
import GalleryAboutReverse from "../components/Ceo";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <GalleryAboutReverse />
        <About />
      </main>
    </>
  );
}
