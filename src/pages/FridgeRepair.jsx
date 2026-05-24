import SEO from "../components/SEO";
import { FaPhoneAlt, FaWhatsapp, FaSnowflake } from "react-icons/fa";
import fridgeImage from "../assets/slider/fridge4.jpg";

export default function FridgeRepair() {
  return (
    <div className="bg-gray-50">
      <SEO
        title="Fridge Repair in Chandigarh | Service Starts ₹299"
        desc="Affordable fridge repair in Chandigarh. Single door, double door, cooling issues, gas refill at just ₹299."
        url="https://skyTechnician.com/fridge-repair-chandigarh"
      />

      {/* HERO */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fridge Repair in Chandigarh
        </h1>
        <p className="mb-6 text-lg">
          Fast Repair | Expert Technicians | Visiting Charge ₹299
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+919068431054"
            className="bg-green-500 px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href="https://wa.me/919068431054"
            target="_blank"
            className="bg-white text-green-600 px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      {/* IMAGE + PRICE */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* IMAGE */}
          <div>
            <img
              src={fridgeImage} // apni image daal dena
              alt="Fridge Repair Service"
              className="rounded-2xl shadow-lg w-full h-[250px] md:h-[350px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Service Starts at <span className="text-green-600">₹299</span>
            </h2>

            <p className="text-gray-600 mb-6">
              Single door, double door aur inverter fridge ki sabhi problems ka
              fast solution. Cooling issue ho ya gas refill — sab kuch available.
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="tel:+919068431054"
                className="bg-green-500 text-white px-5 py-3 rounded-xl flex items-center gap-2 shadow hover:scale-105 transition"
              >
                <FaPhoneAlt /> Call Now
              </a>

              <a
                href="https://wa.me/919068431054"
                target="_blank"
                className="bg-white text-green-600 border px-5 py-3 rounded-xl flex items-center gap-2 shadow hover:scale-105 transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* PROBLEMS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Fridge Problems We Solve
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Fridge Not Cooling",
              desc: "Cooling issue ya compressor problem fix kiya jata hai",
            },
            {
              title: "Gas Refill",
              desc: "Low cooling ke liye gas refill service available",
            },
            {
              title: "Water Leakage",
              desc: "Drain blockage ya pipe issue repair",
            },
            {
              title: "Freezer Not Working",
              desc: "Freezer cooling aur ice problem solve kiya jata hai",
            },
            {
              title: "Excess Noise",
              desc: "Motor ya internal parts ki awaz fix ki jati hai",
            },
            {
              title: "Door Seal Issue",
              desc: "Rubber gasket replace karke cooling improve ki jati hai",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <FaSnowflake className="text-cyan-500 text-2xl mb-3" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Same day service, trained technicians, lowest pricing aur 1000+ happy
          customers. Chandigarh me fastest fridge repair service.
        </p>
      </div>

      {/* FINAL CTA */}
      <div className="bg-green-500 text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-3">
          Book Your Fridge Repair Now
        </h2>
        <a
          href="tel:+919068431054"
          className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}