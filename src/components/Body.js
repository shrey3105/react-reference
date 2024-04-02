import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestuarantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {
    resList,
    setResList,
    filteredList,
    setFilteredList,
    searchText,
    setSearchText,
  } = useRestuarantList();

  const onlineStatus = useOnlineStatus();

  console.log(onlineStatus);
  // Conditional Rendering
  if (filteredList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  if (!onlineStatus) {
    return (
      <h1>Sorry but you are offline. Please check your internet connection</h1>
    );
  }

  return (
    <div className="app-body">
      <div className="filter-container">
        <input
          className="search-res"
          type="text"
          defaultValue={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredList = resList.filter((res) => {
              console.log(res.info.name);
              return res.info.name.includes(searchText);
            });
            setFilteredList(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="highest-rated-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setFilteredList(filteredList);
          }}
        >
          Highest Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredList.map((restaurant) => {
          return (
            <Link
              className="cardsLink"
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <Card resData={restaurant} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
