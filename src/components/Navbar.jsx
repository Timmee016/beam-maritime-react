import { Link } from "react-router-dom";
import logo from "/BEAM_MARITIME_Logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand logo-container" to="/">
          <img src={logo} alt="Beam Maritime Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/services/cargodocumentation">Cargo Documentation</Link></li>
                <li><Link className="dropdown-item" to="/services/projectcargo">Project Cargo</Link></li>
                <li><Link className="dropdown-item" to="/services/procurement">Procurement</Link></li>
                <li><Link className="dropdown-item" to="/services/portagency">Port Agency</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/enquiries">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/guidelines">Guidelines</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/miniblog">Mini Blog</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
