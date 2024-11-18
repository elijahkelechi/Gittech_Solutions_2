import React from "react";

const LandingPageServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
      {/* Automation and Control Systems */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Automation and Control Systems
        </h3>
        <ul className="list-disc text-left pl-5 space-y-2">
          <li>Automation Systems</li>
          <li>Electrical Machines Control</li>
          <li>Automatic Power Transfer Switches</li>
          <li>Hardware Programming</li>
          <li>AVR</li>
        </ul>
      </div>

      {/* Electrical and Mechanical Engineering */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Electrical and Mechanical Engineering
        </h3>
        <ul className="list-disc text-left pl-5 space-y-2">
          <li>Electrical Tower Cranes</li>
          <li>Electrical Panels</li>
          <li>Mechatronics Systems</li>
          <li>Electrical Wiring Installations</li>
          <li>Repairs, Maintenance, and Overhaul</li>
        </ul>
      </div>

      {/* Advanced Technologies */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Advanced Technologies</h3>
        <ul className="list-disc text-left pl-5 space-y-2">
          <li>Avionics Systems</li>
          <li>Robotics</li>
          <li>AI Solutions</li>
          <li>UAV and FPV Surveillance Quadcopters</li>
        </ul>
      </div>

      {/* Research and Development */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Research and Development
        </h3>
        <ul className="list-disc text-left pl-5 space-y-2">
          <li>Research and Prototype Development</li>
          <li>Assisted School Projects</li>
        </ul>
      </div>

      {/* Consumer and Commercial Products */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Consumer and Commercial Products
        </h3>
        <ul className="list-disc text-left pl-5 space-y-2">
          <li>Smart Toys</li>
          <li>Gadgets</li>
          <li>Smart Wears</li>
          <li>General Merchant Supplies Solutions</li>
        </ul>
      </div>

      {/* Green Energy Solutions */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Green Energy Solutions</h3>
        <ul className="list-disc text-left pl-5 space-y-2">
          <li>Green Energies and Inverters</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPageServices;
