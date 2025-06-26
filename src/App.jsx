import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CargoDocumentation from "./pages/CargoDocumentation";
import Enquiries from "./pages/Enquiries";
import Guidelines from "./pages/Guidelines";
import MiniBlog from "./pages/MiniBlog";
import PortAgency from "./pages/PortAgency";
import Procurement from "./pages/Procurement";
import ProjectCargo from "./pages/ProjectCargo";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/cargodocumentation" element={<CargoDocumentation />} />
        <Route path="/services/projectcargo" element={<ProjectCargo />} />
        <Route path="/services/procurement" element={<Procurement />} />
        <Route path="/services/portagency" element={<PortAgency />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/miniblog" element={<MiniBlog />} />
      </Routes>
    </Router>
  );
}
