import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import heroImg from "../assets/hero/hero.avif";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white pt-[120px] pb-16 px-6">

      {/* 🔥 Background Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="AC Repair"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* 🔥 Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          >
            AC Repair in Chandigarh <br />
            <span className="text-blue-400">
              Fast & Reliable Service
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg mb-6 text-gray-200"
          >
            Get expert technicians at your doorstep. Same day service
            for AC, Fridge repair.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <a
              href="tel:+919068431054"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/919068431054"
              className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold transition"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </motion.div>

          {/* TRUST POINTS */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              Same Day Service
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              Verified Technicians
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              Affordable Pricing
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE (optional overlay card style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <img
            src={heroImg}
            alt="Service"
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>

      </div>
    </div>
  );
}