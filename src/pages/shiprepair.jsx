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
];

const Shiprepair = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div
        className="w-full relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-header-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex justify-center items-end pb-6">
        <h1 className="text-white text-4xl md:text-3xl font-bold">SHIP REPAIRS/MAINTENANCE</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p>
          <strong>SHIP REPAIRS/MAINTENANC</strong> ASHUTOSH MARINE is your global service partner for ship repair, our marine engineering division provides reputable ship repairs services to the marine industry across the board from Container/Cargo vessels to Passenger liners, Offshore Construction vessels, Survey vessels, PSV's, OSV's, AHT, Rigs, FPSO's and Navy vessels.
        </p>

        <p>
        ASHUTOSH MARINE has well equipped Ship Repair facilities at Vishakhapatnam, admeasuring over 2500 sq.mtrs, with well stocked stores carrying large inventories of steel plates, pipes, fasteners, chain pully blocks, electrodes, welding equipment, rectifiers and other consumables that are essential to attend to any kind of emergency repair work on board vessel. Our workshop is manned 24 x 7 by experienced executives in order that instant response is made to calls/queries received from our principals.
        </p>

        <p>
        ASHUTOSH MARINE is executing ship repairing works on board vessels and offshore fleet Dammam-KSA (partnered as service providers to ZAMIL OFFSHORE-KSA), UASC-Dubai (providing riding squad and attending to repairs in Mumbai-India), registered and approved contractors of Indian Navy, Coast Guard, Garden Reach Shipbuilders, and Cochin Ship Yard. We have our own workshop facilities at Hamriyah Freezone in Sharjah
        </p>

        <p>
        ASHUTOSH MARINE has fully qualified travel repair parties capable of being deployed to any location in the world to undertake ship repair works whilst the vessel is underway.
        </p>
        <p>
        ASHUTOSH MARINE has well trained and experienced Marine Mechanics with versatile and vast experience in different types / brands of Main Engine, Auxiliary Engines, Pumps, and Motors.
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

export default Shiprepair;
