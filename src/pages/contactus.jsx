import React from "react";
import { useState, useEffect } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
const officeData = [
  {
    title: "INDIA CORPORATE OFFICE",
    address: [
      "ASHUTOSH MARINE PRIVATE LIMITED",
      "0091-22-2288 5426 , 2288 5427",
      "0091-22-2283749",
      "manning@ashutoshmarine.com",
      "ashu@ashutoshmarine.com",
      "111, Sai Chamber, 4th Floor, Opp. Railway Station, Santacruz (E), Mumbai - 400 055, India",
      "Plot No .39/4022, Opp. Sri Krishna Lodge, Ravipuram Road, Kochi - 682 016, Kerala"
    ]
  }
];

const arabianOffices = [
  {
    country: "Qatar",
    phones: ["+974 44513940 / 44513941", "+974 44513942"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address: "PO Box No. 30817, Doha, Qatar."
  },
  {
    country: "Kuwait",
    phones: ["+965 25456786", "+965 25456785"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address: "P.O. Box 47958, Al Fahaheel : 64030, Kuwait."
  },
  {
    country: "United Arab Emirates (Sharjah)",
    phones: ["+971 6 5260711 / 5260712", "+971 6 5260713"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address: "PO Box 42205, Hamriyah Free Zone, Sharjah, UAE."
  },
  {
    country: "United Arab Emirates (Dubai)",
    phones: ["+971 4 3362664 / 3362667", "+971 4 3360340"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address: "PO Box 48759, Dubai, UAE."
  },
  {
    country: "United Arab Emirates (Dubai 2)",
    phones: ["+971 4 3362664 / 3362667", "+971 4 3360340"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address: "PO Box 117274, Dubai UAE."
  },
  {
    country: "Saudi Arabia (Jeddah)",
    phones: ["+966 12 6174989", "+966 12 6712332"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address:
      "Al-Makarounah RD-64, Wadi Wejj Street, Behind ANB Bank, Azizyah Area, Jeddah - 21382, KSA."
  },
  {
    country: "Saudi Arabia (Dammam)",
    phones: ["+966 13 8283601"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address: "PO Box 4799, Dammam 31412,KSA."
  },
  {
    country: "Saudi Arabia (Riyadh)",
    phones: ["+966 11 4092697/8", "+966 11 4092699"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address:
      "Office No. 40713, Khaldia Tower, 7th Floor, AL-Khazzan, St-Imam-Faisal-Bin-Turki, Riyadh, K.S.A."
  }
];

const asiaOffices = [
  {
    country: "Nepal",
    phones: ["+977 1 4650470 / 4650471", "+977 1 4650473"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address:
      "P.O BOx: 25911,Narayangopal Chowk, Maharajganj Chakrapath, Salaghari, Kathmandu, Nepal."
  },
  {
    country: "Nepal (2)",
    phones: ["+977 1 4650407 / 4018208 / 4018209", "+977 1 4650410"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address:
      "P.O BOx: 25911,Narayangopal Chowk, Maharajganj Chakrapath, Salaghari, Kathmandu, Nepal."
  },
  {
    country: "Bangladesh",
    phones: ["008802-9897946/9897841"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address:
      "House No. 62, Road No. 3, Block B, Niketan, Gulshan -1, Dhaka - 1212, Bangladesh."
  },
  {
    country: "Philippines",
    phones: ["+632 4774406", "+63 2 5352906"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address:
      "Bulalakaw Street, Plainview subdivison, Mandaluyong City, Metro Manila,Philippines"
  },
  {
    country: "Sri Lanka",
    phones: ["+94 112470813/814/815", "+94 115377978", "+94 115377976"],
    emails: ["ashutosh@ashutoshmarine.com"],
    address:
      "415 1/1, 1/2 Prince of Wales Avenue, Colombo - 14, Sri Lanka."
  }
];

const OfficeBox = ({ country, phones, emails, address }) => (
  <div className="bg-white bg-opacity-90 rounded-xl p-4 shadow-lg backdrop-blur-md border border-red-200">
    <h3 className="text-lg font-semibold text-blue-900 mb-2">{country}</h3>
    <div className="space-y-1 text-sm text-gray-800">
      {phones.map((phone, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <FaPhone className="text-red-500" />
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
        </div>
      ))}
      {emails.map((email, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <FaEnvelope className="text-red-500" />
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </div>
      ))}
      <p>{address}</p>
    </div>
  </div>
);

const Contact = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full bg-gradient-to-br from-red-50 to-white">
      {/* Banner */}
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Contact Us
        </h2>
      </div>
    </section>

      {/* India Office */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">INDIA CORPORATE OFFICE</h2>
        <div className="bg-white rounded-xl p-6 shadow-md space-y-3 text-gray-800 text-sm">
          {officeData[0].address.map((line, idx) => {
            if (line.includes("@")) {
              return (
                <div key={idx} className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500" />
                  <a href={`mailto:${line}`} className="hover:underline">
                    {line}
                  </a>
                </div>
              );
            } else if (/\\d/.test(line)) {
              return (
                <div key={idx} className="flex items-center gap-2">
                  <FaPhone className="text-red-500" />
                  <a href={`tel:${line}`} className="hover:underline">
                    {line}
                  </a>
                </div>
              );
            } else {
              return <p key={idx}>{line}</p>;
            }
          })}
        </div>
      </section>

      {/* Arabian Gulf Offices */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">OUR PRESENCE IN ARABIAN GULF COUNTRIES</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {arabianOffices.map((office, idx) => (
            <OfficeBox key={idx} {...office} />
          ))}
        </div>
      </section>

      {/* Asia-Pacific Offices */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">OUR PRESENCE IN ASIA-PACIFIC COUNTRIES</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {asiaOffices.map((office, idx) => (
            <OfficeBox key={idx} {...office} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;