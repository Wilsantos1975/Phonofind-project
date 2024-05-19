import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";

import Home from "./pages/Home";
import VinylsDisplay from "./pages/VinylsDisplay";

import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";

import "./App.css";

function App() {
  return (
    <div>
      
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vinyls" element={<VinylsDisplay />} />
          
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
