import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log(useState(null));
  console.log(setResInfo);
  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();
  //console.log(params);
  const fetchMenu = async () => {
    //498382
    //254192
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    setResInfo(json?.data);
    console.log(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  /* console.log(
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
  ); */
  //console.log(itemCards[4]);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <h3>
        {itemCards?.map((res) => (
          <li key={res.card.info.id}>
            {res?.card?.info?.name} - Rs. {res?.card?.info?.price / 100}
          </li>
        ))}
      </h3>
    </div>
  );
};
export default RestaurantMenu;
