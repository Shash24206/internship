import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
const images = [
    "/hydroblasting/1.jpg",
    "/hydroblasting/2.jpg",
    "/hydroblasting/3.jpg",
    "/hydroblasting/4.jpg",
    "/hydroblasting/5.jpg",
    "/hydroblasting/6.jpg",
    "/hydroblasting/7.jpg",
    "/hydroblasting/8.jpg",
    "/hydroblasting/9.jpg",
  ];

const Hydroblasting = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
          const interval = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length);
          }, 3500); // Change image every 3.5 seconds
          return () => clearInterval(interval);
        }, []);
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Hydroblasting
        </h2>
      </div>
    </section>

      {/* Intro Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
        ASHUTOSH MARINE Operates High pressure jets and Ultra high pressure blasting uses water that is pressurized between 20.000 to 40,000 psi to remove coatings and debris from substrates.

          <br /><br />
          ASHUTOSH MARINE owns a pack of ultrahigh pressure hydroblasting machines of international repute largely used in marine, offshore and petrochemical industries.
          <br></br>
          ASHUTOSH MARINE operators are well trained and experience in safety and operation and maintenance of these units. All operators and assistants are fully equipped with safety harness as specified by OEM.
        </p>

        {/* Services & Images */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Services List */}
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold text-red-800 mb-4">ASHUTOSH MARINE is the registered member of Naval Dockyard Mumbai and Visakhapatnam, under that has performed following works as below:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Ultra High Pressure Hydroblasting along with application of Primer Coat to WJ-2(M) & (L) standard
              </li>
              <li>Ultra High Pressure Hydro Jet blasting to WJ-2(M) & (L) standard for chain cable below 20mm dia, 21mm to 35mm dia and above 35mm dia for the purpose of survey
              </li>
              <li>Vacuum Blasting of mill scale plates
              </li>
              <li>Power tooling of ST-3 of hot work areas/paint affected areas and primer touch up (LP air to be provided by firm)
              </li>
              <li>Salt water cleaning, fresh water washing and degreasing
              </li>
              <li>Removal of metal scrap and debris
              </li>
              <li>Grit Blasting SA1, SA2, SA2.5 and SA3 Std
              </li>
              <li>Anchor Chain Blasting
              </li>          
            </ul>
          </div>

        </div>
      </div>
      {/* Carousel Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="rounded-xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Technical ${index + 1}`}
                  className="w-full h-56 object-cover rounded-xl shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hydroblasting;