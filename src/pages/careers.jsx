import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CareerPage() {
  const [showTable, setShowTable] = useState(false);
  const [showForms, setShowForms] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Header Image with Title */}
      <div className="w-full relative h-[350px] bg-cover bg-center" style={{ backgroundImage: "url('/your-image-path.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Careers</h1>
        </div>
      </div>

      <marquee
  className="bg-blue-100 text-blue-900 py-2 w-full font-medium text-lg"
  behavior="scroll"
  direction="left"
  onMouseOver={(e) => (e.target.stop ? e.target.stop() : null)}
  onMouseOut={(e) => (e.target.start ? e.target.start() : null)}
>
  Our own job portal{" "}
  <a href="http://www.jobs4hunt.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
    www.jobs4hunt.com
  </a>{" "}
  is the road to your success in your career... Register now for a better future
</marquee>


      {/* Dropdown 1: Job Table */}
      <div className="w-full max-w-6xl mt-4 px-4">
        <button
          className="flex justify-between items-center w-full bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-semibold"
          onClick={() => setShowTable(!showTable)}
        >
          Job Opening
          {showTable ? <ChevronUp /> : <ChevronDown />}
        </button>

        {showTable && (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="border px-4 py-2">RANK</th>
                  <th className="border px-4 py-2">EXPERIENCE</th>
                  <th className="border px-4 py-2">COMPETENCY</th>
                  <th className="border px-4 py-2">VESSEL</th>
                  <th className="border px-4 py-2">FLAG</th>
                  <th className="border px-4 py-2">SALARY/MONTH (USD)</th>
                  <th className="border px-4 py-2">CONTRACT PERIOD</th>
                  <th className="border px-4 py-2">JOINING</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border px-4 py-2">Second Engineer</td>
                  <td className="border px-4 py-2">2 years</td>
                  <td className="border px-4 py-2">MEO Class II, fluent in English and well conversant with ISM, ISPS, MARPOL and HACCP</td>
                  <td className="border px-4 py-2">Reefer</td>
                  <td className="border px-4 py-2">Mauritius Flag</td>
                  <td className="border px-4 py-2">As per last drawn/Negotiable</td>
                  <td className="border px-4 py-2">6/+1</td>
                  <td className="border px-4 py-2">ASAP</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Dropdown 2: Forms */}
      <div className="w-full max-w-6xl mt-6 px-4">
        <button
          className="flex justify-between items-center w-full bg-green-600 text-white px-4 py-2 rounded-md text-lg font-semibold"
          onClick={() => setShowForms(!showForms)}
        >
          Apply Now
          {showForms ? <ChevronUp /> : <ChevronDown />}
        </button>

        {showForms && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Seagoing Vacancy */}
            <div className="flex flex-col md:flex-row bg-gray-50 p-4 rounded-lg shadow">
              <form className="w-full md:w-1/2">
                <h2 className="text-xl font-bold mb-4">Seagoing Vacancy</h2>
                <select className="w-full mb-2 p-2 border rounded">
                  <option>Select Position</option>
                </select>
                <select className="w-full mb-2 p-2 border rounded">
                  <option>Select Nationality</option>
                </select>
                <button
  onClick={() =>
    window.open("http://ashutoshmarine.com/file/CV-Ashutosh%20Marine%20Pvt.Ltd.docx", "_blank")
  }
  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
>
  Download Resume Format
</button>

                <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
              </form>
              <div className="md:w-1/2 flex justify-center items-center">
                <img src="/seagoing-image.jpg" alt="Seagoing" className="w-full h-auto object-cover rounded" />
              </div>
            </div>

            {/* Shore Vacancy */}
            <div className="flex flex-col md:flex-row bg-gray-50 p-4 rounded-lg shadow">
              <form className="w-full md:w-1/2">
                <h2 className="text-xl font-bold mb-4">Our Shore Vacancy</h2>
                <select className="w-full mb-2 p-2 border rounded">
                  <option>Select Position</option>
                </select>
                <select className="w-full mb-2 p-2 border rounded">
                  <option>Select Nationality</option>
                </select>
                <input type="file" className="mb-2" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
              </form>
              <div className="md:w-1/2 flex justify-center items-center">
                <img src="/shore-image.jpg" alt="Shore" className="w-full h-auto object-cover rounded" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}