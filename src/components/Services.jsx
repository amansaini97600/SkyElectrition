import { motion } from "framer-motion";
import { useState } from "react";
import ServiceModal from "./ServiceModal";

import ac from "../assets/slider/image1.jpg";
import washing from "../assets/slider/woshing2.webp";
import fridge from "../assets/slider/fridge1.avif";
import aiwash from "../assets/slider/woshing3.webp";
import electronic from "../assets/slider/image4.webp";
import doubleDoorFridge from "../assets/services/double_door_fridge.jpg";
import acGasRefill from "../assets/services/ac-gas-refilling-services.jpg";
import windowAc from "../assets/services/windowAcRepair.avif";

export default function Services() {
  const services = [
    {
      title: "AC Repair",
      desc: "Split & Window AC repair, gas refill, installation & service.",
      img: ac,
      visit: 299,
      price: 399,
    },
    {
      title: "Window AC Repair",
      desc: "Window AC repair with fast doorstep service.",
      img: windowAc,
      visit: 299,
      price: 399,
    },
    {
      title: "AC Gas Refill",
      desc: "AC gas filling & cooling issue repair at affordable price.",
      img: acGasRefill,
      visit: 299,
      price: 399,
    },

    {
      title: "Washing Machine Repair",
      desc: "Fully automatic & semi-automatic machine repair service.",
      img: washing,
      visit: 299,
      price: 399,
    },
    {
      title: "Double Door Fridge Repair",
      desc: "Expert repair for double door refrigerators.",
      img: doubleDoorFridge,
      visit: 299,
      price: 399,
    },
    {
      title: "Single Door Fridge Repair",
      desc: "Quick repair service for single door fridge.",
      img: fridge,
      visit: 299,
      price: 399,
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="py-16 bg-gray-50 px-6 text-center">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">
        Our Services
      </h2>
      <p className="text-gray-600 mb-10">
        We provide best repair services for all electronic appliances
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <a href={service.serviceLink}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[200px] object-cover hover:scale-110 transition duration-500"
                />
              </a>
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {service.desc}
              </p>
              <button
                onClick={() => setSelectedService(service)}
                className="text-green-600 font-semibold hover:underline"
              >
                More Details
              </button>
              <br />

              <a
                href="tel:+919068431054"
                className="text-blue-600 font-semibold hover:underline"
              >
                Book Service →
              </a>
            </div>

          </motion.div>
        ))}

        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService || {}}
        />

      </div>
    </div>

  );
}