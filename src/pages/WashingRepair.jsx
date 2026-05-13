import SEO from "../components/SEO";
import { FaPhoneAlt, FaWhatsapp, FaTools } from "react-icons/fa";
import washingImage from "../assets/slider/woshing1.webp";

export default function WashingRepair() {
  return (
    <div className="bg-gray-50">
      <SEO
        title="Washing Machine Repair in Chandigarh | Service Starts ₹299"
        desc="Affordable washing machine repair in Chandigarh. Fully automatic, semi-automatic, front load service at just ₹299."
        url="https://yourdomain.com/washing-machine-repair-chandigarh"
      />

      {/* HERO */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Washing Machine Repair in Chandigarh
        </h1>
        <p className="mb-6 text-lg">
          Fast Repair | Expert Technicians | Starting ₹299
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+919876543210"
            className="bg-green-500 px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="bg-white text-green-600 px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:scale-105 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      {/* IMAGE + PRICE SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* IMAGE */}
          <div>
            <img
              src={washingImage} // apni image daal dena
              alt="Washing Machine Repair"
              className="rounded-2xl shadow-lg w-full h-[250px] md:h-[350px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Service Starts at <span className="text-green-600">₹299</span>
            </h2>

            <p className="text-gray-600 mb-6">
              Fully automatic, semi-automatic aur front load washing machine ki
              sabhi problems ka solution ek hi jagah.
            </p>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="tel:+919876543210"
                className="bg-green-500 text-white px-5 py-3 rounded-xl flex items-center gap-2 shadow hover:scale-105 transition"
              >
                <FaPhoneAlt /> Call Now
              </a>

              <a
                href="https://wa.me/919876543210"
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
          Washing Machine Problems We Solve
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Machine Not Starting",
              desc: "Power ya internal wiring issue fix kiya jata hai",
            },
            {
              title: "Water Not Draining",
              desc: "Drain pump ya pipe blockage repair",
            },
            {
              title: "Machine Not Spinning",
              desc: "Motor ya belt issue solve kiya jata hai",
            },
            {
              title: "Excess Noise",
              desc: "Drum ya bearing problem ko fix kiya jata hai",
            },
            {
              title: "Water Leakage",
              desc: "Pipe ya seal issue ko repair kiya jata hai",
            },
            {
              title: "Installation",
              desc: "New machine installation & setup",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <FaTools className="text-indigo-500 text-2xl mb-3" />
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
          customers. Chandigarh me fastest washing machine repair service.
        </p>
      </div>

      {/* FINAL CTA */}
      <div className="bg-green-500 text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-3">
          Book Your Washing Machine Service Now
        </h2>
        <a
          href="tel:+919876543210"
          className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}