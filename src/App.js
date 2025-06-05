import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Tailer from './components/footer';
import ScrollToTop from './components/ScrolltoTop'; // <-- import here
import AboutUs from './pages/aboutus';
import QualityPolicy from './pages/qualitypolicy';
import Contact from './pages/contactus';
import CodeOfEthics from './pages/codeofethics';
import CareerPage from './pages/careers';
import CrewManning from './pages/crewmanning';
import CrewManagement from './pages/crewmanagement';
import TechnicalManagement from './pages/technicalmanagment';
import Shipchartering from './pages/shipchartering';
import Shiprepair from './pages/shiprepair';
import Shipchandelling from './pages/shipchandelling';
import Recruitment from './pages/recruitment';
import Hydroblasting from './pages/hydroblasting';
import Marinesurveyandconsultancyservices from './pages/marinescservices';
import Ridingsquad from './pages/ridingsquad';
import Home from './pages/homepage';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- add this line */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/qualitypolicy" element={<QualityPolicy />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/codeofethics" element={<CodeOfEthics />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/crewmanning" element={<CrewManning />} />
        <Route path="/crewmanagement" element={<CrewManagement />} />
        <Route path="/technicalmanagment" element={<TechnicalManagement />} />
        <Route path="/shipchartering" element={<Shipchartering />} />
        <Route path="/shiprepair" element={<Shiprepair />} />
        <Route path="/shipchandelling" element={<Shipchandelling />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/hydroblasting" element={<Hydroblasting />} />
        <Route path="/marinescservices" element={<Marinesurveyandconsultancyservices />} />
        <Route path="/ridingsquad" element={<Ridingsquad />} />
      </Routes>
      <Tailer />
    </Router>
  );
}

export default App;
