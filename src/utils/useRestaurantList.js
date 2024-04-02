import { useState, useEffect } from "react";
const useRestuarantList = () => {
  const [resList, setResList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("def");

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

  return {
    resList,
    setResList,
    filteredList,
    setFilteredList,
    searchText,
    setSearchText,
  };
};

export default useRestuarantList;
