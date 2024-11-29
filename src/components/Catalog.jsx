import { useState } from "react";
import css from "./styles/Catalog.module.css";
import { useEffect } from "react";
import { fetchCampers } from "../services/api";
// import { Link } from "react-router-dom";

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampers().then((data) => {
      setCampers(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={css.containerCatalog}>
      <div className={css.containerFilter}>
        <form>
          <div>
            <label htmlFor="location">Location</label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor="filters">Filters</label>
            <h3>Vehicle equipment</h3>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <h3>Vehicle type</h3>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className={css.containerContent}>
        <ul>
          {campers.length > 0 ? (
            <ul>
              {campers.map((camper) => (
                <li className={css.listItemCamper} key={camper.id}>
                  {/* <Link to={`/campers/${camper.id}`}>{camper.name}</Link> */}
                  <img
                    className={css.imageCamper}
                    src={camper.gallery[0].thumb}
                    alt="camper"
                  />
                  <div className={css.camperOverlay}>
                    <div className={css.namePrice}>
                      <h2>{camper.name}</h2>
                      <div className={css.priceFavorite}>
                        <h2 className={css.price}>{camper.price}</h2>
                        <img src="" alt="heart" />
                      </div>
                    </div>
                    <p className={css.camperDescription}>{camper.description}</p>
                    <form>
                      <input type="checkbox" />
                      <input type="checkbox" />
                      <input type="checkbox" />
                    </form>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No campers found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
