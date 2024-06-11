import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
// import VinylsDisplay from "./pages/VinylsDisplay";

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
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
