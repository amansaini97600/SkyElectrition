import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* Content */}
      <div className="pt-[110px] min-h-screen">
        {children}
      </div>

      <Footer />
    </>
  );
}