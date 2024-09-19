import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestraunt] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      //https://proxy.cors.sh/
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.543373&lng=77.297785&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(listOfRestaurants);
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="border rounded-lg">
      <div className="flex p-0 m-0 items-center">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 bg-green-200 rounded-md border border-solid"
            onClick={() => {
              const filteredData = listOfRestaurants.filter((item) =>
                item.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestraunt(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className=" bg-green-200 rounded-md border border-solid"
            onClick={() => {
              setFilteredRestraunt(
                listOfRestaurants.filter((res) => {
                  return res.info.avgRating > 4.5;
                })
              );
            }}
          >
            Top Rated Retraunt
          </button>
        </div>
        <div className="mx-4">
          <label>User Name : </label>
          <input
            className="border border-black rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
