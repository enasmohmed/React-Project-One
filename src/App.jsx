import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";

export default function App() {



  const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Navigate to="/startFramework" />} />
            <Route path="startFramework" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/*"
              element={
                <div className="vh-100 bg-info d-flex justify-content-center align-items-center">
                  <h1>404 Not Found</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    );
  };
}



