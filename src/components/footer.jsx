import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <img src="/assets/logo.png" alt="Ashutosh Marine Logo" className="h-16 mb-4" />
          <p className="mb-4 leading-relaxed">
            Ashutosh Marine is an ISO 9001:2008 accredited for Recruitment and Placement of
            Seafarers as per Maritime Labor Convention 2006, Part 1.4, and Ship Repairs.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              <FaPinterestP className="hover:text-red-500" />
            </a>
            <a href="mailto:manning@ashutoshmarine.com">
              <FaEnvelope className="hover:text-yellow-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              {[
                "Home",
                "About Us",
                "Services",
                "Quality Policy",
                "Code Of Ethics",
                "Careers",
                "Contact Us",
                "Service Offers",
                "Crew Manning",
                "Crew Management",
                "Technical Management",
                "Ship Chartering/Ownership",
                "Ship Repair/Maintenance",
                "Ship Chandelling",
                "Riding Squad",
                "Hydroblasting",
                "Marine Survey and Consultancy Services",
                "Recruitment Services"
              ].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Address: 111, Sai Chamber, 4th Floor,<br />
              Opp. Railway Station, Santacruz (E),<br />
              Mumbai - 400 055, India
            </p>
            <p className="mt-2">Phone: 0091-22-2288 5426, 2288 5427</p>
            <p>Fax: 0091-22-2283749</p>
            <p>Email: <a href="mailto:manning@ashutoshmarine.com" className="hover:underline">manning@ashutoshmarine.com</a></p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-xs">
        © 2016 by Espire System Pvt Ltd - ASHUTOSH MARINE PRIVATE LIMITED. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
