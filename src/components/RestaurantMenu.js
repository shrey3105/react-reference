import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);

  const { resId } = useParams();

  console.log("ResID", resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setMenu(json);
  };

  console.log("Menu", menu);

  if (menu == null) return <Shimmer></Shimmer>;

  const { name, city, cuisines } = menu.data.cards[0].card.card.info;

  const { title, itemCards } =
    menu.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  return (
    <div className="resMenu">
      <h2>{name}</h2>
      <h4>{city}</h4>
      <p>{cuisines.join(", ")}</p>

      <h5>{title}</h5>
      <ul className="menuList">
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
