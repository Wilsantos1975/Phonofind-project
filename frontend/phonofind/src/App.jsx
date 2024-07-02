import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import DisplayAlbum from "./pages/DisplayAlbum";

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
            <Route path="/albums/:id" element={<DisplayAlbum />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
