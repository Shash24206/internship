import React, { useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import isoLogo from '../assets/certifide.png';
import nabcbLogo from '../assets/nabcb.jpg';
import logo from '../assets/logo.jpg';

const servicesItems = [
  { name: 'Crew Manning', path: '/crewmanning' },
  { name: 'Crew Management', path: '/crewmanagement' },
  { name: 'Ship Chartering', path: '/shipchartering' },
  { name: 'Technical Management', path: '/technicalmanagment' },
  { name: 'Ship Repair', path: '/shiprepair' },
  { name: 'Ship Chandelling', path: '/shipchandelling' },
  { name: 'Riding Squad', path: '/ridingsquad' },
  { name: 'Hydro Blasting', path: '/hydroblasting' },
  { name: 'Marine Survey and Consultancy', path: '/marineservices' },
  { name: 'Recruitment Services', path: '/recruitment' },
];

const vacanciesItems = [
  { name: 'Careers', path: '/careers' },
];

const quoteItems = [
  { name: 'Crew Manning', path: '/crewmanning' },
  { name: 'Technical Management', path: '/technicalmanagment' },
  { name: 'Riding Squad', path: '/ridingsquad' },
  { name: 'Ship Repairing', path: '/shiprepair' },
  { name: 'Ship Chandelling', path: '/shipchandelling' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');
  const [showTopRow, setShowTopRow] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 10) {
        setShowTopRow(true); // Only show when at the very top
      } else {
        setShowTopRow(false); // Hide otherwise
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? '' : menuName);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown('');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 shadow-md z-50 transition-all duration-300">
      {/* Top Row */}
      <div
        className={`max-w-7xl mx-auto px-4 py-3 flex justify-between items-center transition-all duration-500
        ${showTopRow ? 'translate-y-0 opacity-100 pointer-events-auto h-auto' : '-translate-y-full opacity-0 pointer-events-none h-0'}
        `}
        style={{ willChange: 'opacity, transform, height' }}
      >
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" onClick={closeAll}>
            <img src={logo} alt="Company Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Right: Certifications + Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <img src={isoLogo} alt="ISO" className="h-12 w-auto" />
          <img src={nabcbLogo} alt="NABCB" className="h-12 w-auto" />
          <a
            href="https://ashutoshmarine.com/file/RPS%20LICENSE%20DOE%2012-07-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-red-500 text-gray-800 px-2 py-1 rounded-md font-semibold transition duration-200 transform hover:scale-105"
          >
            License and Info
          </a>
          <a
            href="https://ashutoshmarine.com/images/Certificate/ISO%209001%202015.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 hover:bg-red-500 text-gray-800 px-2 py-1 rounded-md font-semibold transition duration-200 transform hover:scale-105"
          >
            Certificates
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div
        className={`hidden md:flex justify-center bg-red-500 transition-all duration-500
        ${showTopRow ? 'translate-y-0' : 'translate-y-0'}
        ${showTopRow ? '' : 'fixed top-0 left-0 w-full z-40'}
        `}
        style={{ willChange: 'transform' }}
      >
        <ul className="flex space-x-8 py-4 items-center text-lg font-medium text-white">
          <li>
          <Link
            to="/"
            onClick={closeAll}
            className="
              px-8 py-2
              rounded-md
              transition duration-200
              hover:bg-red-700
              hover:text-white
              cursor-pointer
            "
          >
            Home
          </Link>
        </li>

          <li>
            <Link to="/aboutus" className="px-4 py-2 hover:bg-red-700 rounded-md transition duration-300" onClick={closeAll}>
              About Us
            </Link>
          </li>
          {/* Services Dropdown */}
          <li
            className="group relative cursor-pointer"
            onClick={() => toggleDropdown('services')}
          >
            <div className="flex items-center hover:text-gray-200 transition duration-300 select-none">
              Services
              <span className="ml-2">
                {openDropdown === 'services' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`absolute ${openDropdown === 'services' ? 'flex' : 'hidden'} flex-col bg-white text-blue-500 shadow-lg rounded-md mt-2 min-w-[200px] z-10 transition-all ease-in-out duration-300`}
            >
              {servicesItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="px-4 py-2 hover:bg-red-700 transition duration-300"
                  onClick={closeAll}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link to="/qualitypolicy" className="px-4 py-2 hover:bg-red-700 rounded-md transition duration-300" onClick={closeAll}>
              Quality Policy
            </Link>
          </li>
          <li>
            <Link to="/codeofethics" className="px-4 py-2 hover:bg-red-700 rounded-md transition duration-300" onClick={closeAll}>
              Code of Ethics
            </Link>
          </li>
          {/* Vacancies Dropdown */}
          <li
            className="group relative cursor-pointer"
            onClick={() => toggleDropdown('vacancies')}
          >
            <div className="flex items-center hover:text-gray-200 transition duration-300 select-none">
              Vacancies
              <span className="ml-2">
                {openDropdown === 'vacancies' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`absolute ${openDropdown === 'vacancies' ? 'flex' : 'hidden'} flex-col bg-white text-blue-500 shadow-lg rounded-md mt-2 min-w-[200px] z-10 transition-all ease-in-out duration-300`}
            >
              {vacanciesItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="px-4 py-2 hover:bg-red-700 transition duration-300"
                  onClick={closeAll}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link to="/contactus" className="px-4 py-2 hover:bg-red-700 rounded-md transition duration-300" onClick={closeAll}>
              Contact Us
            </Link>
          </li>
          {/* Get a Quote Button */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown('quote')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Get a Quote
            </button>
            {openDropdown === 'quote' && (
              <div className="absolute flex flex-col bg-blue-600 text-white shadow-lg rounded-md mt-2 min-w-[200px] z-10 transition-all ease-in-out duration-300">
                {quoteItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="px-4 py-2 hover:bg-blue-700 transition duration-300"
                    onClick={closeAll}
                  >
                    {item.name}
                  </Link>
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
            <a
              href="https://ashutoshmarine.com/file/RPS%20LICENSE%20DOE%2012-07-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 hover:bg-red-500 text-gray-800 w-3/4 py-2 rounded-md font-semibold transition transform hover:scale-105 text-center"
            >
              License and Info
            </a>
            <a
              href="https://ashutoshmarine.com/images/Certificate/ISO%209001%202015.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-300 hover:bg-red-500 text-gray-800 w-3/4 py-2 rounded-md font-semibold transition transform hover:scale-105 text-center"
            >
              Certificates
            </a>
          </div>
          <ul className="flex flex-col items-center text-lg font-medium space-y-4 pb-6 text-white">
            <li>
              <Link to="/" className="hover:text-gray-200 cursor-pointer transition duration-300" onClick={closeAll}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-gray-200 cursor-pointer transition duration-300" onClick={closeAll}>
                About Us
              </Link>
            </li>
            {/* Mobile Services Dropdown */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => toggleDropdown('services')}
                className="w-3/4 flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                <span>Services</span>
                <span>
                  {openDropdown === 'services' ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openDropdown === 'services' && (
                <div className="w-3/4 flex flex-col mt-1">
                  {servicesItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="px-4 py-2 text-sm hover:bg-red-700 transition duration-300"
                      onClick={closeAll}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <li>
              <Link to="/qualitypolicy" className="hover:text-gray-200 cursor-pointer transition duration-300" onClick={closeAll}>
                Quality Policy
              </Link>
            </li>
            <li>
              <Link to="/codeofethics" className="hover:text-gray-200 cursor-pointer transition duration-300" onClick={closeAll}>
                Code of Ethics
              </Link>
            </li>
            {/* Mobile Vacancies Dropdown */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => toggleDropdown('vacancies')}
                className="w-3/4 flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                <span>Vacancies</span>
                <span>
                  {openDropdown === 'vacancies' ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openDropdown === 'vacancies' && (
                <div className="w-3/4 flex flex-col mt-1">
                  {vacanciesItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="px-4 py-2 text-sm hover:bg-red-700 transition duration-300"
                      onClick={closeAll}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <li>
              <Link to="/contactus" className="hover:text-gray-200 cursor-pointer transition duration-300" onClick={closeAll}>
                Contact Us
              </Link>
            </li>
            {/* Mobile Get a Quote */}
            <div className="w-full flex flex-col items-center">
              <button
                onClick={() => toggleDropdown('quote')}
                className="w-3/4 flex flex-row items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                <span>Get a Quote</span>
                <span>
                  {openDropdown === 'quote' ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openDropdown === 'quote' && (
                <div className="w-3/4 flex flex-col mt-1">
                  {quoteItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="px-4 py-2 text-sm hover:bg-blue-700 transition duration-300"
                      onClick={closeAll}
                    >
                      {item.name}
                    </Link>
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
