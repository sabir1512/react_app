import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestraunt] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    //https://corsproxy.io/? - It is not working.
    //https://proxy.cors.sh/ - it is working properly.
    const data = await fetch(
      //https://proxy.cors.sh/
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.543373&lng=77.297785&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    /* console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); */

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  
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
          className="px-4 bg-green-200 rounded-md border border-solid"
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
        
      </div>
      <div className="flex flex-wrap">
        
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
