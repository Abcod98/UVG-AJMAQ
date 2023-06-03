import "./NavBar.css"
import { NavLink } from "react-router-dom";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Tilt+Warp&display=swap');
</style>

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-brand"><img src="https://i.pinimg.com/280x280_RS/e3/00/f9/e300f9bae2c79a5dc1aed247ff89f7ba.jpg" alt="logo ajmaq" /></div>
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
            to="/products"
          >
            Productos
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
