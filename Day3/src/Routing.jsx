import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const Routing = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">🏠 Home</Link>
          </li>

          <li>
            <Link to="/about">ℹ️ About</Link>
          </li>

          <li>
            <Link to="/contact">📞 Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="route-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Routing;