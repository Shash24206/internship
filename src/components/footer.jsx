import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaGithub } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Services', href: '/services' },
  { name: 'Quality Policy', href: '/qualitypolicy' },
  { name: 'Code Of Ethics', href: '/codeofethics' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contactus' },
];

const serviceOffers = [
  { name: 'Crew Manning', href: '/crewmanning' },
  { name: 'Crew Management', href: '/crewmanagement' },
  { name: 'Technical Management', href: '/technicalmanagment' },
  { name: 'Ship Chartering/Ownership', href: '/shipchartering' },
  { name: 'Ship Repair/Maintenance', href: '/shiprepair' },
  { name: 'Ship Chandelling', href: '/shipchandelling' },
  { name: 'Riding Squad', href: '/ridingsquad' },
  { name: 'Hydroblasting', href: '/hydroblasting' },
  { name: 'Marine Survey and Consultancy Services', href: '/marinescservices' },
  { name: 'Recruitment Services', href: '/recruitment' },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaGooglePlusG />, href: "#", label: "Google Plus" },
  { icon: <FaPinterestP />, href: "#", label: "Pinterest" },
  { icon: <FaGithub />, href: "#", label: "Github" },
];

const Tailer = () => (
  <footer className="bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-800 text-gray-200 pt-12 pb-4 shadow-inner">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <img
            src={logo}
            alt="Ashutosh Marine Pvt Ltd."
            className="w-32 h-auto mb-3 rounded-lg shadow-lg border-2 border-slate-700 bg-white"
            style={{ maxHeight: '70px', objectFit: 'contain' }}
          />
          <p className="text-gray-300 text-sm mb-4">
            Ashutosh Marine is an ISO 9001:2008 accredited for Recruitment and Placement of Seafarers as per Maritime Labor Convention 2006, Part 1.4, and Ship Repairs.
          </p>
          <div className="flex space-x-3 mt-3">
            {socialLinks.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className="bg-slate-700 hover:bg-blue-600 text-white p-2 rounded-full shadow transition hover:scale-110"
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Quick Links */}
        <div className="md:w-1/6">
          <h3 className="font-bold mb-2 text-white border-b-4 border-yellow-400 w-max pb-1 tracking-wide">QUICK LINKS</h3>
          <ul className="space-y-2 mt-4 text-sm">
            {quickLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="hover:underline hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Service Offers */}
        <div className="md:w-1/4">
          <h3 className="font-bold mb-2 text-white border-b-4 border-yellow-400 w-max pb-1 tracking-wide">SERVICE OFFERS</h3>
          <ul className="space-y-2 mt-4 text-sm">
            {serviceOffers.map(service => (
              <li key={service.name}>
                <Link
                  to={service.href}
                  className="hover:underline hover:text-blue-400 transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Us */}
        <div className="md:w-1/4">
          <h3 className="font-bold mb-2 text-white border-b-4 border-yellow-400 w-max pb-1 tracking-wide">CONTACT US</h3>
          <div className="mt-4 text-sm space-y-3">
            <div>
              <span className="font-bold text-white">Address:</span>
              <span className="block ml-2 text-gray-300">
                111, Sai Chamber, 4th Floor, Opp. Railway Station, Santacruz (E), Mumbai - 400 055, India
              </span>
            </div>
            <div>
              <span className="font-bold text-white">Phone:</span>
              <span className="ml-2 text-gray-300">0091-22-2288 5426 , 2288 5427</span>
            </div>
            <div>
              <span className="font-bold text-white">Fax:</span>
              <span className="ml-2 text-gray-300">0091-22-2283749</span>
            </div>
            <div>
              <span className="font-bold text-white">E-mail:</span>
              <a
                href="mailto:manning@ashutoshmarine.com"
                className="ml-2 text-blue-300 hover:underline"
              >
                manning@ashutoshmarine.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400 tracking-wide">
        © {new Date().getFullYear()} by <span className="font-semibold text-white">Espire System Pvt Ltd - ASHUTOSH MARINE PRIVATE LIMITED</span> &nbsp; All rights reserved
      </div>
    </div>
  </footer>
);

export default Tailer;
