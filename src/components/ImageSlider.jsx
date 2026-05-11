import { useEffect, useRef } from "react";

// 👉 Images import karo
import img1 from "../assets/slider/image1.jpg";
import img2 from "../assets/slider/image2.webp";
import img3 from "../assets/slider/image3.webp";
import img4 from "../assets/slider/image4.webp";
import img5 from "../assets/slider/image5.webp";
import img6 from "../assets/slider/image6.webp";
import img7 from "../assets/slider/image7.jpg";
import img8 from "../assets/slider/image8.jpg";
import img9 from "../assets/slider/woshing1.webp";
import img10 from "../assets/slider/woshing2.webp";
import img11 from "../assets/slider/woshing3.webp";
import img12 from "../assets/slider/fridge1.avif";
import img13 from "../assets/slider/fridge2.webp";
import img14 from "../assets/slider/fridge3.webp";
import img15 from "../assets/slider/fridge4.jpg";


export default function ImageSlider() {
  const sliderRef = useRef();

  const images = [img1, img11, img15, img2, img10, img3, img4, img9, img5, img14, img6, img13, img7, img8, img12];

  useEffect(() => {
    const slider = sliderRef.current;

    let scrollAmount = 0;

    const slide = () => {
      if (slider) {
        scrollAmount += 1; // speed control
        slider.scrollLeft = scrollAmount;

        // infinite loop effect
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(slide, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Recent Work
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-hidden px-6"
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="min-w-[200px] md:min-w-[250px] lg:min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
          >
            <img
              src={img}
              alt="service"
              className="w-full h-[180px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}