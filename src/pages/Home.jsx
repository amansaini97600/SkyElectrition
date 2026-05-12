import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ImageSlider from "../components/ImageSlider";
import Trust from "../components/Trust";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <ImageSlider /> 
            <Trust />
            <Reviews />

            <div className="fixed bottom-4 right-4 flex flex-col gap-3">

                <a
                    href="tel:+919876543210"
                    className="bg-green-500 p-4 rounded-full text-white shadow-lg"
                >
                    <FaPhoneAlt />
                </a>

                <a
                    href="https://wa.me/919876543210"
                    className="bg-blue-500 p-4 rounded-full text-white shadow-lg"
                >
                    <FaWhatsapp />
                </a>

            </div>
        </div>
    );
}