import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* 🔵 COMPANY */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            ServiceOnWheel
          </h2>
          <p className="text-sm">
            We provide expert AC, Fridge, Washing Machine & all electronic repair services in Chandigarh with fast and reliable service.
          </p>
        </div>

        {/* 🔵 SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>

          <ul className="space-y-2 text-sm">
            <li><a href="/ac-repair-chandigarh" className="hover:text-white">AC Repair</a></li>
            <li><a href="/washing-machine-repair-chandigarh" className="hover:text-white">Washing Machine Repair</a></li>
            <li><a href="/fridge-repair-chandigarh" className="hover:text-white">Fridge Repair</a></li>
            <li><a href="#" className="hover:text-white">LED TV Repair</a></li>
          </ul>
        </div>

        {/* 🔵 CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> 
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope /> support@email.com
            </li>

            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Chandigarh, India
            </li>
          </ul>
        </div>

        {/* 🔵 SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>

            <a href="https://wa.me/919876543210" className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* 🔻 BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2026 ServiceOnWheel | All Rights Reserved
      </div>

    </footer>
  );
}