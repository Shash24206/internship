import React from "react";
import { useState, useEffect } from "react";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
const Shipchartering = () => {
    const [heroIndex, setHeroIndex] = useState(0);
    useEffect(() => {
            const interval = setInterval(() => {
              setHeroIndex((prev) => (prev + 1) % heroImages.length);
            }, 3500); // Change image every 3.5 seconds
            return () => clearInterval(interval);
          }, []);
  return (
    <div className="flex flex-col">
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Ship Chartering
        </h2>
      </div>
    </section>


      {/* Intro Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
        ASHUTOSH MARINE division is sound and having vast industry experience in providing Vessel Chartering service. This service is extremely demanded for transporting of various cargos including bulk, dry and liquid to various destinations across the globe. Under the guidance of our adroit professionals, the service is used for transportation of goods after making legal procedures and paper work.
        </p>

        {/* Services & Images */}
        <div className="flex flex-col lg:flex-row gap-10">
          

         {/* Images Grid */}
<div className="w-full grid grid-cols-2 gap-0">
  <img
    src="/shipchartering/1.jpg"
    alt="Crew Image 1"
    className="w-[550px] h-[200px] object-cover"
  />
  <img
    src="/shipchartering/2.jpg"
    alt="Crew Image 2"
    className="w-[550px] h-[200px] object-cover"
  />
</div>
        </div>
      </div>
    </div>
  );
};

export default Shipchartering;