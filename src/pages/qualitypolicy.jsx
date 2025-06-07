import React from "react";
import { useState, useEffect } from "react";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
const QualityPolicy = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full">
      {/* Banner */}
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Quality Policy
        </h2>
      </div>
    </section>

      {/* Content */}
      <section className="bg-gradient-to-br from-red-50 to-white px-6 py-10 max-w-5xl mx-auto text-justify leading-relaxed text-gray-800">
        <p className="mb-6">
          <strong>ASHUTOSH MARINE</strong> is committed to serve the shipping industry with high
          quality of services in entire business verticals at very competitive/economical price. No
          compromise is made whatsoever as far as the quality/competency of its officers and crew
          concerned.
        </p>
        <p className="mb-6">
          <strong>ASHUTOSH MARINE</strong> is committed to improve quality of its services by
          creating awareness about the Quality Management System among its employees.
        </p>
        <p className="mb-6">
          <strong>ASHUTOSH MARINE</strong> management is also committed to review the quality policy
          for its continuous suitability. This quality policy is made known to all employees and
          approving bodies by displaying it at prominent locations in office premises. All employees
          are encouraged and motivated to implement this policy in their day-to-day work.
        </p>
        <p className="mb-6">
          <strong>ASHUTOSH MARINE</strong> is certified by UKAS for Compliance of ISO 9001:2008.
        </p>
        <p className="mb-8">
          <strong>ASHUTOSH MARINE</strong> is certified by IRQS for compliance of ISO 9001:2008 and
          MLC 2006 Reg. 1.4.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="https://ashutoshmarine.com/images/Certificate/ISO%209001%202015.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition hover:scale-105 hover:from-red-700 hover:to-red-500"
          >
            Certificates
          </a>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;
