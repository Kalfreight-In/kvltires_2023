import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import RoadsideAss from "./pages/RoadsideAssistance";
import OTRTires from "./pages/OTRTires";
import RetreadTires from "./pages/Retread";
import HunterAlignment from "./pages/Hunter";
import PassengerTires from "./pages/PassengerTires";
import IndustrialTires from "./pages/Indusrtial";
import AgricultureTires from "./pages/Agriculture";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/RoadsideAssistance" element={<RoadsideAss />} />
        <Route path="/OTRTires" element={<OTRTires />} />
        <Route path="/RetreadTires" element={<RetreadTires />} />
        <Route path="/HunterAlignment" element={<HunterAlignment />} />
        <Route path="/PassengerTires" element={<PassengerTires />} />
        <Route path="/IndustrialTires" element={<IndustrialTires />} />
        <Route path="/AgricultureTires" element={<AgricultureTires />} />
      </Routes>
    </Router>
  );
}

export default App;
