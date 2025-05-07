import React from 'react';
import Navbar from './components/navbar';
import AboutUs from './pages/aboutus';
import QualityPolicy from "./pages/qualitypolicy";
import Contact from './pages/contactus';
import CodeOfEthics from './pages/codeofethics';
import Footer from './components/footer';
import JobOpeningsPage from './pages/careers';
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
function App() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <CrewManning />
      <CrewManagement />
      <TechnicalManagement />
      <Shipchartering />
      <Shiprepair />
      <Shipchandelling />
      <Recruitment />
      <Hydroblasting />
      <Marinesurveyandconsultancyservices />
      <Ridingsquad />
      {/* Page content goes here */}
    </>
  );
}

export default App;
