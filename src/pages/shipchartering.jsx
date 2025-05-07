import React from "react";

const Shipchartering = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div
        className="w-full relative h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/crew-management-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex justify-center items-end pb-6">
          <h1 className="text-white text-4xl md:text-3xl font-bold">SHIP CHARTERING / OWNERSHIP</h1>
        </div>
      </div>

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
    src="/crew-management-1.jpg"
    alt="Crew Image 1"
    className="w-full h-[200px] object-cover"
  />
  <img
    src="/crew-management-2.jpg"
    alt="Crew Image 2"
    className="w-full h-[200px] object-cover"
  />
</div>
        </div>
      </div>
    </div>
  );
};

export default Shipchartering;