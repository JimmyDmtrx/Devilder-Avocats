import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {React} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/Notfound";
import "./App.css";
import Secteurs from "./pages/Secteurs";
import Equipe from "./pages/Equipe";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
import Concurrence from "./pages/Expertise/Concurrence.js";
import Distribution from "./pages/Expertise/Distribution.js";
import Immobilier from "./pages/Expertise/Immobilier.js";
import Contentieux from "./pages/Expertise/Contentieux.js";
import ContratsCommerciaux from "./pages/Expertise/ContratsCommerciaux.js";


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/secteurs" element={<Secteurs />} />
        <Route path="/expertises" element={<Expertise />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/commercial-contrat" element={<ContratsCommerciaux />} />
        <Route path="/concurrence" element={<Concurrence />} />
        <Route path="/distribution" element={<Distribution />} />
        <Route path="/immobilier" element={<Immobilier />} />
        <Route path="/contentieux" element={<Contentieux />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
