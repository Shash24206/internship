import React from "react";
import { useState, useEffect } from "react";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
export default function Shipchandelling() {
  const [heroIndex, setHeroIndex] = useState(0);
          useEffect(() => {
                  const interval = setInterval(() => {
                    setHeroIndex((prev) => (prev + 1) % heroImages.length);
                  }, 3500); // Change image every 3.5 seconds
                  return () => clearInterval(interval);
                }, []);
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Ship Chandelling
        </h2>
      </div>
    </section>

      {/* Main Content Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p className="text-lg text-blue-900 font-medium leading-relaxed">
        ASHUTOSH MARINE Ship Chandelling Division is pursued with precision, considering every infinitesimal value. Through our trained personnel, our capacity to source and deliver materials locally and internationally to meet client-s requirement has been simplified, such that we tailor our services to fit into vessels of any size and dimensions.
        </p>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Left Column - Services */}
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-4">We are committed for:</h2>
            <ul className="list-disc pl-5 space-y-2 text-blue-900">
              <li>Supply of all kind of provision, bonded, deck and engine, Cabin electrical, medicine store etc.</li>
              <li>Supply of all kind of spare parts for Main Engine, Auxiliary Engine, Turbo Charger, Motors, Hydraulic items, Gyro Compass, Radar etc.</li>
              <li>Supplies of Fresh water</li>
              <li>Refilling of ships Bottles Oxygen, Acetylene, Freon R (22-12) CO2, Fire Extinguishers and Breathing Apparatus etc.</li>
              <li>Supply of all kind of packing materials Like Dunnage wood, Craft papers, plastic sheets, Tarpaulin, Hatch Cover tape etc.</li>
            </ul>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
  {/* Top row - two images */}
  <img
    src="/shipchandelling/1.png"
    alt="Crew 1"
    className="w-full h-40 object-cover rounded shadow-md border border-blue-500"
  />
  <img
    src="/shipchandelling/2.png"
    alt="Crew 2"
    className="w-full h-40 object-cover rounded shadow-md border border-red-500"
  />

  {/* Bottom row - one image spanning 2 columns */}
  <img
    src="/shipchandelling/3.png"
    alt="Crew 3"
    className="w-full h-40 object-cover rounded shadow-md border border-blue-500 col-span-2"
  />
</div>
        </div>
      </div>
    </div>
  );
}
