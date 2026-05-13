import SEO from "../components/SEO";
import { FaPhoneAlt, FaWhatsapp, FaSnowflake } from "react-icons/fa";
import acImage from "../assets/slider/image2.webp";

export default function ACRepair() {
  return (
    <div className="bg-gray-50">
      <SEO
        title="AC Repair in Chandigarh | Service Starts ₹299"
        desc="Affordable AC repair in Chandigarh. Gas refill, cooling issue, installation & more. Book now at just ₹299."
        url="https://yourdomain.com/ac-repair-chandigarh"
      />

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AC Repair in Chandigarh
        </h1>
        <p className="mb-6 text-lg">
          Fast Service | Expert Technicians | Starting at just ₹299
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
              src={acImage}
              alt="AC Repair Service"
              className="rounded-2xl shadow-lg w-full h-[250px] md:h-[350px] object-cover"
            />
          </div>

          {/* PRICE + CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Service Starts at <span className="text-green-600">₹299</span>
            </h2>

            <p className="text-gray-600 mb-6">
              Sabse kam price me best AC repair service. Cooling issue, gas refill,
              installation sab kuch ek hi jagah.
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

      {/* AC PROBLEMS GRID */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          AC Problems We Solve
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AC Not Cooling",
              desc: "Cooling issue, gas leakage ya compressor problem fix karte hain",
            },
            {
              title: "Water Leakage",
              desc: "Drain blockage ya pipe issue ko solve kiya jata hai",
            },
            {
              title: "AC Not Starting",
              desc: "Electrical ya PCB issue repair kiya jata hai",
            },
            {
              title: "Gas Refill",
              desc: "Low cooling ke liye gas refill service available",
            },
            {
              title: "Noise Problem",
              desc: "Fan ya internal part ki awaz ko fix karte hain",
            },
            {
              title: "Installation",
              desc: "Split & Window AC installation/uninstallation",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <FaSnowflake className="text-blue-500 text-2xl mb-3" />
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
          Same day service, trained technicians, lowest pricing, aur 1000+ happy customers.
          Hum Chandigarh me fastest AC repair service provide karte hain.
        </p>
      </div>

      {/* FINAL CTA */}
      <div className="bg-green-500 text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-3">
          Book Your AC Service Now
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