import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">TravelTrucks</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/campers">Catalog</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
