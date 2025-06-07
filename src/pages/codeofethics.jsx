import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const heroImages = [
  "/placeholder.jpg",
  "/homepage.jpg",
  "/02.jpg",
  "/03.jpg"
];
const CodeOfEthics = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const ethicsData = [
    {
    title: "INTRODUCTION",
    content:
      "Under our Code of Ethics, we seek to conduct our business in accordance with the highest standards of business ethics at all of our locations throughout the world, and we encourage employees to bring ethical questions to management's attention so that we can maintain our high standards. The shared values of high business ethics that have characterized our approach to business in ASHUTOSH MARINE throughout our history demand high professional standards, place a premium on honesty and fair dealing in relationships with our customers, suppliers, employees and other persons with whom we have business relationships.The Code of Ethics also reinforces our commitment to the spirit and practice of equal employment opportunity and the benefits of a diverse workforce."
  },
  {
    title: "COMPLIANCE WITH LAWS AND REGULATIONS",
    content:
      "Adhering to the law of the country of work, both in letter and in spirit, is the foundation on which our ethical standards are based. We believe that employees who follow the law and abide by high ethical standards are also more productive. Failures to comply legal or ethical standards can also cost the company money in legal fees, fines, penalties, sanctions or the opportunity cost of management and other employee,s time spent addressing such failures. Each employee of ASHUTOSH MARINE has an obligation to comply with the Indian laws and the Rules of the foreign countries in which we operate. We do not tolerate any activity that violates any laws, rules or regulations applicable to us or our employees or representatives."
  },
  {
    title: "CONFLICTS OF INTEREST",
    content:
      "Every employee has a primary business responsibility to ASHUTOSH MARINE, and must avoid conflicts of interest. A conflict of interest arises when an employee takes actions or enters into relationships that oppose the interests of the Company or interfere with the employee-s performance or independent judgment when carrying out his or her duties. The Company strictly prohibits its employees from taking any action or entering into any relationship that creates, or even appears to create, a conflict of interest without the prior approval of a supervisor. For purposes of determining whether a conflict exists, the actions of an employee-s immediate family members are treated as those of the employee and are therefore subject to the same consideration."
  },
  {
    title: "RECORDS MANAGEMENT",
    content:
      "In the process of work, we create or prepare some information during the workday, such as financial reports, accounting records, business plans, contracts, offers and expense reports. People inside and outside ASHUTOSH MARINE depends on these reports to be accurate, truthful and properly maintained. These people include employees, customers, government representatives, auditors, and the communities in which we operate. No one may deviate from our commitment to manage information accurately and truthfully."
  },
  {
    title: "EMPLOYMENT PRACTICES AND POLICIES",
    content:
      "The success of ASHUTOSH MARINE is a result of our employee's professionalism. Our ability to compete effectively in existing markets and to expand into new ones is directly linked to attracting and retaining the best and brightest employees. Understanding this, we pursue fair employment practices in every aspect of our business.We are committed to an excellent environment in which our employees can develop their personal and professional skills. To support this environment and practices, our Managers take objective decisions when determining the pays and stimulus of the employees, based on criteria like quality and quantity of the performed work, loyalty to the company, skills and attitude against the work."
  },
  {
    title: "HARASSMENT AND DISCRIMINATION",
    content: "All people deserve to be treated with respect. Our employees do not engage in any harassment or discriminatory conduct based on race, religion, sex, age, national origin, sexual orientation, disability, citizenship. Harassment is not always overt or deliberate. In many cases, it is subtle. Our commitment applies to all people, regardless of whether or not they are ASHUTOSH MARINE,s employees. It is our policy to maintain a work environment free from discrimination and sexual advances or harassment that may affect an employee,s terms or conditions of employment."
  },
  {
    title: "HEALTH AND SAFETY",
    content:
      "We have taken great care in developing ASHUTOSH MARINE's health and safety regulations and risk assessment, based on the requirements and standards of Republic of India law so that we can provide the foundations of a safe, secure and free of danger work environment. Our employees are required to comply with all applicable environmental, health and safety regulations of the Company and always participate in the regular training."
  },
  {
    title: "USE OF COMPANY ASSETS",
    content:
      "Employees and managers should seek to protect ASHUTOSH MARINE,s assets. Theft, carelessness, and waste have a direct impact on the Company,s financial performance. Employees must use the Company,s assets and services solely for legitimate business purposes of the Company and not for any personal benefit or the personal benefit of anyone else. However, limited reasonable use for personal interests of company assets such as computers, e-mail, mobile phones, etc. is permitted. But any use of such items for personal business use or illegal or immoral activities may result in the termination of the employees, contract."
  },
  {
    title: "CONFIDENTIAL INFORMATION",
    content:
      "We are committed to free and open competition in the marketplace. Employees must avoid actions that reasonably could be construed as being anti-competitive, monopolistic or otherwise contrary to laws governing competitive practices in the market, including government and antitrust laws. No employee may obtain or give competitive information by unethical, unlawful or illegal means."
  },
  {
    title: "CUSTOMER POLICY",
    content:
      "The success of ASHUTOSH MARINE and our customers is reciprocal. By providing our clients with products and services of superior quality and value, delivered on time and at fair prices, we gain their respect and loyalty. Remaining committed to both quality and worth in current and future products help us gain and keep a clear competitive edge. We also continue to improve and keep open the lines of communication with our customers. It is central to our strategy of offering customer,s broader solutions that ultimately satisfy their requirements. Communicating involves professionalism both in how we obtain critical information from clients, as well as in how we respond to that information within ASHUTOSH MARINE."
  },
  {
    title: "CHOOSING SUPPLIERS AND CONSULTANTS",
    content: "We strive to be fair in our choice of suppliers and consultants and are honest in all business interactions with them. We choose our vendors and consultants based on appropriate criteria, such as qualifications, competitive price, and reputation. Anyone responsible for buying or leasing materials or services on behalf of ASHUTOSH MARINE must conscientiously guard their objectivity.We also expect our suppliers and others who do business with us or on our behalf - to conduct their activities in the name of ASHUTOSH MARINE in compliance with all applicable laws and regulations and accordance with the highest ethical standards."
  },
  {
    title: "COOPERATION WITH GOVERNMENTAL AUTHORITIES",
    content:
      "We at ASHUTOSH MARINE understand the importance of keeping good relations with the governmental authorities. Cooperation on all levels is necessary so that we can solve all problems in the quickest way possible. Our company makes no attempt to influence the resolutions of the governmental authorities or their representatives and officials illegally, follows all the laws and requirements, applicable to its activity, stays faithful to the letter and the spirit of legislation and pays taxes in full and on time."
  },
  {
    title: "CORRUPTION",
    content:
      "Bribery or the offer or payment of money to public officials is prohibited. ASHUTOSH MARINE employees should not submit directly or indirectly anything of value to companies or government authorities, to obtain an improper advantage, or to retain or obtain business. ASHUTOSH MARINE,s business partners (vendors, suppliers, clients, consultants, etc.) may also be required to comply with these laws, employees should exercise due diligence in selecting the company,s business partners and should avoid relationships with parties with a history of corrupt practices."
  },
  {
    title: "GIFTS AND ENTERTAINMENT",
    content:
      "Business gifts and entertainment are courtesies designed to build understanding and goodwill among people in a business relationship, and in some cultures they play a very important role. Problems arise when they compromise - or even appear to compromise - the recipient,s ability to make objective and fair business decisions or when they are contrary to applicable laws. Directly or indirectly offering or receiving any gift or entertainment that might be perceived to improperly influence a business interaction violates our commitment to maintaining objectivity and transparency in our relationships. All gifts, entertainment and business travel provided to or by third parties must be moderate and reasonable."
  },
  {
    title: "ENVIRONMENTAL RESPONSIBILITY",
    content:
      "We work to comply with all applicable environmental standards established by governmental agencies in the locations where we operate and with ASHUTOSH MARINE policies and procedures. Any violation of environmental law, regulation, or policy by the Company personnel or others acting on our behalf must be reported to the Environment Health and Safety Department immediately."
  },
  {
    title: "REPORTING OF VIOLATIONS",
    content:
      "We are committed to creating a working environment in which employees can and do behave in the right way. We expect employees to raise with their line manager, or where they are uncomfortable doing so, with their next up line manager, any concerns they may have of serious wrongdoing or behavior that is not in the letter or spirit of our values or our Code of Ethics.Compliance with our Code of Ethics is a basis for good working relations between the employees and ASHUTOSH MARINE."
  }
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <section id="hero" className="relative h-[420px] w-full flex items-end justify-center bg-blue-900 text-white pb-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-1000"
        style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
      />
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Code of Ethics
        </h2>
      </div>
    </section>

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row bg-gradient-to-br from-red-50 to-white px-4 py-10 gap-8 max-w-7xl mx-auto">
        {/* Sidebar - scrollable */}
        <div className="lg:w-1/4 max-h-[calc(100vh-300px)] overflow-y-auto space-y-2 sticky top-20">
          {ethicsData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left px-4 py-2 rounded-md transition font-medium ${
                activeIndex === index
                  ? "bg-blue-700 text-white"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content - only one section shown at a time */}
        <div className="lg:w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {ethicsData[activeIndex].title}
              </h2>
              <p className="text-gray-800 whitespace-pre-line">
                {ethicsData[activeIndex].content}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default CodeOfEthics;
