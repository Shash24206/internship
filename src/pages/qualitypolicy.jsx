import React from "react";

const QualityPolicy = () => {
  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative">
        <img
          src="/assets/quality/banner.jpg"
          alt="Quality Policy Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">QUALITY POLICY</h1>
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
          <button className="bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition hover:scale-105 hover:from-red-700 hover:to-red-500">
            View Certificates
          </button>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;
