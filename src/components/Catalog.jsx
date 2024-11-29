import { useState } from "react";
import css from "./styles/Catalog.module.css";
import { useEffect } from "react";
import { fetchCampers } from "../services/api";
import { Link } from "react-router-dom";

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
        {campers.length > 0 ? (
          <ul className={css.listCamper}>
            {campers.map((camper) => (
              <li className={css.listItemCamper} key={camper.id}>
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

                  <div className={css.featureContainer}>
                    {[
                      { label: camper.transmission },
                      { label: camper.engine },
                      { label: "Air Conditioning", condition: camper.AC },
                      { label: "Bathroom", condition: camper.bathroom },
                      { label: "Kitchen", condition: camper.kitchen },
                      { label: "TV", condition: camper.TV },
                      { label: "Radio", condition: camper.radio },
                      { label: "Refrigerator", condition: camper.refrigerator },
                      { label: "Microwave", condition: camper.microwave },
                      { label: "Gas", condition: camper.gas },
                      { label: "Water", condition: camper.water },
                    ]
                      .filter(
                        (item) => item.condition === undefined || item.condition
                      )
                      .map((item, index) => (
                        <div key={index} className={css.featureItem}>
                          <p className={css.featureText}>{item.label}</p>
                        </div>
                      ))}
                  </div>
                </div>
                <Link to={`/campers/:camperId`}>Show more</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No campers found.</p>
        )}
      </div>
    </div>
  );
};

export default Catalog;
