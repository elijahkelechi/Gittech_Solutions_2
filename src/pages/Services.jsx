import { useState } from "react";
import {
  FaCogs,
  FaBolt,
  FaRobot,
  FaFlask,
  FaShoppingCart,
  FaLeaf,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Automation and Control Systems",
    icon: <FaCogs className="text-orange-500 text-2xl" />,
    items: [
      "Automation Systems",
      "Electrical Machines Control",
      "Automatic Power Transfer Switches",
      "Hardware Programming",
      "AVR",
    ],
  },
  {
    title: "Electrical and Mechanical Engineering",
    icon: <FaBolt className="text-yellow-500 text-2xl" />,
    items: [
      "Electrical Tower Cranes",
      "Electrical Panels",
      "Mechatronics Systems",
      "Electrical Wiring Installations",
      "Repairs, Maintenance, and Overhaul",
    ],
  },
  {
    title: "Advanced Technologies",
    icon: <FaRobot className="text-purple-500 text-2xl" />,
    items: [
      "Avionics Systems",
      "Robotics",
      "AI Solutions",
      "UAV and FPV Surveillance Quadcopters",
    ],
  },
  {
    title: "Research and Development",
    icon: <FaFlask className="text-blue-500 text-2xl" />,
    items: ["Research and Prototype Development", "Assisted School Projects"],
  },
  {
    title: "Consumer and Commercial Products",
    icon: <FaShoppingCart className="text-teal-500 text-2xl" />,
    items: [
      "Smart Toys",
      "Gadgets",
      "Smart Wears",
      "General Merchant Supplies Solutions",
    ],
  },
  {
    title: "Green Energy Solutions",
    icon: <FaLeaf className="text-green-500 text-2xl" />,
    items: ["Green Energies and Inverters"],
  },
];

export default function Services() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-secondary to-primary flex flex-col items-center py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-50 mb-6">Our Services</h1>
      <div className="w-full max-w-4xl">
        {servicesData.map((category, index) => (
          <div
            key={index}
            className="text-gray-50 bg-gradient-to-r from-teal-600 to-teal-400 shadow-md rounded-lg mb-4 border-l-4 border-gray-200 hover:text-gray-800"
          >
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 text-gray-800"
              onClick={() => toggleCategory(index)}
            >
              <div className="flex items-center gap-4">
                {category.icon}
                <h2 className="text-lg font-semibold text-gray-900 hover:text-gray-800">
                  {category.title}
                </h2>
              </div>
              <span className="text-gray-500">
                {openCategory === index ? "▲" : "▼"}
              </span>
            </div>
            {openCategory === index && (
              <div className="p-4 bg-gray-50">
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 hover:text-gray-800 transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
