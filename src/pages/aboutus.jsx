import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
const carouselImages = [
  "/assets/about/slide1.jpg",
  "/assets/about/slide2.jpg",
  "/assets/about/slide3.jpg",
  "/assets/about/slide4.jpg",
  "/assets/about/slide5.jpg",
];

const serviceCards = [
  {
    title: "Crew Manning",
    desc: "ASHUTOSH MARINE can provide you a multitude of services, whether you are a seafarer looking for more opportunities or a client looking for crew...",
  },
  {
    title: "Crew Management",
    desc: "ASHUTOSH MARINE recognizes the vessel performance and management of risk depend upon the effective selection and deployment of crew...",
  },
  {
    title: "Technical Management",
    desc: "Technical Management of ships comprises all of the sectors that maximize the efficiency and physical condition of the vessel...",
  },
  {
    title: "Recruitment Services",
    desc: "Human capital is key for development. ASHUTOSH MARINE ensures availability of skilled crew for the maritime industry...",
  },
  {
    title: "Ship Chartering/Ownership",
    desc: "Our division has vast experience in Vessel Chartering and ship ownership services for various international clients...",
  },
  {
    title: "Ship Repair/Maintenance",
    desc: "ASHUTOSH MARINE is your global service partner for ship repair and marine engineering solutions...",
  },
  {
    title: "Ship Chandelling",
    desc: "Chandelling Division is pursued with precision, taking every infinitesimal value into account and ensuring smooth provisioning...",
  },
  {
    title: "Riding Squad",
    desc: "Supplying highly skilled workers on request for onboard repairs and shipyard operations across regions...",
  },
  {
    title: "Hydroblasting",
    desc: "Owns ultrahigh pressure hydroblasting machines of international repute largely used in ship cleaning and maintenance...",
  },
  {
    title: "Marine Survey & Consultancy",
    desc: "Involved in a wide variety of surveys and consultancy projects on tankers, cargo ships, and offshore vessels...",
  },
];

const AboutUs = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full bg-gradient-to-b from-white via-red-50 to-white">
      {/* Banner */}
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          About Us
        </h2>
      </div>
    </section>

      {/* Description */}
      <section className="px-6 py-10 max-w-5xl mx-auto text-justify leading-relaxed">
        <p className="mb-6">
          ASHUTOSH MARINE was established in 1984 as a private Ship Repair Company in Mumbai by Engr. Ashutosh Chandra Mohanty with over 8 years of Mechanical Engineering experience.
        </p>
        <p className="mb-6">
          Progress is attributed to a highly dedicated team of Master Mariners, Chief Engineers, and Management Staff, ensuring smooth operations in planning, organizing, staffing, and training.
        </p>
        <p className="mb-6">
          We specialize in Crew Management, Ship Management, Repairs, Port Management, Vessel Chartering, and Ship Chandelling, delivering high customer satisfaction.
        </p>
        <p>
          With offices across India and abroad — including the Philippines, Korea, UAE (Hamriyah Free Zone), Dubai, Kuwait, Qatar, and Saudi Arabia — ASHUTOSH MARINE ensures global service.
        </p>
      </section>


      {/* Meet Our Team Carousel */}
      <section className="bg-blue-50 py-10">
        <h2 className="text-center text-3xl font-bold text-red-700 mb-6">MEET OUR TEAM</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2000 }}
          loop
          modules={[Autoplay]}
        >
          {carouselImages.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`Slide ${i + 1}`} className="w-full h-64 object-cover rounded-xl shadow-md" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* What We Do */}
      <section className="py-12 bg-gradient-to-br from-white via-red-50 to-white">
        <h2 className="text-3xl text-center font-bold text-red-700 mb-10">WHAT WE DO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {serviceCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border hover:shadow-2xl transform transition-all hover:scale-105 group"
            >
              <h3 className="text-xl font-semibold mb-2 text-red-700">{card.title}</h3>
              <p className="text-gray-600 group-hover:opacity-100 opacity-70 transition-opacity duration-300">
                {card.desc}
              </p>
              <button className="mt-4 text-red-600 border border-red-600 px-4 py-1 rounded hover:bg-red-600 hover:text-white transition">
                More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
