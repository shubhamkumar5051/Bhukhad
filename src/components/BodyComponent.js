import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  //console.log("body re-render"); // for checking re-render cycle

  //local state variable using react hooks :- useState
  const [restraurantList, setrestraurantList] = useState([]);
  const [filterRestro, setfilterRestro] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");

  //  json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  useEffect(() => {
    fetchData();
  }, []);

  //Fetch api GET request using async/await:
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const jsonData =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setrestraurantList(jsonData);
      setfilterRestro(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  //conditional rendering


   if (restraurantList.length === 0) {
     return <Shimmer/>
   }
  let temper=0;
  return (
    <div className="body">
      <div className="filter">

        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchTxt}
            onChange={(event) => {
              setsearchTxt(event.target.value)
              //console.log(event.target.value);  //whenever local state var is changed the whole component get re-render. for every single button press. whole comp get painted again
            }
        }
          />
          <button
            type="button"
            onClick={() => {
              newList1 = restraurantList.filter((restro) =>
                restro.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setfilterRestro(newList1);
            }}
          >
            Search
          </button>
        </div>


        <button
          className="filterBtn"
          type="button"
          onClick={() => {
            newList = restraurantList.filter(
              (restro) => restro.info.avgRating >= 4.3
            );
            setfilterRestro(newList);
          }}
        >
          top-rated restro
        </button>
      </div>


      <div className="restro-list">
        {filterRestro.map((restro) => {
          return <RestroCard restaurants={restro} key={restro.info.id} />;
        })}
      </div>
    </div>
  );
};

export default BodyComponent;

