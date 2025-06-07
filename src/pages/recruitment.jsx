import React from "react";
import { useState, useEffect } from "react";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
const Recruitment = () => {
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
      <div className="flex flex-col">
      {/* Header Section */}
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          RECRUITMENT SERVICES
        </h2>
      </div>
    </section>
      </div>

      {/* Intro Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
            <strong>Human Resource Consultancy
            </strong>
            <br></br>
        Human capital is key for development of organization. ASHUTOSH MARINE PRIVATE LIMITED forte is ensuring availability of competent skills through its wide network offices and operations, coupled with its own job portal
          <br /><br />
          Ensuirng availability of qualified, well trained and experienced personnel is the speciality of ASHUTOSH MARINE PRIVATE LIMITED. Thanks to the vision of the Chairman that fully equipped Industrial Training institues have been established to train and impart skills that are always available for placement.
        </p>

        {/* Services & Images */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Services List */}
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold text-red-800 mb-4">Profits from the services of ASHUTOSH MARINE PRIVATE LIMITED</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>In-house team of Engineers and Business Experts with vast experience in India and abroad
              </li>
              <li>Advantage of own industrial training institutes
              </li>
              <li>Wide network of offices within India and abroad
              </li>
              <li>Multiple Data resources
              </li>
              <li>In-house training by experts
              </li>
              <li>Ability to provide multinational workforce
              </li>
              <li>Rich experience
              </li>
              <li>Own job portal, seamless availability of data
              </li>
              <li>In-house Documents' processing and Travel arrangements
              </li>
              <li>An ISO 9001-2008 certified organization
              </li>
              <li>Multi national forces
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Recruitment;