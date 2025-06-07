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
  "/technicalmanagement/1.jpg",
  "/technicalmanagement/2.jpg",
  "/technicalmanagement/3.jpg",
  "/technicalmanagement/4.jpg",
  "/technicalmanagement/5.jpg",
  "/technicalmanagement/6.jpg",
  "/technicalmanagement/7.jpg",
  "/technicalmanagement/8.jpg",
];

const TechnicalManagement = () => {
  const [heroIndex, setHeroIndex] = useState(0);
      useEffect(() => {
              const interval = setInterval(() => {
                setHeroIndex((prev) => (prev + 1) % heroImages.length);
              }, 3500); // Change image every 3.5 seconds
              return () => clearInterval(interval);
            }, []);
  return (
    <div className="w-full">
      {/* Header Section */}
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Technical Management
        </h2>
      </div>
    </section>
      {/* Content Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p>
          <strong>Technical Management</strong> of ships comprises all of the sectors that maximize the efficiency and physical condition of a vessel throughout its working life. The services we provide to our clients are always in compliance with the requirements of industry regulators, recognized statutory bodies, the law of the proper Flag State and the places where the Vessel is required to trade.
        </p>

        <p>
          We provide these services via our team of highly qualified, experienced and dedicated staff which comprises masters, engineers, supercargoes and technical superintendents. As a rule, technical superintendents, who are responsible for monitoring the vessel’s condition and all aspects of their performance and operation, are each allocated to a group of two to three vessels.
        </p>

        <p>
          We also always ensure that a strict approach to safety and security is maintained and we also promote a high consideration for the protection of the environment.
        </p>

        <p>
          We constantly audit our procedures in order to ensure that the highest operating standards are maintained. These services include arranging and supervising of dry dockings and repairs, alterations and the maintenance of the Vessel to the standards agreed with the Owners, arranging the supply of necessary stores, spares, lubricating oil, other consumables used by vessels, vessel inspection, budget control and many other things without which cost-effective and profitable exploitation of the vessel is simply impossible.
        </p>
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

export default TechnicalManagement;
