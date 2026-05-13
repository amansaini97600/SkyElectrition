import { useEffect, useState } from "react";
import { FaTimes, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function LeadPopup({ trigger, setTrigger }) {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "AC Repair",
    problem: "",
    location: "",
  });

  // 🔥 AUTO POPUP (always after 5 sec)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      getLocation();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 MANUAL TRIGGER (always works)
  useEffect(() => {
    if (trigger) {
      setShow(true);
      setTrigger(false); // reset
      getLocation();
    }
  }, [trigger]);

  // 📍 Location Fetch
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const link = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
          setForm((prev) => ({ ...prev, location: link }));
        },
        () => {
          console.log("Location denied");
        }
      );
    }
  };

  // 📝 Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ❌ Safe Close
  const isFilled = form.name || form.phone || form.problem;

  const handleClose = () => {
    if (isFilled) {
      if (window.confirm("Form me data bhara hai, close karna hai?")) {
        setShow(false);
      }
    } else {
      setShow(false);
    }
  };

  // 🚀 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let locationText = form.location || "Location not shared";

    // 👉 agar location nahi di → problem me add kar do
    if (!form.location) {
      locationText = "User will explain location in problem section";
    }

    const msg = `Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Problem: ${form.problem}
Location: ${locationText}`;

    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-[90%] md:w-[420px] rounded-2xl p-6 relative shadow-xl animate-fadeIn">

        {/* CLOSE */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <FaTimes />
        </button>

        {/* TITLE */}
        <h2 className="text-xl font-bold text-center mb-1">
          Book Service ₹299
        </h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          Fast Repair in Chandigarh
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="service"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>AC Repair</option>
            <option>Fridge Repair</option>
            <option>Washing Machine</option>
          </select>

          <textarea
            name="problem"
            placeholder="Describe your problem or address (if location not shared)"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg h-20"
          />

          {/* 📍 Location Button */}
          <button
            type="button"
            onClick={getLocation}
            className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
          >
            <FaMapMarkerAlt /> Use My Location
          </button>

          <button className="w-full bg-green-500 text-white py-3 rounded-lg flex justify-center gap-2 hover:bg-green-600">
            <FaWhatsapp /> Send on WhatsApp
          </button>

        </form>
      </div>
    </div>
  );
}