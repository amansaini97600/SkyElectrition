import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 z-50">

      {/* 🔵 TOP BAR */}
      <div className="bg-blue-600 text-white text-sm px-6 py-2 flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <span>Need Help? Call Us:</span>
        </div>

        <div className="flex gap-6 font-semibold">
          <a href="tel:+919876543210" className="hover:underline">
            +91 98765 43210
          </a>
          <a href="tel:+919812345678" className="hover:underline">
            +91 98123 45678
          </a>
          <a href="tel:+919876111222" className="hover:underline">
            +91 98761 11222
          </a>
        </div>

      </div>

      {/* ⚪ MAIN NAVBAR */}
      <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          SkyElectrition
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Services</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
        </ul>

        {/* CALL BUTTON */}
        <a
          href="tel:+919876543210"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition font-semibold"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}