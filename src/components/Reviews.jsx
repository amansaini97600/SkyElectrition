import { useEffect, useState } from "react";

export default function Reviews() {
  const reviews = [
    "AC cooling issue fixed quickly. Very professional service.",
    "Washing machine repair done same day. Highly recommended!",
    "Fridge not cooling problem solved in 1 hour.",
    "Split AC gas refill service was fast and affordable.",
    "Technician was very polite and skilled.",
    "Fully automatic washing machine repair perfect.",
    "Window AC service done neatly.",
    "Double door fridge repaired quickly.",
    "AC installation done professionally.",
    "Best repair service in Chandigarh!"
  ];

  const names = [
    "Rahul Sharma",
    "Amit Verma",
    "Neha Singh",
    "Rohit Kumar",
    "Priya Mehta",
    "Sanjay Gupta",
    "Ankit Jain",
    "Pooja Arora",
    "Deepak Yadav",
    "Simran Kaur"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 text-center bg-white">

      <h2 className="text-3xl font-bold mb-2">Customer Reviews</h2>
      <p className="text-gray-600 mb-10">
        Customer satisfaction is our top priority
      </p>

      <div className="flex justify-center gap-6 px-6">

        {[0, 1].map((i) => {
          const current = (index + i) % reviews.length;

          return (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl shadow max-w-md"
            >
              <p className="mb-4 text-gray-700">
                "{reviews[current]}"
              </p>

              <h3 className="font-semibold">
                {names[current]}
              </h3>

              <p className="text-sm text-gray-500">Customer</p>
            </div>
          );
        })}

      </div>
    </div>
  );
}