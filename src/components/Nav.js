import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ nameList }) {
  return (
    <nav className="Nav">
      <NavLink exact to="/dogs">
        Home
      </NavLink>
      {nameList.map((name) => {
        return (
          <NavLink exact to={`/dogs/${name.toLowerCase()}`} key={name}>
            {name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Nav;
