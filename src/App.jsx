import { useState } from "react";
import { Routes, Route } from "react-router-dom";                     
import Home from "./pages/Home";   
import ACRepair from "./pages/ACRepair";
import WashingRepair from "./pages/WashingRepair";
import FridgeRepair from "./pages/FridgeRepair";   
import Layout from "./components/Layout";       
import About from "./components/about";
import LeadPopup from "./components/LeadPopup";       

function App() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <Layout setOpenPopup={setOpenPopup}>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ac-repair-chandigarh" element={<ACRepair />} />
        <Route path="/washing-machine-repair-chandigarh" element={<WashingRepair />} />
        <Route path="/fridge-repair-chandigarh" element={<FridgeRepair />} />
        <Route path="/about-page" element={<About />} />
      </Routes>

      {/* 🔥 Single Popup */}
      <LeadPopup trigger={openPopup} setTrigger={setOpenPopup} />

    </Layout>
  );
}

export default App;