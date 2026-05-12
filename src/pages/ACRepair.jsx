import SEO from "../components/SEO";
import { FaPhoneAlt } from "react-icons/fa";

export default function ACRepair() {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <SEO
        title="AC Repair in Chandigarh | Same Day Service"
        desc="Best AC repair in Chandigarh. Split & Window AC service, gas refill, installation. Call now for fast service."
        url="https://yourdomain.com/ac-repair-chandigarh"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        AC Repair in Chandigarh
      </h1>

      <p className="text-gray-600 mb-6">
        We provide fast and affordable AC repair services in Chandigarh. Our expert technicians handle
        split AC, window AC, gas refill, installation and maintenance.
      </p>

      <a
        href="tel:+919876543210"
        className="bg-green-500 text-white px-6 py-3 rounded-xl inline-flex items-center gap-2"
      >
        <FaPhoneAlt /> Call Now
      </a>

      {/* Content (SEO ke liye important) */}
      <div className="mt-8 space-y-4 text-gray-700">
        <h2 className="text-xl font-semibold">Our AC Services</h2>
        <ul className="list-disc pl-6">
          <li>Split AC Repair</li>
          <li>Window AC Service</li>
          <li>Gas Refill</li>
          <li>Installation & Uninstallation</li>
        </ul>

        <h2 className="text-xl font-semibold">Why Choose Us?</h2>
        <p>
          Same day service, verified technicians, affordable pricing and 1000+ satisfied customers in Chandigarh.
        </p>
      </div>
    </div>
  );
}