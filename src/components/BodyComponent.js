import RestroCard from "./RestroCard";
import restroList from "../utils/dummyData";
import { useState } from "react";

const BodyComponent = () => {
    //local state variable using react hooks :- useState
 let[restraurantList, setrestraurantList]=useState(restroList);

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
