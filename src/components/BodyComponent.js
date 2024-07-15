import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
    //local state variable using react hooks :- useState
 let[restraurantList, setrestraurantList]=useState([]);


//  json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
 useEffect( () => {
  fetchData();
 }, []);
 

 //Fetch api GET request using async/await:
 const fetchData = async () =>{
  try{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  const jsonData = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  setrestraurantList(jsonData);
  } catch (error)
  {
    console.log(error);
  }
 }

 if (restraurantList.length === 0) {
   return <Shimmer/>
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

// import React, { useState, useEffect } from "react";
// import RestroCard from "./RestroCard";

// const BodyComponent = () => {
//   const [restraurantList, setrestraurantList] = useState([]);
//   const [page, setPage] = useState(1); // Track the current page

//   useEffect(() => {
//     fetchData();
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [page]);

//   const fetchData = async () => {
//     try {
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );
//       const json = await data.json();
//       const jsonData = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       setrestraurantList(jsonData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const postData = async () => {
//     try {
//       const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
//         method: "POST",
//         body: JSON.stringify({
//           page,
//         }),
//       });
//       const result = await response.json();
//       setrestraurantList((prevList) => [...prevList, ...result.data.restaurants]);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  

//   const handleScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//       setPage((prevPage) => prevPage + 1);
//       postData();
//     }
//   };

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filterBtn"
//           type="button"
//           onClick={() => {
//             const newList = restraurantList.filter(
//               (restro) => restro.info.avgRating >= 4.3
//             );
//             setrestraurantList(newList);
//           }}
//         >
//           Top-rated Restro
//         </button>
//       </div>
//       <div className="restro-list">
//         {restraurantList.map((restro) => (
//           <RestroCard restaurants={restro} key={restro.info.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BodyComponent;
