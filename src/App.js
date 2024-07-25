import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NAveeeee from "./Project/NAveeeee.jsx";

import Footer from "./Project/Footer.js";
import DifferentTous from "./Project/DifferentTous.js";
import Information from "./Project/Information.js";
import Bali from "./RouterComponent/Bali.js";
import Australia from "./RouterComponent/Australia.js";

function App() {
  return (
    <div>
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NAveeeee />} />
          <Route path="/bali" element={<Bali />} />
          <Route path="/australia" element={<Australia />} />
        </Routes>

        <Footer />
        <DifferentTous />
        <Information />
      </BrowserRouter>
    </div>
  );
}

export default App;
