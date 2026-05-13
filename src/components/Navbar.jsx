import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";


export default function Navbar({ setOpenPopup }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50">

      {/* 🔵 TOP BAR */}
      <div className="bg-blue-600 text-white text-sm px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <span>Need Help? Call Us:</span>
        </div>

        <div className="hidden md:flex gap-6 font-semibold">
          <a href="tel:+919876543210" className="hover:underline">
            +91 98765 43210
          </a>
          <a href="tel:+919812345678" className="hover:underline">
            +91 98123 45678
          </a>
        </div>
      </div>

      {/* ⚪ MAIN NAVBAR */}
      <div className="bg-white shadow-md px-6 md:px-8 py-4 flex justify-between items-center">

        {/* LOGO (Clickable) */}
        <a href="/" className="text-2xl font-bold text-blue-600 tracking-wide">
          SkyElectrition
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 items-center">

          <li>
            <a href="/" className="hover:text-blue-600 transition">Home</a>
          </li>

          <li>
            <a href="/about-page" className="hover:text-blue-600 transition">About</a>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <span className="cursor-pointer hover:text-blue-600">
              Services ▾
            </span>

            {serviceOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-3 w-52">
                <a href="/ac-repair-chandigarh" className="block py-2 hover:text-blue-600">
                  AC Repair
                </a>
                <a href="/washing-machine-repair-chandigarh" className="block py-2 hover:text-blue-600">
                  Washing Machine
                </a>
                <a href="/fridge-repair-chandigarh" className="block py-2 hover:text-blue-600">
                  Fridge Repair
                </a>
              </div>
            )}
          </li>

          <li
            onClick={() => {
              console.log("CLICK WORKING");
              setOpenPopup(true);
            }}
            className="hover:text-blue-600 cursor-pointer"
          >
            Contact
          </li>

        </ul>

        {/* CALL BUTTON */}
        <a
          href="tel:+919876543210"
          className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition font-semibold"
        >
          Call Now
        </a>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>
      </div>

      {/* 📱 MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <FaTimes className="cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col p-4 gap-4 text-gray-700">

          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about-page" onClick={() => setMenuOpen(false)}>About</a>

          {/* SERVICES */}
          <div>
            <p className="font-semibold mb-2">Services</p>
            <div className="flex flex-col gap-2 pl-3">
              <a href="/ac-repair-chandigarh" onClick={() => setMenuOpen(false)}>
                AC Repair
              </a>
              <a href="/washing-machine-repair-chandigarh" onClick={() => setMenuOpen(false)}>
                Washing Machine
              </a>
              <a href="/fridge-repair-chandigarh" onClick={() => setMenuOpen(false)}>
                Fridge Repair
              </a>
            </div>
          </div>

          <a
            onClick={() => {
              setMenuOpen(false);
              setOpenPopup(true);
            }}
          >
            Contact
          </a>

          {/* CALL BUTTON */}
          <a
            href="tel:+919876543210"
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-center mt-4"
          >
            Call Now
          </a>

        </ul>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}