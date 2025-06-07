import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Menu, X } from "lucide-react";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
// --- Your original content ---
const aboutContent = [
  {
    icon: "ℹ",
    title: "WHO WE ARE",
    content: (
      <>
        Ashutosh Marine is a leading provider of marine engineering solutions and services with over 20 years of experience in the maritime industry.<br /><br />
        We pride ourselves on delivering high-quality products and exceptional service to clients worldwide. Our team of experienced professionals is dedicated to providing innovative solutions that meet the unique needs of each client.
      </>
    )
  },
  {
    icon: "🔗",
    title: "OUR VISION",
    content: (
      <>
        To be the global leader in marine engineering solutions, recognized for our innovation, quality, and commitment to excellence.<br /><br />
        We aim to set new standards in the maritime industry through continuous improvement and technological advancement.
      </>
    )
  },
  {
    icon: "✔",
    title: "OUR MISSION",
    content: (
      <>
        To provide innovative and sustainable marine engineering solutions that exceed client expectations.<br /><br />
        We are committed to delivering exceptional service, maintaining the highest standards of quality, and building long-term relationships with our clients based on trust, reliability, and mutual success.
      </>
    )
  },
  {
    icon: "✉",
    title: "CORE VALUES",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and ethical standards.</li>
        <li><strong>Excellence:</strong> We strive for excellence in everything we do.</li>
        <li><strong>Innovation:</strong> We embrace new technologies and innovative solutions.</li>
        <li><strong>Customer Focus:</strong> Our clients' needs are at the center of our operations.</li>
      </ul>
    )
  }
];

const services = [
  { title: "Crew Manning", description: "Professional crew placement services for all vessel types.", to: "/crewmanning", icon: "🧑‍✈" },
  { title: "Crew Management", description: "Complete crew management solutions for vessel operators.", to: "/crewmanagement", icon: "🛳" },
  { title: "Technical Management", description: "Comprehensive technical management for vessel operations.", to: "/technicalmanagment", icon: "⚙" },
  { title: "Ship Chartering/Ownership", description: "Expert ship chartering and ownership consultation services.", to: "/shipchartering", icon: "🚢" },
  { title: "Recruitment Services", description: "Specialized maritime recruitment for all positions.", to: "/recruitment", icon: "🔍" },
  { title: "Ship Repair/Maintenance", description: "Comprehensive repair and maintenance for all vessel types.", to: "/shiprepair", icon: "🛠" },
  { title: "Ship Chandelling", description: "Supply of provisions and equipment to vessels in port.", to: "/shipchandelling", icon: "📦" },
  { title: "Riding Squad", description: "Specialized teams for on-voyage repairs and maintenance.", to: "/ridingsquad", icon: "👷" },
  { title: "Hydroblasting", description: "High-pressure water blasting for cleaning and surface preparation.", to: "/hydroblasting", icon: "🌊" },
  { title: "Survey and Consultancy Services", description: "Expert marine surveys and specialized consultancy services.", to: "/marineservices", icon: "📑" }
];

const jobs = [
  { type: "Full-time", location: "Dubai, UAE", title: "Technical Consultant", description: "Join our consulting team to provide expert advice to our international clients." },
  { type: "Part-time", location: "Mumbai, India", title: "Marine Engineer", description: "Work with our expert team to manage technical operations on vessels." },
  { type: "Full-time", location: "Singapore", title: "Operations Manager", description: "Oversee operations and ensure smooth functioning of maritime projects." },
  { type: "Contract", location: "London, UK", title: "Fleet Manager", description: "Manage and optimize the performance of our global fleet." }
];
// --- End of your content ---

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [serviceTab, setServiceTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timer);
  }, [serviceTab]);
useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen relative overflow-x-hidden">

      {/* Sidebar Overlay and Drawer */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
        <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <span className="text-lg font-bold text-blue-700">Menu</span>
            <button onClick={() => setSidebarOpen(false)} aria-label="Close Menu">
              <X className="w-6 h-6 text-blue-700" />
            </button>
          </div>
        </div>
      </div>


      {/* Hero */}
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
          style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
        />
        <div className="relative z-10 text-center px-4 w-full">
          <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
            Marine Engineering Excellence
          </h2>
          <p className="text-lg md:text-2xl drop-shadow-md">
            Providing high-quality marine equipment and services worldwide
          </p>
        </div>
      </section>


      {/* About Us - Timeline/Highlight */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 flex flex-col gap-10">
              {aboutContent.map((item, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                    <div className="text-gray-600 text-base leading-relaxed">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-xl shadow-lg text-blue-900 text-lg italic max-w-md">
                "We pride ourselves on delivering high-quality products and exceptional service to clients worldwide."
              </blockquote>
              <img src="/homepage.jpg" alt="About" className="rounded-2xl shadow-2xl w-full max-w-md mt-8 border-4 border-blue-200" />
              <img src="/placeholder.jpg" alt="About" className="rounded-2xl shadow-2xl w-full max-w-md mt-8 border-4 border-blue-200" />
              <img src="/02.jpg" alt="About" className="rounded-2xl shadow-2xl w-full max-w-md mt-8 border-4 border-blue-200" />
              <img src="/03.jpg" alt="About" className="rounded-2xl shadow-2xl w-full max-w-md mt-8 border-4 border-blue-200" />

            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">Our Services</h2>

    {/* Mobile View */}
    <div className="md:hidden mb-10">
      {/* Buttons - Non-scrollable, wrap on mobile */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center pb-4">
  {services.map((service, idx) => (
    <button
      key={service.title}
      onClick={() => setServiceTab(idx)}
      className={`flex items-center justify-center text-center text-sm sm:text-base gap-2 px-4 py-2 rounded-full border font-semibold text-blue-700 focus:outline-none transition-all duration-200 w-40 sm:w-48 h-16
        ${serviceTab === idx
          ? "bg-blue-100 border-blue-500 scale-105 shadow-lg"
          : "bg-white border-blue-200 hover:bg-blue-50 hover:scale-105 hover:shadow"}`}
    >
      <span className="text-xl">{service.icon}</span>
      <span className="whitespace-normal">{service.title}</span>
    </button>
  ))}
</div>




      {/* Service Description */}
      <div
        className={`mt-6 bg-white border border-blue-200 rounded-2xl shadow-xl p-6 transition-all duration-500
          ${animate ? "animate-fade-in-up" : ""} hover:scale-105 hover:shadow-2xl`}
        style={{ minHeight: 220 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{services[serviceTab].icon}</span>
          <h3 className="text-lg font-bold text-blue-700">{services[serviceTab].title}</h3>
        </div>
        <p className="text-gray-700 mb-6 text-sm">{services[serviceTab].description}</p>
        <Link to={services[serviceTab].to} className="text-green-600 font-medium hover:underline">
          Learn More &rarr;
        </Link>
      </div>
    </div>

    {/* Desktop View */}
    <div className="hidden md:flex md:flex-row gap-8">
      {/* Buttons */}
      <div className="flex-1">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {services.map((service, idx) => (
            <button
              key={service.title}
              onClick={() => setServiceTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border font-semibold text-blue-700 focus:outline-none transition-all duration-200
                ${serviceTab === idx
                  ? "bg-blue-100 border-blue-500 scale-105 shadow-lg"
                  : "bg-white border-blue-200 hover:bg-blue-50 hover:scale-105 hover:shadow"}`}
            >
              <span className="text-xl">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Service Description */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div
          className={`bg-white border border-blue-200 rounded-2xl shadow-xl p-8 max-w-md w-full transition-all duration-500
            ${animate ? "animate-fade-in-up" : ""} hover:scale-105 hover:shadow-2xl`}
          style={{ minHeight: 220 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{services[serviceTab].icon}</span>
            <h3 className="text-xl font-bold text-blue-700">{services[serviceTab].title}</h3>
          </div>
          <p className="text-gray-700 mb-6">{services[serviceTab].description}</p>
          <Link to={services[serviceTab].to} className="text-green-600 font-medium hover:underline">
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Animations + Scrollbar hide */}
  <style>{`
    .animate-fade-in-up {
      animation: fade-in-up 0.4s cubic-bezier(.4,2,.6,1);
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(30px);}
      to { opacity: 1; transform: translateY(0);}
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
</section>


<section id="careers" className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-blue-700 mb-4 text-center">Career Opportunities</h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 text-center">
      Join our expert team and help us deliver excellence in marine engineering.
    </p>

    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-blue-200"></div>

      <div className="flex flex-col gap-16">
        {jobs.map((job, idx) => {
          const isLeft = idx % 2 === 0;
          // You can use different images for each job if you want, or use a placeholder
          const jobImage = `/job${idx + 1}.jpg`; // e.g. /job1.jpg, /job2.jpg, etc.

          return (
            <div key={idx} className="relative flex flex-col md:flex-row items-center md:items-stretch">
              {isLeft && (
                <>
                  {/* Left Job Card */}
                  <div className="md:w-1/2 flex justify-end pr-3 relative z-10">
                    <div className="bg-blue-50 p-6 rounded-xl shadow-lg max-w-lg w-full">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xl font-semibold text-blue-800">{job.title}</h3>
                        <span className="text-sm text-blue-600 font-semibold">{job.type}</span>
                      </div>
                      <div className="text-gray-500 text-sm mb-2">{job.location}</div>
                      <p className="text-gray-700 mb-3">{job.description}</p>
                      <Link
                        to="/careers"
                        className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  {/* Arrow to left card */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-full">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                      <path d="M40 10 H8" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <defs>
                        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
                          <polygon points="0 0, 8 4, 0 8" fill="#2563eb" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                  {/* Opposite Image */}
                  <div className="md:w-1/2 flex justify-start pl-3 items-center">
                    <img
                      src={jobImage}
                      alt={job.title}
                      className="rounded-2xl shadow-xl w-full max-w-xs md:max-w-lg border-4 border-blue-100 object-cover"
                      style={{ minHeight: 180, maxHeight: 220 }}
                    />
                  </div>
                </>
              )}

              {!isLeft && (
                <>
                  {/* Opposite Image */}
                  <div className="md:w-1/2 flex justify-end pr-3 items-center">
                    <img
                      src={jobImage}
                      alt={job.title}
                      className="rounded-2xl shadow-xl w-full max-w-xs md:max-w-lg border-4 border-blue-100 object-cover"
                      style={{ minHeight: 180, maxHeight: 220 }}
                    />
                  </div>
                  {/* Arrow to right card */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-y-1/2">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                      <path d="M0 10 H32" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <defs>
                        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
                          <polygon points="0 0, 8 4, 0 8" fill="#2563eb" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                  {/* Right Job Card */}
                  <div className="md:w-1/2 flex justify-start pl-3 relative z-10">
                    <div className="bg-blue-50 p-6 rounded-xl shadow-lg max-w-lg w-full">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xl font-semibold text-blue-800">{job.title}</h3>
                        <span className="text-sm text-blue-600 font-semibold">{job.type}</span>
                      </div>
                      <div className="text-gray-500 text-sm mb-2">{job.location}</div>
                      <p className="text-gray-700 mb-3">{job.description}</p>
                      <Link
                        to="/careers"
                        className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
