import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";

const BodyComponent = () => {
    //local state variable using react hooks :- useState
 let[restraurantList, setrestraurantList]=useState([]);


//  json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
 useEffect( () => {
  fetchData();
 }, []);

 const fetchData = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  const jsonData = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  setrestraurantList(jsonData);
 }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          type="button"
          onClick={() => {
            newList = restraurantList.filter(
              (restro) => restro.info.avgRating >= 4.3
            );
            setrestraurantList(newList);
          }
        }   
        >
          top-rated restro
        </button>
      </div>
      <div className="restro-list">
        {restraurantList.map((restro) => {
          return <RestroCard restaurants={restro} key={restro.info.id} />;
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
