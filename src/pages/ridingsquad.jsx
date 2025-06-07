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
  "/ridingsquad/1.jpg", "/ridingsquad/2.jpg", "/ridingsquad/3.jpg", "/ridingsquad/4.jpg",
  "/ridingsquad/5.jpg", "/ridingsquad/6.jpg"
];

const Ridingsquad = () => {
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
          Riding Squad
        </h2>
      </div>
    </section>

      {/* Intro Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
          ASHUTOSH MARINE PVT. LTD is committed to supply highly skilled Riding Squad Team on request for repair onboard vessel and in shipyard worldwide.
          <br /><br />
          Our achievement is a cost effective and efficient ship management service of international standard and we provide a diversity of skilled labor at competitive rates around the world primarily from China, Guyana, India, Bulgaria, Poland, the Philippines, Romania, Russia, Singapore and Ukraine.
          <br /><br />
          Our Tradesmen are skilled in steel fabrication, pipeline and overhauling of main engine, aux engine, pumps, diesel generators, hydraulic systems, boiler, condensers, cargo and blast;
        </p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
            <li>Coded fitter welders and platters</li>
            <li>Fabricators and pipe fitters</li>
            <li>Mechanical fitters and turners</li>
            <li>Sheet metal workers and insulators</li>
            <li>Blasters; grit and Ultra-High-Pressure</li>
            <li>Riggers and scaffolders</li>
            <li>Tank and general cleaners</li>
          </ul>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
            <li>Painters, airless spray and brush</li>
            <li>Carpenters</li>
            <li>Cabinet makers and craftsmen</li>
            <li>Furnishers and upholsterers</li>
            <li>Tile fitters and carpet fitters</li>
            <li>Plumbers</li>
          </ul>
        </div>

        {/* Carousel Section */}
        <div className="max-w-6xl mx-auto px-4 mb-10">
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

                {/* Work Details List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 mb-10">
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
            <li>Automation</li>
            <li>T/C overhaul</li>
            <li>Engine overhauls</li>
            <li>Crankshaft Renewal</li>
            <li>Anode renewal in tanks.</li>
            <li>Ballast tanks upgrading.</li>
            <li>Boiler re-tubing and repairs</li>
            <li>Renewal of all types of pipes.</li>
            <li>Engine room cleaning and painting.</li>
            <li>Tank heating coils, manufacturing and installing.</li>
        </ul>
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
            <li>Ultrasonic Thickness measurements all class approved</li>
            <li>Simple mucking out of double bottom tanks – cargo tanks.</li>
            <li>Steel work preparation for coating – gel coats or epoxy paints.</li>
            <li>Renewal of steel in ballast & cargo tanks, holds, decks and engine room.</li>
            <li>De-scaling of steel – corrosion control – grit blasting to required SA, mechanical de–scale, hand scraping.</li>
            <li>Range of coating systems recommended for surface preparation and environment to provide optimum life protection in accordance with owners or manufacturers requirements. Coats by brush or airless spray.</li>
        </ul>
        </div>


        {/* Final Paragraph */}
        <p className="text-gray-800 text-lg leading-relaxed">
          We make all the arrangements, are very flexible and can supply at short notice. All our teams are carefully vetted, are hard working and include an English speaking foreman. Our Riding Squad is equipped with STCW 2010, CDC, valid passport and trade certificates with immense experience.
        </p>
      </div>
    </div>
  );
};

export default Ridingsquad;
