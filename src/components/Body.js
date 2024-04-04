import Card, { addPromotedLabel } from "./Card";
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

  const RestaurantCardPromoted = addPromotedLabel(Card);

  console.log("Filtered List", filteredList);

  console.log(onlineStatus);
  // Conditional Rendering
  if (filteredList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  if (!onlineStatus) {
    return (
      <h1 className="text-red-400">
        Sorry but you are offline. Please check your internet connection
      </h1>
    );
  }

  return (
    <div>
      <div className="flex items-center p-4">
        <input
          className="border border-gray-300 border-solid h-[100%] p-2"
          type="text"
          defaultValue={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-orange-400 text-white px-4 py-2 mx-4 rounded-lg"
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
          className="bg-gray-100 px-4 py-2 rounded-lg"
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

      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => {
          return (
            <Link
              className="w-[25%] p-4"
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating >= 4.4 ? (
                <RestaurantCardPromoted
                  resData={restaurant}
                ></RestaurantCardPromoted>
              ) : (
                <Card resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
