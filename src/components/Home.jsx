import { NavLink } from "react-router-dom";
import css from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={css.home}>
      <h1 className={css.titleHome}>Campers of your dreams</h1>
      <p className={css.descriptionHome}>
        You can find everything you want in our catalog
      </p>
      <NavLink className={css.viewNow} to="/campers">
        View Now
      </NavLink>
    </div>
  );
};

export default Home;
