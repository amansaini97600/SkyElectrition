import { useEffect, useState } from "react";
import { FaTimes, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function LeadPopup({ trigger, setTrigger }) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "AC Repair",
    problem: "",
    location: "",
  });

  // 🔥 AUTO POPUP
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 MANUAL TRIGGER
  useEffect(() => {
    if (trigger) {
      setShow(true);
      setTrigger(false);
    }
  }, [trigger]);

  // 💾 SAVE
  useEffect(() => {
    localStorage.setItem("leadForm", JSON.stringify(form));
  }, [form]);

  // 📥 LOAD
  useEffect(() => {
    const saved = localStorage.getItem("leadForm");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  // 🔔 TOAST
  const showToast = (msg, type = "success") => {
    setToast({ show: true, message: msg, type });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  // 📍 LOCATION
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const link = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
          setForm((prev) => ({ ...prev, location: link }));
          showToast("Location added ✅", "success");
        },
        () => {
          showToast("Location allow nahi kiya, address manually likh do", "error");
        }
      );
    } else {
      showToast("Location supported nahi hai", "error");
    }
  };

  // 📝 CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ❌ CLOSE
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

  // 🚀 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name) {
      showToast("Name fill karo", "error");
      return;
    }

    if (!form.phone) {
      showToast("Phone number fill karo", "error");
      return;
    }

    if (form.phone.length < 10) {
      showToast("Valid phone number daalo", "error");
      return;
    }

    setLoading(true);

    // 🔥 Location optional
    let locationText = form.location || "User will share on call";

    try {
      const res = await fetch("https://skyTechnician.com/server/api/save-lead.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          location: locationText,
        }),
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.log("Invalid JSON:", text);
        throw new Error("Invalid response");
      }

      if (data.status === "success") {
        showToast("Request sent successfully 🚀", "success");

        const msg = `Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Problem: ${form.problem}
Location: ${locationText}`;

        window.open(
          `https://wa.me/919068431054?text=${encodeURIComponent(msg)}`,
          "_blank"
        );

        // reset form
        setForm({
          name: "",
          phone: "",
          service: "AC Repair",
          problem: "",
          location: "",
        });

        setShow(false);
      } else {
        showToast("Something went wrong", "error");
      }

    } catch (err) {
      showToast("Server error, try again!", "error");
    }

    setLoading(false);
  };

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

        <div className="bg-white w-[90%] md:w-[420px] rounded-2xl p-6 relative shadow-xl">

          {/* CLOSE */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
          >
            <FaTimes />
          </button>

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
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              <option>AC Repair</option>
              <option>Fridge Repair</option>
              <option>Washing Machine</option>
            </select>

            <textarea
              name="problem"
              value={form.problem}
              placeholder="Problem + Address likh do (agar location allow nahi kiya)"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg h-20"
            />

            <button
              type="button"
              onClick={getLocation}
              className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
            >
              <FaMapMarkerAlt /> Use My Location
            </button>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-green-600"
            >
              {loading ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                <>
                  <FaWhatsapp /> Send on WhatsApp
                </>
              )}
            </button>

          </form>
        </div>
      </div>

      {/* 🔔 TOAST */}
      {toast.show && (
        <div
          className={`fixed bottom-5 right-5 px-4 py-3 rounded-lg text-white shadow-lg z-50
          ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {toast.message}
        </div>
      )}
    </>
  );
}