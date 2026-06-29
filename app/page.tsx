// app/page.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedCollections from "./components/FeaturedCollections";
import BestSellers from "./components/BestSellers";
import BrandStory from "./components/BrandStory";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#0B0B0B] text-white">
        <Hero />

        <Stats />

        <FeaturedCollections />

        <BestSellers />

        <BrandStory />

        <Newsletter />

        <Footer />
      </main>
    </>
  );
}