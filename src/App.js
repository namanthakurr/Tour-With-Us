import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
 
 

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NAveeeee from "./Project/NAveeeee.jsx";

import Footer from "./Project/Footer.js";
 
import Information from "./Project/Information.js";
<<<<<<< Updated upstream
import Bali from "./RouterComponent/Bali.js";
import Australia from "./RouterComponent/Australia.js";
import Rajasthan from "./Rajasthan/Rajasthan.jsx";

import CardsRajasthan from "./Rajasthan/CardsRajasthan.jsx";
=======
 
>>>>>>> Stashed changes

function App() {
  return (
    <div>
      <Rajasthan/>
      
      {/* <CardsRajasthan /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<NAveeeee />} />
        </Routes>

        <Footer />  
        <Information />
<<<<<<< Updated upstream
      </BrowserRouter> */}
=======
      </BrowserRouter>

 
       
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
