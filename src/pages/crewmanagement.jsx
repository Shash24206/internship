import React from "react";

const CrewManagement = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div
        className="w-full relative h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/crew-management-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex justify-center items-end pb-6">
          <h1 className="text-white text-4xl md:text-3xl font-bold">Crew Management</h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
          ASHUTOSH MARINE recognizes the vessel performance and management of risk depend upon the effective selection and retention of competent staff.
          Crew management covers a broad range of activities including the recruitment, selection, placement, training and management of officers and ratings employed on our managed vessels. Travel services and payroll management are also an integral part of a crew management activity.
          <br /><br />
          We select well-qualified personnel to work on a diverse range of vessels including all type of tankers, gas carriers, container carriers, Ro-Ro ships, dry cargo vessels, bulk carriers, AHT, supply vessels and specialized vessels. Our current database of marine specialists allows us to react quickly to any request from ship owner/manager.
        </p>

        {/* Services & Images */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Services List */}
          <div className="lg:w-1/2">
            <h2 className="text-xl font-semibold text-red-800 mb-4">Crew-Management services we offer:</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Recruiting specialists: crew-officers and ratings with required qualifications</li>
              <li>Recruiting cadets and graduates for shipboard training and future employment</li>
              <li>Verification of marine documents per STCW 95/2010 and ISM codes</li>
              <li>Organizing additional seafarer training if needed</li>
              <li>Processing documents required by ship flag state administrations</li>
              <li>Assisting with visa arrangements and crew list preparation</li>
              <li>Ticket booking with marine tariffs</li>
              <li>Planning and scheduling crew changes</li>
              <li>ITF/IBF coverage support</li>
              <li>Ensuring onboard/travel insurance</li>
              <li>Managing wage accounting and payments</li>
            </ul>
          </div>

          {/* Images Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            <img
              src="/crew-management-1.jpg"
              alt="Crew Image 1"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <img
              src="/crew-management-2.jpg"
              alt="Crew Image 2"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Final Paragraph */}
        <p className="mt-8 text-gray-800 text-lg">
          Working with high standard companies globally, we deal with different types of staff management contracts every day. Learning valuable practices from our partners and adding our own expertise, we offer true partnership based on professional approach, deep understanding of our clients’ businesses, and a commitment to their interests.
        </p>
      </div>
    </div>
  );
};

export default CrewManagement;