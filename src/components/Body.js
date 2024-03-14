import Card from "./Card";
import { restaurantsList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("def");

  console.log("Component Renderdd");
  //const resList = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // Conditional Rendering
  if (filteredList.length === 0) {
    return <Shimmer></Shimmer>;
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
          return <Card key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
