import React from "react";
import { useState, useEffect } from "react";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
export default function CrewManning() {
  const [heroIndex, setHeroIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setHeroIndex((prev) => (prev + 1) % heroImages.length);
      }, 3500); // Change image every 3.5 seconds
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
     <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Crew Manning
        </h2>
      </div>
    </section>

      {/* Main Content Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p className="text-lg text-blue-900 font-medium leading-relaxed">
          ASHUTOSH MARINE provides you a multitude of services, whether you are a seafarer looking for a new employment or crew manager seeking to fulfill the employment opportunities, we can assist you in all aspect of your needs. After all we are one stop, multi-service Crew Recruitment Company.
          <br /><br />
          Our Crew Manning Division is spearheaded by Master Mariners and Chief Engineers having over 30 years of sailing experience on different Types of vessels, ranging from Oil tankers, Chemical tankers, to Capsize, Afframax and Panamax. With vast and combined experience of our senior executives who are spearheading our Manning Division, we are able to offer qualified and experienced Officers and Crew, holding valid certificates required as per IMO Regulation/ISM Code /STCW 95/2010 and available for deployment at short notice.
          <br /><br />
          Apart from oil/chemical tanker vessels, we are also manning other types of vessels such as Bulk Carriers, General Cargo ,Containers, RORO & PCC/PCTC and various types of Offshore vessels such as AHTs (DP I & II), Supply Vessel, Standby/rescue/support and cable laying vessel, accommodation barge, research/survey vessel.
          <br /><br />
          We have a pool of well trained and experienced seafarers such as Master, Chief Officer, 2nd Officer, 3rd Officer, Deck Cadet, Chief Eng., 2nd Eng, 3rd Eng, Engine Cadet and assessed & certified crew such as Welders, Mechanics, Fitters, Electricians and other crew who have the experience on board oil tankers, bulk carriers, offshore fleet, Jack up drilling rigs. Invariably all the officers/crew and technicians do hold current and valid certificates, besides as and when required they are being sent for due familiarization courses as per need to internationally recognized and approved Marine Training Institutes.
        </p>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Left Column - Services */}
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-4">Crew-Manning Services We Offer:</h2>
            <ul className="list-disc pl-5 space-y-2 text-blue-900">
              <li>Officers and Ratings interviewed by our technical and personnel HR manager</li>
              <li>Checking of documentation and certificates</li>
              <li>Background verification and references checking</li>
              <li>Computerized checking of professional and languages skills</li>
              <li>In-house training of seafarers (identified either in accordance with our pre selection mode or by ship-owners)</li>
              <li>Selection of the best candidates based on vessel type, cargo, trade route, and past experience</li>
              <li>Flag state document application</li>
              <li>Travel (domestic) arrangements</li>
            </ul>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src="/crewmanning/1.jpg" alt="Crew 1" className="w-full h-40 object-cover rounded shadow-md border border-blue-500" />
            <img src="/crewmanning/2.jpg" alt="Crew 2" className="w-full h-40 object-cover rounded shadow-md border border-red-500" />
            <img src="/crewmanning/3.jpg" alt="Crew 3" className="w-full h-40 object-cover rounded shadow-md border border-blue-500" />
            <img src="/crewmanning/4.jpg" alt="Crew 4" className="w-full h-40 object-cover rounded shadow-md border border-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
