import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../services/api";
import css from "./styles/CamperDetails.module.css";

const CamperDetails = () => {
  const params = useParams();
  console.log(params);

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
              <img className={css.imgGallery} src={image.thumb} alt="img-gallery" />
            </li>
          ))}
        </ul>
      )}
      <p>{camper.description}</p>
    </div>
  );
};

export default CamperDetails;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchCamperById } from "../services/api";
// import css from "./styles/CamperDetails.module.css";

// const CamperDetails = () => {
//   const { id } = useParams();
//   const [camper, setCamper] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCamperById(id)
//       .then((data) => {
//         setCamper(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching camper:", error.message);
//         setLoading(false);
//         setCamper(null);
//       });
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!camper) return <p>Camper not found.</p>;

//   return (
//     <div className={css.container}>
//       <h1>{camper.name}</h1>
//       <div className={css.gallery}>
//         {camper.gallery.map((image, index) => (
//           <img key={index} src={image.original} alt={`Camper ${index + 1}`} />
//         ))}
//       </div>
//       <p className={css.description}>{camper.description}</p>
//       <div className={css.details}>
//         <h2>Specifications</h2>
//         <ul>
//           <li>Transmission: {camper.transmission}</li>
//           <li>Engine: {camper.engine}</li>
//           <li>Air Conditioning: {camper.AC ? "Yes" : "No"}</li>
//           <li>Bathroom: {camper.bathroom ? "Yes" : "No"}</li>
//           <li>Kitchen: {camper.kitchen ? "Yes" : "No"}</li>
//           <li>TV: {camper.TV ? "Yes" : "No"}</li>
//           <li>Radio: {camper.radio ? "Yes" : "No"}</li>
//           <li>Refrigerator: {camper.refrigerator ? "Yes" : "No"}</li>
//           <li>Microwave: {camper.microwave ? "Yes" : "No"}</li>
//           <li>Gas: {camper.gas ? "Yes" : "No"}</li>
//           <li>Water: {camper.water ? "Yes" : "No"}</li>
//         </ul>
//         <h2>Dimensions</h2>
//         <ul>
//           <li>Form: {camper.form}</li>
//           <li>Length: {camper.length}</li>
//           <li>Width: {camper.width}</li>
//           <li>Height: {camper.height}</li>
//           <li>Tank: {camper.tank}</li>
//           <li>Consumption: {camper.consumption}</li>
//         </ul>
//       </div>
//       <h2>Reviews</h2>
//       {camper.reviews.length > 0 ? (
//         <ul>
//           {camper.reviews.map((review, index) => (
//             <li key={index}>
//               <p>
//                 <strong>{review.reviewer_name}:</strong> {review.comment} (
//                 {review.reviewer_rating}/5)
//               </p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No reviews available.</p>
//       )}
//     </div>
//   );
// };

// export default CamperDetails;
