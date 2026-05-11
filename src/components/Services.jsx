import { motion } from "framer-motion";

import ac from "../assets/slider/image1.jpg";
import washing from "../assets/slider/woshing2.webp";
import fridge from "../assets/slider/fridge1.avif";
import aiwash from "../assets/slider/woshing3.webp";
import electronic from "../assets/slider/image4.webp";

export default function Services() {
  const services = [
    {
      title: "AC Repair",
      desc: "Split & Window AC repair, gas refill, installation & service.",
      img: ac,
    },
    {
      title: "Washing Machine Repair",
      desc: "Fully automatic & semi-automatic machine repair service.",
      img: washing,
    },
    {
      title: "Fridge Repair",
      desc: "Single & double door fridge repair with fast service.",
      img: fridge,
    },
    {
      title: "AI Washing Machine",
      desc: "Advanced AI washing machine repair by expert technicians.",
      img: aiwash,
    },
    {
      title: "All Electronics Repair",
      desc: "TV, LED, cooler & all electronic appliances repair service.",
      img: electronic,
    },
  ];

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
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[200px] object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {service.desc}
              </p>

              <a
                href="tel:+919876543210"
                className="text-blue-600 font-semibold hover:underline"
              >
                Book Service →
              </a>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}