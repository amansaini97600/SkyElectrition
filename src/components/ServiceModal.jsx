import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ServiceModal({ isOpen, onClose, service }) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 min timer

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  // format time
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative shadow-2xl overflow-hidden"
      >

        {/* 🔥 Gradient Top Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        {/* ❌ Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        {/* 🔥 LIMITED OFFER */}
        <div className="text-center mb-3">
          <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
            🔥 Limited Time Offer
          </span>
        </div>

        {/* ⏳ TIMER */}
        <p className="text-center text-red-500 font-semibold mb-4">
          Offer ends in: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>

        {/* 🧾 TITLE */}
        <h2 className="text-2xl font-bold text-center mb-1">
          {service.title}
        </h2>

        <p className="text-center text-gray-500 mb-4">
          SkyTecnician - Best Same Day Service
        </p>

        {/* 💰 PRICE BOX */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-4 mb-4 text-center">

          <p className="font-semibold text-lg">
            Visiting Charge:{" "}
            <span className="line-through text-gray-400 mr-2">₹500</span>
            <span className="text-green-600 font-bold">₹{service.visit}</span>
          </p>

          <p className="font-semibold text-lg mt-2">
            Service Charge:{" "}
            <span className="line-through text-gray-400 mr-2">
              ₹{service.price + 200}
            </span>
            <span className="text-green-600 font-bold">
              ₹{service.price} Only
            </span>
          </p>

          {/* 💸 SAVE BADGE */}
          <div className="mt-2">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
              Save ₹200 Today
            </span>
          </div>
        </div>

        {/* 📄 DESC */}
        <p className="text-gray-600 text-sm mb-6 text-center">
          {service.desc}
        </p>

        {/* 📞 CTA */}
        <div className="flex gap-4">

          <a
            href="tel:+919068431054"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold"
          >
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href="https://wa.me/919068431054"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold"
          >
            <FaWhatsapp /> WhatsApp
          </a>

        </div>

      </motion.div>
    </div>
  );
}