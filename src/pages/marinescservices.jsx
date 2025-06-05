import React from "react";

const Marinesurveyandconsultancyservices = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div
        className="w-full relative h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/crew-management-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex justify-center items-end pb-6">
          <h1 className="text-white text-4xl md:text-3xl font-bold">MARINE SURVEY AND CONSULTANCY SERVICES
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
        ASHUTOSH MARINE Survey Service Division is involved in a wide variety of projects on various type of vessel including deep sea and short sea vessels- tankers, super yachts, bulk carriers, LNG carriers, refrigerated cargo ships, tugs and offshore vessels.
        <br/><br/>
        Our highly qualified surveyors have vast experience in the field of ship management in shipping companies and worked as seagoing vessel-s command staff. Our surveyors have made their way as crew members from seaman to master, from motorman to chief engineer, from electrician to chief electric engineer on board of the vessels of reputed shipping companies of world.
        <br/><br/>
        We understand the need for a fast and flexible service and therefore provide worldwide rapid response programmed-delivering consistent, professional and efficient surveys on all categories of marine survey.
        </p>
      </div>
      {/* Consultancy Section */}
<div className="bg-gradient-to-r from-red-100 via-white to-blue-100 p-6 md:p-10">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* Left - Text Content */}
    <div className="text-gray-800 text-lg leading-relaxed">
      <p className="mb-4">
        ASHUTOSH MARINE consultancy division team offer services to legal firms, P&I Clubs, finance houses and banks, oil majors, vessel owners and managers, regulatory bodies and other organizations that require experienced, knowledgeable and reliable professional expertise delivered with integrity and speed. Our team of over 150 technical personnel offers a breadth of expertise unrivalled in either its content, its proximity to local markets or in its geographical scope.
      </p>
      <p className="mb-4">
        We work closely with P&I, FD&D teams to provide technical support and opinion in the event of a dispute. Our consultants are genuine leaders in their field and we place the right specialist with the client, first time.
      </p>
      <p>
        Our consultant-s knowledge of ship types encompasses; Oil tankers, LNG, LPG, refrigerated containers, bulk cargoes of all types and passenger vessels.
      </p>
    </div>

    {/* Right - Image */}
    <div>
      <img
        src="/marine-consultancy.jpg"
        alt="Marine Consultancy"
        className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default Marinesurveyandconsultancyservices;