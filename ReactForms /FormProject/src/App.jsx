import { Route, Routes } from "react-router-dom";
import "./App.css";

import RandomPhoto from "./components/RandomPhoto";
import Tasarim from "./components/Tasarim";
import NavbarPage from "./components/NavbarPage";
import Footer from "./components/Footer";
import Sigorta from "./components/Sigorta";
import Mantine from "./components/Mantine";

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Routes>
        <Route path="/RandomPhoto" element={<RandomPhoto />} />
        <Route path="/Tasarim" element={<Tasarim />} />
        <Route path="/Sigorta" element={<Sigorta />} />
        <Route path="/Mantine" element={<Mantine />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
