import { Routes, Route } from "react-router-dom";                     
import Home from "./pages/Home";   
import ACRepair from "./pages/ACRepair";
import WashingRepair from "./pages/WashingRepair";
import FridgeRepair from "./pages/FridgeRepair";            
import ACLanding from "./pages/ACLanding";     
import Layout from "./components/Layout";       

function App() {
   return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ac-repair-chandigarh" element={<ACRepair />} />
        <Route path="/washing-machine-repair-chandigarh" element={<WashingRepair />} />
        <Route path="/fridge-repair-chandigarh" element={<FridgeRepair />} />
        <Route path="/ACLanding-chandigarh" element={<ACLanding />} />
      </Routes>
    </Layout>
  );
}

export default App
