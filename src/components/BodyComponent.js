import React, { useState, useEffect } from "react";
import { LabelRestroComponent } from "./RestroCard";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTRO_URL } from "../utils/link";

const BodyComponent = () => {
  const [restraurantList, setrestraurantList] = useState([]);
  const [filterRestro, setfilterRestro] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");

  let LabelRestro = LabelRestroComponent(RestroCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTRO_URL);
      const json = await data.json();
      //console.log(json); 
      //card[1] pe najar rakhna.. change hote rehta h
      const jsonData = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setrestraurantList(jsonData);
      setfilterRestro(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

    


  const ShimmerGrid = () => (
    <div className="grid grid-cols-3 gap-4">
      {Array(9).fill("").map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  );

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <ShimmerGrid />;
  }

  if (restraurantList.length === 0) {
    return <ShimmerGrid />;
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
            }}
            placeholder="Search restaurants..."
          />
          <button
            className="px-4 py-2 bg-orange-400 m-4 rounded-lg text-white"
            type="button"
            onClick={() => {
              const newList1 = restraurantList.filter((restro) =>
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
              const newList = restraurantList.filter(
                (restro) => restro.info.avgRating >= 4.2
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
          {
          filterRestro.map((restro) => {
            return (
              <Link key={restro.info.id} to={"/restro/" + restro.info.id}>

                {/* if the restro is opened then ADD open label to it */}
              {restro.info.isOpen?(<LabelRestro restaurants={restro}/>):(<RestroCard restaurants={restro} />)}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;

