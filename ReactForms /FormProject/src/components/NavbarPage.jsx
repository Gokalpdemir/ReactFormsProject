import { NavLink } from "react-router-dom";
import icon from "../assets/ferrari.svg";

function NavbarPage() {
  return (
    <div className="navbar fixed-top">
      <div className="navDiv">
        <img src={icon} alt="" />
        <h3>FastMotors</h3>
      </div>
      <div>
        <NavLink to="/RandomPhoto">Katalog</NavLink>
        <NavLink to="/Tasarim">React Bootstrap</NavLink>
        <NavLink to="/Sigorta">Material UI</NavLink>
        <NavLink to="/Mantine">Mantine</NavLink>
      </div>
    </div>
  );
}

export default NavbarPage;
