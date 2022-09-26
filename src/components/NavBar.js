import "./NavBar.css";

//components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

const NavBar = () => {
  return <nav id="nav">
    <Link to="/">ReactGram</Link>
    <form>
        <BsSearch/>
        <input type="text"/>
    </form>
    <ul id="nav-links">
        <NavLink to="nav-links">
            <BsHouseDoorFill/>
        </NavLink>
        <NavLink to="/login">
            Entrar
        </NavLink>
        <NavLink to="/register">
            Cadastrar
        </NavLink>
    </ul>
  </nav>
};

export default NavBar;