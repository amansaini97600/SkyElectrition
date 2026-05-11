import { FaStar } from "react-icons/fa";
import img11 from "../assets/slider/woshing3.webp";

export default function Trust() {
  return (
    <div className="py-16 bg-gray-100 px-6 text-center">

      <h2 className="text-3xl font-bold mb-2">Why Us ?</h2>
      <p className="text-gray-600 mb-8">
        Over 100+ verified professionals all over Chandigarh with over a 5000+ happy customers
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* LEFT BOX */}
        <div className="relative rounded-xl overflow-hidden text-white p-8 bg-black">
          <img
            src={img11}  // 👈 yaha apni image dal
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          <div className="relative text-left">
            <p className="mb-4">
              Each of our expert technicians is highly trained to provide the best service.
              Once booked, expert will be at your place within 60 minutes.
            </p>

            <ul className="space-y-2 text-sm">
              <li>✔ Service within 60 Minutes</li>
              <li>✔ 24/7 Support</li>
              <li>✔ Best Prices</li>
              <li>✔ Highly trained professionals</li>
              <li>✔ Doorstep Service</li>
            </ul>
          </div>
        </div>

        {/* RIGHT BOXES */}
        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold">100</h2>
            <p className="text-gray-500">Plus Professionals</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold">5000</h2>
            <p className="text-gray-500">Plus Happy Customers</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-3xl font-bold">7</h2>
            <p className="text-gray-500">Plus Cities</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              4.5 <FaStar className="text-yellow-400" />
            </h2>
            <p className="text-gray-500">Rating</p>
          </div>

        </div>
      </div>
    </div>
  );
}