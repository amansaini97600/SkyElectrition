import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, setOpenPopup }) {
  return (
    <>
      <Navbar setOpenPopup={setOpenPopup}/>

      {/* Content */}
      <div className="pt-[110px] min-h-screen">
        {children}
      </div>

      <Footer />
    </>
  );
}