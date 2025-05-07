import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const images = [
  "/images/tech1.jpg",
  "/images/tech2.jpg",
  "/images/tech3.jpg",
  "/images/tech4.jpg",
  "/images/tech5.jpg",
  "/images/tech6.jpg",
  "/images/tech7.jpg",
  "/images/tech8.jpg",
];

const TechnicalManagement = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div
        className="w-full relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-header-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex justify-center items-end pb-6">
        <h1 className="text-white text-4xl md:text-3xl font-bold">Technical Management</h1>
        </div>
      </div>

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
