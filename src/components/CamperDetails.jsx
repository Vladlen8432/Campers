import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCamperById } from "../services/api";
import css from "./styles/CamperDetails.module.css";
import FormComponent from "./Form";

const CamperDetails = () => {
  const params = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    fetchCamperById(params.id)
      .then((data) => setCamper(data))
      .catch((error) => console.error("Error fetching camper:", error));
  }, [params.id]);

  if (!camper) return <p>Loading...</p>;

  return (
    <div>
      <h3>{camper.name}</h3>
      <div className={css.containerRatingLocation}>
        <p className={css.rating}>{camper.rating}</p>
        <p className={css.location}>{camper.location}</p>
      </div>
      {camper.gallery && (
        <ul className={css.imageGalleryList}>
          {camper.gallery.map((image, index) => (
            <li key={index}>
              <img
                className={css.imgGallery}
                src={image.thumb}
                alt="img-gallery"
              />
            </li>
          ))}
        </ul>
      )}
      <p>{camper.description}</p>

      <ul className={css.listFeaturesReviewsNav}>
        <li>
          <NavLink to={`/campers/${params.id}/features`}>Features</NavLink>
        </li>

        <li>
          <NavLink to={`/campers/${params.id}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
      <FormComponent />
    </div>
  );
};

export default CamperDetails;
