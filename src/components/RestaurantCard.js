import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    sla,
  } = resData?.info;

  return (
    <div className="p-[12px] m-[12px] w-[324px] h-[420px] rounded-md shadow-lg bg-gray-100 hover:bg-gray-200" >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={"res-logo"}
        className="w-[300px] h-[250px] rounded-md"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwoString} </h4>
      <h4>{sla.slaString} </h4>
    </div>
  );
};
export default RestaurantCard;
