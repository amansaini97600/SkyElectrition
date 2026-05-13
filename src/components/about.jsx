import SEO from "../components/SEO";
import { FaPhoneAlt, FaWhatsapp, FaTools, FaUserCheck } from "react-icons/fa";
import teamImage from "../assets/slider/team.webp"

export default function About() {
  return (
    <div className="bg-gray-50">
      <SEO
        title="About SkyElectrition | AC, Fridge & Washing Machine Repair Chandigarh"
        desc="SkyElectrition provides expert AC, fridge, and washing machine repair services in Chandigarh at affordable prices."
        url="https://yourdomain.com/about"
      />

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About SkyElectrition
        </h1>
        <p className="text-lg">
          Trusted Repair Service in Chandigarh
        </p>
      </div>

      {/* IMAGE + ABOUT */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* IMAGE */}
          <div>
            <img
              src={teamImage} // apni image daal dena
              alt="SkyElectrition Team"
              className="rounded-2xl shadow-lg w-full h-[250px] md:h-[350px] object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4">
              SkyElectrition Chandigarh ka ek trusted repair service provider hai
              jo AC repair, washing machine repair aur fridge repair me expert hai.
              Humara goal hai ki har customer ko fast aur affordable service mile.
            </p>

            <p className="text-gray-600">
              Hamare technicians experienced aur verified hain, jo har type ki
              problem ko jaldi aur sahi tarike se fix karte hain.
            </p>
          </div>

        </div>
      </div>

      {/* SERVICES */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "AC Repair & Service",
            "Washing Machine Repair",
            "Fridge Repair",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <FaTools className="text-blue-500 text-2xl mx-auto mb-3" />
              <h3 className="font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose SkyElectrition?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Same Day Service",
            "Experienced Technicians",
            "Affordable Pricing (₹299)",
            "Trusted by 1000+ Customers",
            "Fast Response",
            "All Problems Solution",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-5 rounded-xl shadow text-center"
            >
              <FaUserCheck className="text-green-500 text-xl mx-auto mb-2" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-500 text-white text-center py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          Need Repair Service in Chandigarh?
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+919876543210"
            className="bg-white text-green-600 px-6 py-3 rounded-xl flex items-center gap-2 shadow hover:scale-105 transition"
          >
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow hover:scale-105 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}