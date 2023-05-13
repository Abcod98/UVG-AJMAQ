import "./NavBar.css"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">Ajmaq</div>
      <ul className="navbar-links">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active navbar-link" : "notActive navbar-link")}
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active navbar-link" : "notActive navbar-link")}
            to="/contacto"
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active navbar-link" : "notActive navbar-link")}
            to="/about"
          >
            Sobre Nosotros
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
