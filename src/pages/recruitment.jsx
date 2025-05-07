import React from "react";

const Recruitment = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div
        className="w-full relative h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('/crew-management-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 flex justify-center items-end pb-6">
          <h1 className="text-white text-4xl md:text-3xl font-bold">Recruitment Services</h1>
        </div>
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