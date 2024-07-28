import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTRO_URL } from "../utils/link";

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
      const data = await fetch( RESTRO_URL
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

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return (
      <h1>you are offline</h1>
    )
  }
  

  //conditional rendering

  if (restraurantList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex justify-center items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border p-2 rounded-lg w-96 shadow-lg"
            value={searchTxt}
            onChange={(event) => {
              setsearchTxt(event.target.value);
              //console.log(event.target.value);  //whenever local state var is changed the whole component get re-render. for every single button press. whole comp get painted again
            }}
            placeholder="Search restaurants..."
          />
          <button className="px-4 py-2 bg-orange-400 m-4 rounded-lg text-white"
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

       <div className="m-4 p-4 flex items-center">
       <button
          className="px-4 py-2 bg-orange-400 m-4 rounded-lg filterBtn text-white"
          type="button"
          onClick={() => {
            newList = restraurantList.filter(
              (restro) => restro.info.avgRating >= 4.3
            );
            setfilterRestro(newList);
          }}
        >
          Top Restro
        </button>
       </div>
      </div>

     <div>
       <div className="flex flex-wrap justify-center">
        {filterRestro.map((restro) => {
          return(
          <Link key={restro.info.id} to={"/restro/" + restro.info.id}>
            <RestroCard restaurants={restro} />
          </Link>
          )
        })}
      </div>
     </div>
    </div>
  );
};

export default BodyComponent;
