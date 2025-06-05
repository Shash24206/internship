import React from "react";

export default function Shipchandelling() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div
        className="w-full relative h-72 bg-cover bg-center bg-gray-100"
        style={{ backgroundImage: "url('/your-image-path.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex justify-center items-end pb-6">
          <h1 className="text-white text-4xl md:text-3xl font-bold">SHIP CHANDELLING</h1>
        </div>
      </div>

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
    src="/crew1.jpg"
    alt="Crew 1"
    className="w-full h-40 object-cover rounded shadow-md border border-blue-500"
  />
  <img
    src="/crew2.jpg"
    alt="Crew 2"
    className="w-full h-40 object-cover rounded shadow-md border border-red-500"
  />

  {/* Bottom row - one image spanning 2 columns */}
  <img
    src="/crew3.jpg"
    alt="Crew 3"
    className="w-full h-40 object-cover rounded shadow-md border border-blue-500 col-span-2"
  />
</div>
        </div>
      </div>
    </div>
  );
}
