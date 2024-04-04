import { RES_IMG_URL } from "../utils/constants";

const Card = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  return (
    <div className="h-[100%]">
      <div className="rounded-lg bg-gray-100 p-2 h-[100%]">
        <img
          className="rounded-lg"
          src={RES_IMG_URL + cloudinaryImageId}
          alt="Image"
        />
        <h3 className="text-2xl font-bold my-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

export const addPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="text-white absolute bg-black rounded-lg left-4 p-1">
          Promoted
        </label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default Card;
