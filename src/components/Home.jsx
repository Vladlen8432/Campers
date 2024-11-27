import css from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={css.home}>
      <h1 className={css.titleHome}>Campers of your dreams</h1>
      <p className={css.descriptionHome}>
        You can find everything you want in our catalog
      </p>
      <button className={css.buttonHome} type="button">
        View Now
      </button>
    </div>
  );
};

export default Home;
