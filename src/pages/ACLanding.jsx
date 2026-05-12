import { FaPhoneAlt } from "react-icons/fa";

export default function ACLanding() {
  return (
    <div className="bg-white text-center px-6 py-10">

      {/* 🔥 HEADLINE */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        AC Repair in Chandigarh
      </h1>

      <p className="text-lg mb-6 text-gray-600">
        Same Day Service | Expert Technician | Affordable Price
      </p>

      {/* 🔥 CALL BUTTON */}
      <a
        href="tel:+919876543210"
        className="bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2"
      >
        <FaPhoneAlt />
        Call Now
      </a>

      {/* 🔥 TRUST */}
      <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
        <div>✔ 1000+ Happy Customers</div>
        <div>✔ Same Day Service</div>
        <div>✔ Verified Technicians</div>
      </div>

      {/* 🔥 SERVICES */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p>AC Repair, Gas Refill, Installation, Maintenance</p>
      </div>

    </div>
  );
}