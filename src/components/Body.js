import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestraunt] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    //https://corsproxy.io/? - It is not working.
    //https://proxy.cors.sh/ - it is working properly.
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.543373&lng=77.297785&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
  //conditional rendering
  /* if (listOfRestaurants.length === 0) {
    return <Shimmer />;
    /* <h1>Loading...</h1> 
  } */
  //console.log("Rendered");
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            /* const filteredRestraunts = resList.filter(
              (res) => res.data.avgRating > 4
            ); */
            //console.log(listOfRestaurants);
            /* setListOfRestaurants(
              listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4.5;
              })
            ); */
            setFilteredRestraunt(
              listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4.5;
              })
            );
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="res-container">
        {/* {listOfRestaurants.map((item) => {
          console.log(item.info);
        })} */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
