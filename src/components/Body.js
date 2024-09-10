import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  const arr = useState(resList);
  //const [listOfRestaurants, setListOfRestaurants] = arr;
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            /* const filteredRestraunts = resList.filter(
              (res) => res.data.avgRating > 4
            ); */
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.data.avgRating > 4.2)
            );
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
