import { RES_IMG_URL } from "../utils/constants";

const Card = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card-container">
      <div className="res-card">
        <img src={RES_IMG_URL + cloudinaryImageId} alt="Image" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

export default Card;
