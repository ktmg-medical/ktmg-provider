import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import bg from './assets/Images/bg.jpg';

import Home from "./Pages/Home/Home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

/*Locations */
import AgouraHills from "./Pages/Locations/AgouraHills";
import Arcadia from "./Pages/Locations/Arcadia";
import BeverlyHills from "./Pages/Locations/BeverlyHills";
import CanyonCountry from "./Pages/Locations/CanyonCountry";
import CulverCity from "./Pages/Locations/CulverCity";
import Downey from "./Pages/Locations/Downey";
import Glendale from "./Pages/Locations/Glendale";
import LaCanada from "./Pages/Locations/LaCanada";
import MissionHills from "./Pages/Locations/MissionHills";
import Northridge from "./Pages/Locations/Northridge";
import Pasadena from "./Pages/Locations/Pasadena";
import PicoRivera from "./Pages/Locations/PicoRivera";
import SanFernando from "./Pages/Locations/SanFernando";
import SantaMonica from "./Pages/Locations/SantaMonica";
import Tarzana from "./Pages/Locations/Tarzana";
import Torrance from "./Pages/Locations/Torrance";
import Valencia from "./Pages/Locations/Valencia";
import VanNuys from "./Pages/Locations/VanNuys";
import WestHills from "./Pages/Locations/WestHills";
import Whittier from "./Pages/Locations/Whittier";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BrowserRouter basename="/ktmg-provider">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agourahills" element={<AgouraHills />} />
            <Route path="/arcadia" element={<Arcadia />} />
            <Route path="/beverly" element={<BeverlyHills />} />
            <Route path="/canyoncountry" element={<CanyonCountry />} />
            <Route path="/culvercity" element={<CulverCity />} />
            <Route path="/downey" element={<Downey />} />
            <Route path="/glendale" element={<Glendale />} />
            <Route path="/lacanada" element={<LaCanada />} />
            <Route path="/northridge" element={<Northridge />} />
            <Route path="/missionhills" element={<MissionHills />} />
            <Route path="/pasadena" element={<Pasadena />} />
            <Route path="/picorivera" element={<PicoRivera />} />
            <Route path="/sanfernando" element={<SanFernando />} />
            <Route path="/santamonica" element={<SantaMonica />} />
            <Route path="/tarzana" element={<Tarzana />} />
            <Route path="/torrance" element={<Torrance />} />
            <Route path="/valencia" element={<Valencia />} />
            <Route path="/vannuys" element={<VanNuys />} />
            <Route path="/westhills" element={<WestHills />} />
            <Route path="/whittier" element={<Whittier />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
