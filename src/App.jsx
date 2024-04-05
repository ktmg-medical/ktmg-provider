import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import bg from './assets/Images/bg.jpg';

import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
