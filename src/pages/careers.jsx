import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Users,
  Ship,
  Flag,
  DollarSign,
  MapPin,
  Clock,
  FileText,
  Download,
} from "lucide-react";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
export default function CareerPage() {
  const [showTable, setShowTable] = useState(false);
  const [showForms, setShowForms] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center w-full bg-[#f7faff]">
      {/* Hero Section */}
     <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Careers
        </h2>
        <p className="text-lg md:text-2xl drop-shadow-md">
      Join our team and sail towards a brighter future
        </p>
      </div>
    </section>


      {/* Modern Scrolling Banner */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-2 overflow-hidden">
        <div className="relative h-8">
          <div className="absolute whitespace-nowrap animate-scroll text-white text-base font-medium flex items-center gap-2">
            🚀 Our own job portal{" "}
            <a
              href="http://www.jobs4hunt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 underline mx-1"
            >
              www.jobs4hunt.com
            </a>
            is the road to your success in your career... Register now for a better future ✨
          </div>
        </div>
      </div>

      {/* Dropdown 1: Job Table */}
      <div className="w-full max-w-6xl mt-8 px-4">
        <button
          className="flex items-center w-full bg-blue-100 hover:bg-blue-200 transition px-6 py-4 rounded-t-xl shadow font-bold text-xl text-blue-900 gap-3"
          onClick={() => setShowTable(!showTable)}
        >
          <FileText className="w-6 h-6 text-blue-700" />
          Job Openings
          <span className="ml-auto">{showTable ? <ChevronUp /> : <ChevronDown />}</span>
        </button>
        {showTable && (
          <div className="overflow-x-auto bg-white rounded-b-xl shadow border border-t-0">
            <table className="min-w-full table-auto">
              <thead className="bg-gradient-to-r from-gray-50 to-blue-50 text-gray-700 text-sm">
                <tr>
                  <th className="border px-4 py-2 font-semibold flex items-center gap-1">
                    <Users className="inline w-4 h-4" />RANK
                  </th>
                  <th className="border px-4 py-2 font-semibold"><Clock className="inline w-4 h-4" />EXPERIENCE</th>
                  <th className="border px-4 py-2 font-semibold">COMPETENCY</th>
                  <th className="border px-4 py-2 font-semibold flex items-center gap-1">
                    <Ship className="inline w-4 h-4" />VESSEL
                  </th>
                  <th className="border px-4 py-2 font-semibold flex items-center gap-1">
                    <Flag className="inline w-4 h-4" />FLAG
                  </th>
                  <th className="border px-4 py-2 font-semibold flex items-center gap-1">
                    <DollarSign className="inline w-4 h-4" />SALARY/MONTH (USD)
                  </th>
                  <th className="border px-4 py-2 font-semibold">CONTRACT PERIOD</th>
                  <th className="border px-4 py-2 font-semibold flex items-center gap-1">
                    <MapPin className="inline w-4 h-4" />JOINING
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-blue-50 transition">
                  <td className="border px-4 py-2">
                    <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs shadow">
                      Second Engineer
                    </span>
                  </td>
                  <td className="border px-4 py-2 font-medium text-gray-800">2 years</td>
                  <td className="border px-4 py-2 text-gray-700">
                    MEO Class II, fluent in English and well conversant with ISM, ISPS, MARPOL and HACCP
                  </td>
                  <td className="border px-4 py-2">
                    <span className="inline-block bg-gray-100 text-gray-700 font-medium px-2 py-1 rounded text-xs">Reefer</span>
                  </td>
                  <td className="border px-4 py-2 text-gray-800">Mauritius Flag</td>
                  <td className="border px-4 py-2 font-semibold text-green-600">As per last drawn/Negotiable</td>
                  <td className="border px-4 py-2">
                    <span className="inline-block bg-gray-100 text-gray-700 font-semibold px-2 py-1 rounded text-xs">6/+1</span>
                  </td>
                  <td className="border px-4 py-2">
                    <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded-full text-xs">ASAP</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Dropdown 2: Forms */}
      <div className="w-full max-w-6xl mt-8 px-4">
        <button
          className="flex items-center w-full bg-green-100 hover:bg-green-200 transition px-6 py-4 rounded-t-xl shadow font-bold text-xl text-green-900 gap-3"
          onClick={() => setShowForms(!showForms)}
        >
          <FileText className="w-6 h-6 text-green-700" />
          Apply Now
          <span className="ml-auto">{showForms ? <ChevronUp /> : <ChevronDown />}</span>
        </button>
        {showForms && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-b-xl shadow border border-t-0 p-6">
            {/* Seagoing Vacancy */}
            <div className="flex flex-col bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 shadow">
              <h2 className="text-lg font-bold text-blue-800 flex items-center gap-2 mb-4">
                <Ship className="w-5 h-5 text-blue-600" /> Seagoing Vacancy
              </h2>
              <form className="flex flex-col gap-4">
                <select className="w-full p-2 border rounded">
                  <option>Select Position</option>
                  <option value="Master/Captain">Master/Captain</option>
                  <option value="Chief Office">Chief Officer</option>
                  <option value="2nd Officer">2nd Officer</option>
                  <option value="3rd Officer">3rd Officer</option>
                  <option value="Chief Engineer">Chief Engineer</option>
                  <option value="2nd Engineer">2nd Engineer</option>
                  <option value="3rd Engineer">3rd Engineer</option>
                  <option value="4th Engineer">4th Engineer</option>
                  <option value="Junior Engineer">Junior Engineer</option>
                  <option value="Electrical Officer">Electrical Officer</option>
                  <option value="Reefer Engineer">Reefer Engineer</option>
                  <option value="Deck Cadet">Deck Cadet</option>
                  <option value="Engine Cadet">Engine Cadet</option>
                  <option value="Pump Man">Pump Man</option>
                  <option value="Fitter">Fitter</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Oiler">Oiler</option>
                  <option value="Bosun">Bosun</option>
                  <option value="A.B.">A.B.</option>
                  <option value="Wiper">Wiper</option>
                  <option value="O.S (Ordinary Seaman)">O.S (Ordinary Seaman)</option>
                </select>
                <select className="w-full p-2 border rounded">
                  <option>Select Nationality</option>
                  <option value="afghan">Afghan</option>
                  <option value="albanian">Albanian</option>
                  <option value="algerian">Algerian</option>
                  <option value="american">American</option>
                  <option value="andorran">Andorran</option>
                  <option value="angolan">Angolan</option>
                  <option value="antiguans">Antiguans</option>
                  <option value="argentinean">Argentinean</option>
                  <option value="armenian">Armenian</option>
                  <option value="australian">Australian</option>
                  <option value="austrian">Austrian</option>
                  <option value="azerbaijani">Azerbaijani</option>
                  <option value="bahamian">Bahamian</option>
                  <option value="bahraini">Bahraini</option>
                  <option value="bangladeshi">Bangladeshi</option>
                  <option value="barbadian">Barbadian</option>
                  <option value="barbudans">Barbudans</option>
                  <option value="batswana">Batswana</option>
                  <option value="belarusian">Belarusian</option>
                  <option value="belgian">Belgian</option>
                  <option value="belizean">Belizean</option>
                  <option value="beninese">Beninese</option>
                  <option value="bhutanese">Bhutanese</option>
                  <option value="bolivian">Bolivian</option>
                  <option value="bosnian">Bosnian</option>
                  <option value="brazilian">Brazilian</option>
                  <option value="british">British</option>
                  <option value="bruneian">Bruneian</option>
                  <option value="bulgarian">Bulgarian</option>
                  <option value="burkinabe">Burkinabe</option>
                  <option value="burmese">Burmese</option>
                  <option value="burundian">Burundian</option>
                  <option value="cambodian">Cambodian</option>
                  <option value="cameroonian">Cameroonian</option>
                  <option value="canadian">Canadian</option>
                  <option value="cape verdean">Cape Verdean</option>
                  <option value="central african">Central African</option>
                  <option value="chadian">Chadian</option>
                  <option value="chilean">Chilean</option>
                  <option value="chinese">Chinese</option>
                  <option value="colombian">Colombian</option>
                  <option value="comoran">Comoran</option>
                  <option value="congolese">Congolese</option>
                  <option value="costa rican">Costa Rican</option>
                  <option value="croatian">Croatian</option>
                  <option value="cuban">Cuban</option>
                  <option value="cypriot">Cypriot</option>
                  <option value="czech">Czech</option>
                  <option value="danish">Danish</option>
                  <option value="djibouti">Djibouti</option>
                  <option value="dominican">Dominican</option>
                  <option value="dutch">Dutch</option>
                  <option value="east timorese">East Timorese</option>
                  <option value="ecuadorean">Ecuadorean</option>
                  <option value="egyptian">Egyptian</option>
                  <option value="emirian">Emirian</option>
                  <option value="equatorial guinean">Equatorial Guinean</option>
                  <option value="eritrean">Eritrean</option>
                  <option value="estonian">Estonian</option>
                  <option value="ethiopian">Ethiopian</option>
                  <option value="fijian">Fijian</option>
                  <option value="filipino">Filipino</option>
                  <option value="finnish">Finnish</option>
                  <option value="french">French</option>
                  <option value="gabonese">Gabonese</option>
                  <option value="gambian">Gambian</option>
                  <option value="georgian">Georgian</option>
                  <option value="german">German</option>
                  <option value="ghanaian">Ghanaian</option>
                  <option value="greek">Greek</option>
                  <option value="grenadian">Grenadian</option>
                  <option value="guatemalan">Guatemalan</option>
                  <option value="guinea-bissauan">Guinea-Bissauan</option>
                  <option value="guinean">Guinean</option>
                  <option value="guyanese">Guyanese</option>
                  <option value="haitian">Haitian</option>
                  <option value="herzegovinian">Herzegovinian</option>
                  <option value="honduran">Honduran</option>
                  <option value="hungarian">Hungarian</option>
                  <option value="icelander">Icelander</option>
                  <option value="indian">Indian</option>
                  <option value="indonesian">Indonesian</option>
                  <option value="iranian">Iranian</option>
                  <option value="iraqi">Iraqi</option>
                  <option value="irish">Irish</option>
                  <option value="israeli">Israeli</option>
                  <option value="italian">Italian</option>
                  <option value="ivorian">Ivorian</option>
                  <option value="jamaican">Jamaican</option>
                  <option value="japanese">Japanese</option>
                  <option value="jordanian">Jordanian</option>
                  <option value="kazakhstani">Kazakhstani</option>
                  <option value="kenyan">Kenyan</option>
                  <option value="kittian and nevisian">Kittian and Nevisian</option>
                  <option value="kuwaiti">Kuwaiti</option>
                  <option value="kyrgyz">Kyrgyz</option>
                  <option value="laotian">Laotian</option>
                  <option value="latvian">Latvian</option>
                  <option value="lebanese">Lebanese</option>
                  <option value="liberian">Liberian</option>
                  <option value="libyan">Libyan</option>
                  <option value="liechtensteiner">Liechtensteiner</option>
                  <option value="lithuanian">Lithuanian</option>
                  <option value="luxembourger">Luxembourger</option>
                  <option value="macedonian">Macedonian</option>
                  <option value="malagasy">Malagasy</option>
                  <option value="malawian">Malawian</option>
                  <option value="malaysian">Malaysian</option>
                  <option value="maldivan">Maldivan</option>
                  <option value="malian">Malian</option>
                  <option value="maltese">Maltese</option>
                  <option value="marshallese">Marshallese</option>
                  <option value="mauritanian">Mauritanian</option>
                  <option value="mauritian">Mauritian</option>
                  <option value="mexican">Mexican</option>
                  <option value="micronesian">Micronesian</option>
                  <option value="moldovan">Moldovan</option>
                  <option value="monacan">Monacan</option>
                  <option value="mongolian">Mongolian</option>
                  <option value="moroccan">Moroccan</option>
                  <option value="mosotho">Mosotho</option>
                  <option value="motswana">Motswana</option>
                  <option value="mozambican">Mozambican</option>
                  <option value="namibian">Namibian</option>
                  <option value="nauruan">Nauruan</option>
                  <option value="nepalese">Nepalese</option>
                  <option value="new zealander">New Zealander</option>
                  <option value="ni-vanuatu">Ni-Vanuatu</option>
                  <option value="nicaraguan">Nicaraguan</option>
                  <option value="nigerien">Nigerien</option>
                  <option value="north korean">North Korean</option>
                  <option value="northern irish">Northern Irish</option>
                  <option value="norwegian">Norwegian</option>
                  <option value="omani">Omani</option>
                  <option value="pakistani">Pakistani</option>
                  <option value="palauan">Palauan</option>
                  <option value="panamanian">Panamanian</option>
                  <option value="papua new guinean">Papua New Guinean</option>
                  <option value="paraguayan">Paraguayan</option>
                  <option value="peruvian">Peruvian</option>
                  <option value="polish">Polish</option>
                  <option value="portuguese">Portuguese</option>
                  <option value="qatari">Qatari</option>
                  <option value="romanian">Romanian</option>
                  <option value="russian">Russian</option>
                  <option value="rwandan">Rwandan</option>
                  <option value="saint lucian">Saint Lucian</option>
                  <option value="salvadoran">Salvadoran</option>
                  <option value="samoan">Samoan</option>
                  <option value="san marinese">San Marinese</option>
                  <option value="sao tomean">Sao Tomean</option>
                  <option value="saudi">Saudi</option>
                  <option value="scottish">Scottish</option>
                  <option value="senegalese">Senegalese</option>
                  <option value="serbian">Serbian</option>
                  <option value="seychellois">Seychellois</option>
                  <option value="sierra leonean">Sierra Leonean</option>
                  <option value="singaporean">Singaporean</option>
                  <option value="slovakian">Slovakian</option>
                  <option value="slovenian">Slovenian</option>
                  <option value="solomon islander">Solomon Islander</option>
                  <option value="somali">Somali</option>
                  <option value="south african">South African</option>
                  <option value="south korean">South Korean</option>
                  <option value="spanish">Spanish</option>
                  <option value="sri lankan">Sri Lankan</option>
                  <option value="sudanese">Sudanese</option>
                  <option value="surinamer">Surinamer</option>
                  <option value="swazi">Swazi</option>
                  <option value="swedish">Swedish</option>
                  <option value="swiss">Swiss</option>
                  <option value="syrian">Syrian</option>
                  <option value="taiwanese">Taiwanese</option>
                  <option value="tajik">Tajik</option>
                  <option value="tanzanian">Tanzanian</option>
                  <option value="thai">Thai</option>
                  <option value="togolese">Togolese</option>
                  <option value="tongan">Tongan</option>
                  <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                  <option value="tunisian">Tunisian</option>
                  <option value="turkish">Turkish</option>
                  <option value="tuvaluan">Tuvaluan</option>
                  <option value="ugandan">Ugandan</option>
                  <option value="ukrainian">Ukrainian</option>
                  <option value="uruguayan">Uruguayan</option>
                  <option value="uzbekistani">Uzbekistani</option>
                  <option value="venezuelan">Venezuelan</option>
                  <option value="vietnamese">Vietnamese</option>
                  <option value="welsh">Welsh</option>
                  <option value="yemenite">Yemenite</option>
                  <option value="zambian">Zambian</option>
                  <option value="zimbabwean">Zimbabwean</option>
                </select>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "http://ashutoshmarine.com/file/CV-Ashutosh%20Marine%20Pvt.Ltd.docx",
                      "_blank"
                    )
                  }
                  className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 px-3 py-2 rounded shadow hover:bg-blue-50 transition"
                >
                  <Download className="w-4 h-4" />
                  Download Resume Format
                </button>
                <div className="flex items-center gap-2">
                  <input type="file" className="w-full border rounded px-2 py-1" />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>
              </form>
              <div className="flex-1 flex items-center justify-center mt-6">
                <img
                  src="/job3.jpg"
                  alt="Seagoing"
                  className="w-full h-60 object-cover rounded-lg border-2 border-blue-200"
                />
              </div>
            </div>
            {/* Shore Vacancy */}
            <div className="flex flex-col bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 shadow">
              <h2 className="text-lg font-bold text-green-800 flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-green-600" /> Shore Vacancy
              </h2>
              <form className="flex flex-col gap-4">
                <select className="w-full p-2 border rounded">
                  <option>Select Position</option>
                  <option value="Marine Superintendent">Marine Superintendent</option>
                  <option value="Technical Superintendent">Technical Superintendent</option>
                  <option value="Auditor">Auditor</option>
                  <option value="Safety and Quality Superintendent">Safety and Quality Superintendent</option>
                  <option value="Training Superintendent">Training Superintendent</option>
                  <option value="Marine Manager">Marine Manager</option>
                  <option value="Technical Manager">Technical Manager</option>
                  <option value="HR Manager">HR Manager</option>
                  <option value="Accounts Officer">Accounts Officer</option>
                  <option value="Marine Personal Officer">Marine Personal Officer</option>
                  <option value="Technical Assistant">Technical Assistant</option>
                  <option value="Personal Secretary">Personal Secretary</option>
                  <option value="Receptionist">Receptionist</option>
                  <option value="Office Boy">Office Boy</option>
                  <option value="Travel Coordinator">Travel Coordinator</option>
                  <option value="Driver">Driver</option>
                </select>
                <select className="w-full p-2 border rounded">
                  <option>Select Nationality</option>
                    <option value="afghan">Afghan</option>
                    <option value="albanian">Albanian</option>
                    <option value="algerian">Algerian</option>
                    <option value="american">American</option>
                    <option value="andorran">Andorran</option>
                    <option value="angolan">Angolan</option>
                    <option value="antiguans">Antiguans</option>
                    <option value="argentinean">Argentinean</option>
                    <option value="armenian">Armenian</option>
                    <option value="australian">Australian</option>
                    <option value="austrian">Austrian</option>
                    <option value="azerbaijani">Azerbaijani</option>
                    <option value="bahamian">Bahamian</option>
                    <option value="bahraini">Bahraini</option>
                    <option value="bangladeshi">Bangladeshi</option>
                    <option value="barbadian">Barbadian</option>
                    <option value="barbudans">Barbudans</option>
                    <option value="batswana">Batswana</option>
                    <option value="belarusian">Belarusian</option>
                    <option value="belgian">Belgian</option>
                    <option value="belizean">Belizean</option>
                    <option value="beninese">Beninese</option>
                    <option value="bhutanese">Bhutanese</option>
                    <option value="bolivian">Bolivian</option>
                    <option value="bosnian">Bosnian</option>
                    <option value="brazilian">Brazilian</option>
                    <option value="british">British</option>
                    <option value="bruneian">Bruneian</option>
                    <option value="bulgarian">Bulgarian</option>
                    <option value="burkinabe">Burkinabe</option>
                    <option value="burmese">Burmese</option>
                    <option value="burundian">Burundian</option>
                    <option value="cambodian">Cambodian</option>
                    <option value="cameroonian">Cameroonian</option>
                    <option value="canadian">Canadian</option>
                    <option value="cape verdean">Cape Verdean</option>
                    <option value="central african">Central African</option>
                    <option value="chadian">Chadian</option>
                    <option value="chilean">Chilean</option>
                    <option value="chinese">Chinese</option>
                    <option value="colombian">Colombian</option>
                    <option value="comoran">Comoran</option>
                    <option value="congolese">Congolese</option>
                    <option value="costa rican">Costa Rican</option>
                    <option value="croatian">Croatian</option>
                    <option value="cuban">Cuban</option>
                    <option value="cypriot">Cypriot</option>
                    <option value="czech">Czech</option>
                    <option value="danish">Danish</option>
                    <option value="djibouti">Djibouti</option>
                    <option value="dominican">Dominican</option>
                    <option value="dutch">Dutch</option>
                    <option value="east timorese">East Timorese</option>
                    <option value="ecuadorean">Ecuadorean</option>
                    <option value="egyptian">Egyptian</option>
                    <option value="emirian">Emirian</option>
                    <option value="equatorial guinean">Equatorial Guinean</option>
                    <option value="eritrean">Eritrean</option>
                    <option value="estonian">Estonian</option>
                    <option value="ethiopian">Ethiopian</option>
                    <option value="fijian">Fijian</option>
                    <option value="filipino">Filipino</option>
                    <option value="finnish">Finnish</option>
                    <option value="french">French</option>
                    <option value="gabonese">Gabonese</option>
                    <option value="gambian">Gambian</option>
                    <option value="georgian">Georgian</option>
                    <option value="german">German</option>
                    <option value="ghanaian">Ghanaian</option>
                    <option value="greek">Greek</option>
                    <option value="grenadian">Grenadian</option>
                    <option value="guatemalan">Guatemalan</option>
                    <option value="guinea-bissauan">Guinea-Bissauan</option>
                    <option value="guinean">Guinean</option>
                    <option value="guyanese">Guyanese</option>
                    <option value="haitian">Haitian</option>
                    <option value="herzegovinian">Herzegovinian</option>
                    <option value="honduran">Honduran</option>
                    <option value="hungarian">Hungarian</option>
                    <option value="icelander">Icelander</option>
                    <option value="indian">Indian</option>
                    <option value="indonesian">Indonesian</option>
                    <option value="iranian">Iranian</option>
                    <option value="iraqi">Iraqi</option>
                    <option value="irish">Irish</option>
                    <option value="israeli">Israeli</option>
                    <option value="italian">Italian</option>
                    <option value="ivorian">Ivorian</option>
                    <option value="jamaican">Jamaican</option>
                    <option value="japanese">Japanese</option>
                    <option value="jordanian">Jordanian</option>
                    <option value="kazakhstani">Kazakhstani</option>
                    <option value="kenyan">Kenyan</option>
                    <option value="kittian and nevisian">Kittian and Nevisian</option>
                    <option value="kuwaiti">Kuwaiti</option>
                    <option value="kyrgyz">Kyrgyz</option>
                    <option value="laotian">Laotian</option>
                    <option value="latvian">Latvian</option>
                    <option value="lebanese">Lebanese</option>
                    <option value="liberian">Liberian</option>
                    <option value="libyan">Libyan</option>
                    <option value="liechtensteiner">Liechtensteiner</option>
                    <option value="lithuanian">Lithuanian</option>
                    <option value="luxembourger">Luxembourger</option>
                    <option value="macedonian">Macedonian</option>
                    <option value="malagasy">Malagasy</option>
                    <option value="malawian">Malawian</option>
                    <option value="malaysian">Malaysian</option>
                    <option value="maldivan">Maldivan</option>
                    <option value="malian">Malian</option>
                    <option value="maltese">Maltese</option>
                    <option value="marshallese">Marshallese</option>
                    <option value="mauritanian">Mauritanian</option>
                    <option value="mauritian">Mauritian</option>
                    <option value="mexican">Mexican</option>
                    <option value="micronesian">Micronesian</option>
                    <option value="moldovan">Moldovan</option>
                    <option value="monacan">Monacan</option>
                    <option value="mongolian">Mongolian</option>
                    <option value="moroccan">Moroccan</option>
                    <option value="mosotho">Mosotho</option>
                    <option value="motswana">Motswana</option>
                    <option value="mozambican">Mozambican</option>
                    <option value="namibian">Namibian</option>
                    <option value="nauruan">Nauruan</option>
                    <option value="nepalese">Nepalese</option>
                    <option value="new zealander">New Zealander</option>
                    <option value="ni-vanuatu">Ni-Vanuatu</option>
                    <option value="nicaraguan">Nicaraguan</option>
                    <option value="nigerien">Nigerien</option>
                    <option value="north korean">North Korean</option>
                    <option value="northern irish">Northern Irish</option>
                    <option value="norwegian">Norwegian</option>
                    <option value="omani">Omani</option>
                    <option value="pakistani">Pakistani</option>
                    <option value="palauan">Palauan</option>
                    <option value="panamanian">Panamanian</option>
                    <option value="papua new guinean">Papua New Guinean</option>
                    <option value="paraguayan">Paraguayan</option>
                    <option value="peruvian">Peruvian</option>
                    <option value="polish">Polish</option>
                    <option value="portuguese">Portuguese</option>
                    <option value="qatari">Qatari</option>
                    <option value="romanian">Romanian</option>
                    <option value="russian">Russian</option>
                    <option value="rwandan">Rwandan</option>
                    <option value="saint lucian">Saint Lucian</option>
                    <option value="salvadoran">Salvadoran</option>
                    <option value="samoan">Samoan</option>
                    <option value="san marinese">San Marinese</option>
                    <option value="sao tomean">Sao Tomean</option>
                    <option value="saudi">Saudi</option>
                    <option value="scottish">Scottish</option>
                    <option value="senegalese">Senegalese</option>
                    <option value="serbian">Serbian</option>
                    <option value="seychellois">Seychellois</option>
                    <option value="sierra leonean">Sierra Leonean</option>
                    <option value="singaporean">Singaporean</option>
                    <option value="slovakian">Slovakian</option>
                    <option value="slovenian">Slovenian</option>
                    <option value="solomon islander">Solomon Islander</option>
                    <option value="somali">Somali</option>
                    <option value="south african">South African</option>
                    <option value="south korean">South Korean</option>
                    <option value="spanish">Spanish</option>
                    <option value="sri lankan">Sri Lankan</option>
                    <option value="sudanese">Sudanese</option>
                    <option value="surinamer">Surinamer</option>
                    <option value="swazi">Swazi</option>
                    <option value="swedish">Swedish</option>
                    <option value="swiss">Swiss</option>
                    <option value="syrian">Syrian</option>
                    <option value="taiwanese">Taiwanese</option>
                    <option value="tajik">Tajik</option>
                    <option value="tanzanian">Tanzanian</option>
                    <option value="thai">Thai</option>
                    <option value="togolese">Togolese</option>
                    <option value="tongan">Tongan</option>
                    <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                    <option value="tunisian">Tunisian</option>
                    <option value="turkish">Turkish</option>
                    <option value="tuvaluan">Tuvaluan</option>
                    <option value="ugandan">Ugandan</option>
                    <option value="ukrainian">Ukrainian</option>
                    <option value="uruguayan">Uruguayan</option>
                    <option value="uzbekistani">Uzbekistani</option>
                    <option value="venezuelan">Venezuelan</option>
                    <option value="vietnamese">Vietnamese</option>
                    <option value="welsh">Welsh</option>
                    <option value="yemenite">Yemenite</option>
                    <option value="zambian">Zambian</option>
                    <option value="zimbabwean">Zimbabwean</option>
                </select>
                <div className="flex items-center gap-2">
                  <input type="file" className="w-full border rounded px-2 py-1" />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition"
                >
                  Submit Application
                </button>
              </form>
              <div className="flex-1 flex items-center justify-center mt-6">
                <img
                  src="/04.jpg"
                  alt="Shore"
                  className="w-full h-60 object-cover rounded-lg border-2 border-green-200"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scrolling banner animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 22s linear infinite;
        }
      `}</style>
      <br /><br /><br />
    </div>
  );
}