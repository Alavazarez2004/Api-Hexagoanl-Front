import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Pago from "./pages/Pago";
import React from 'react';
import '../src/index.css';
import PagarSuscripcion from "./pages/PagarSuscripcion";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/*<Route path="/" element={<Pago />} />*/}
        <Route path="/" element={<PagarSuscripcion />} />
      </Routes>
  </Router>
  );
};

export default App;