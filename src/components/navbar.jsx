import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import isoLogo from '../assets/certifide.png';
import nabcbLogo from '../assets/nabcb.jpg';
import logo from '../assets/logo.jpg';

const servicesItems = [
  'Crew Manning',
  'Crew Management',
  'Ship Chartering',
  'Technical Management',
  'Ship Repair',
  'Ship Chandelling',
  'Riding Squad',
  'Hydro Blasting',
  'Marine Survey and Consultancy',
  'Recruitment Services',
];

const vacanciesItems = ['Careers'];

const quoteItems = [
  'Crew Manning',
  'Technical Management',
  'Riding Squad',
  'Ship Repairing',
  'Ship Chandelling',
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? '' : menuName);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 shadow-md z-50 transition-all duration-300">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
  {/* Left: Logo */}
  <div className="flex items-center space-x-4">
    <img src={logo} alt="Company Logo" className="h-12 w-auto" />
  </div>

  {/* Right: Certifications + Buttons */}
  <div className="hidden md:flex items-center space-x-4">
    <img src={isoLogo} alt="ISO" className="h-12 w-auto" />
    <img src={nabcbLogo} alt="NABCB" className="h-12 w-auto" />
    <button className="bg-gray-300 hover:bg-red-500 text-gray-800 px-2 py-1 rounded-md font-semibold transition duration-200 transform hover:scale-105">
      <a href="https://ashutoshmarine.com/file/RPS%20LICENSE%20DOE%2012-07-2024.pdf">License and Info</a>
    </button>
    <button className="bg-gray-300 hover:bg-red-500 text-gray-800 px-2 py-1 rounded-md font-semibold transition duration-200 transform hover:scale-105">
      <a href="https://ashutoshmarine.com/images/Certificate/ISO%209001%202015.pdf">Certificates</a>
    </button>
  </div>

  


        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center bg-red-600">
        <ul className="flex space-x-8 py-4 items-center text-lg font-medium text-white">
          <li className="hover:text-gray-200 cursor-pointer transition duration-300">Home</li>
          <li>
  <a href="/about" className="px-4 py-2 hover:bg-red-700 rounded-md transition duration-300">
    About Us
  </a>
</li>
          {/* Services Dropdown */}
          <li
            className="group relative cursor-pointer"
            onClick={() => toggleDropdown('services')}
          >
            <div className="flex items-center hover:text-gray-200 transition duration-300">
              Services
              <span className="ml-2">
                {openDropdown === 'services' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`absolute ${openDropdown === 'services' ? 'flex' : 'hidden'} flex-col bg-red-500 text-white shadow-lg rounded-md mt-2 min-w-[200px] z-10 transition-all ease-in-out duration-300`}
            >
              {servicesItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="px-4 py-2 hover:bg-red-700 transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </li>

          <li>
  <a href="/qualitypolicy" className="px-4 py-2 hover:bg-red-700 rounded-md transition duration-300">
    Quality Policy
  </a>
</li>         
<li>
  <a href="/code-of-ethics" className="px-4 py-2 hover:bg-red-700 rounded-md transition duration-300">
    Code of Ethics
  </a>
</li>

          {/* Vacancies Dropdown */}
          <li
            className="group relative cursor-pointer"
            onClick={() => toggleDropdown('vacancies')}
          >
            <div className="flex items-center hover:text-gray-200 transition duration-300">
              Vacancies
              <span className="ml-2">
                {openDropdown === 'vacancies' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`absolute ${openDropdown === 'vacancies' ? 'flex' : 'hidden'} flex-col bg-red-500 text-white shadow-lg rounded-md mt-2 min-w-[200px] z-10 transition-all ease-in-out duration-300`}
            >
              {vacanciesItems.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="px-4 py-2 hover:bg-red-700 transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </li>

          <li>
  <a href="/contact" className="px-4 py-2 hover:bg-red-700 rounded-md transition duration-300">
    Contact Us
  </a>
</li>
          {/* Get a Quote Button */}
          <li>
            <button
              onClick={() => toggleDropdown('quote')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Get a Quote
            </button>
            {openDropdown === 'quote' && (
              <div className="absolute flex flex-col bg-blue-600 text-white shadow-lg rounded-md mt-2 min-w-[200px] z-10 transition-all ease-in-out duration-300">
                {quoteItems.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="px-4 py-2 hover:bg-blue-700 transition duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-red-600 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col items-center py-6 space-y-4">
            <img src={isoLogo} alt="ISO" className="h-12" />
            <img src={nabcbLogo} alt="NABCB" className="h-12" />
            <button className="bg-gray-300 hover:bg-red-500 text-gray-800 w-3/4 py-2 rounded-md font-semibold transition transform hover:scale-105">
              License and Info
            </button>
            <button className="bg-gray-300 hover:bg-red-500 text-gray-800 w-3/4 py-2 rounded-md font-semibold transition transform hover:scale-105">
              Certificates
            </button>
          </div>
          <ul className="flex flex-col items-center text-lg font-medium space-y-4 pb-6 text-white">
            <li className="hover:text-gray-200 cursor-pointer transition duration-300">Home</li>
            <li className="hover:text-gray-200 cursor-pointer transition duration-300">About Us</li>

            {/* Mobile Services Dropdown */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => toggleDropdown('services')}
                className="w-3/4 text-centre px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Services
                <span className="ml-2">
                  {openDropdown === 'services' ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openDropdown === 'services' && (
                <div className="w-3/4 flex flex-col mt-1">
                  {servicesItems.map((item, idx) => (
                    <a key={idx} href="#" className="px-4 py-2 text-sm hover:bg-red-700 transition duration-300">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <li className="hover:text-gray-200 cursor-pointer transition duration-300">Quality Policy</li>
            <li className="hover:text-gray-200 cursor-pointer transition duration-300">Code of Ethics</li>

            {/* Mobile Vacancies Dropdown */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => toggleDropdown('vacancies')}
                className="w-3/4 text-centre px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Vacancies
                <span className="ml-2">
                  {openDropdown === 'vacancies' ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openDropdown === 'vacancies' && (
                <div className="w-3/4 flex flex-col mt-1">
                  {vacanciesItems.map((item, idx) => (
                    <a key={idx} href="#" className="px-4 py-2 text-sm hover:bg-red-700 transition duration-300">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <li className="hover:text-gray-200 cursor-pointer transition duration-300">Contact Us</li>

            {/* Mobile Get a Quote */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => toggleDropdown('quote')}
                className="w-3/4 text-left px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Get a Quote
              </button>
              {openDropdown === 'quote' && (
                <div className="w-3/4 flex flex-col mt-1">
                  {quoteItems.map((item, idx) => (
                    <a key={idx} href="#" className="px-4 py-2 text-sm hover:bg-blue-700 transition duration-300">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
