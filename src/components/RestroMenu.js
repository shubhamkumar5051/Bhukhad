import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import RestroCategory from "./RestroCategory";

const RestroMenu = () => {
  const { resId } = useParams(); //inbuild hooks.. someone has written the logic to extract the code from url

  const menuList = useRestroMenu(resId); //custom hook :- utility function. making api call on that custom hook. it makes it testable

  const [showIndex, setShowIndex] = useState(null);

  //fetching accordian full menu card for restro
  const categories =
    menuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (menuList === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRatingString, city, cloudinaryImageId } =
    menuList?.cards?.[2]?.card?.card?.info;

  let fetchItemCards = null;
  if (
    menuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards
  ) {
    fetchItemCards =
      menuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
        ?.card?.itemCards;
  } else {
    //sweets corner ke liye dimag lagana padega
    fetchItemCards =
      menuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
        ?.card?.categories[0].itemCards;
    //categories is array.. and each element of categories is also array
  }
  //menuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.categories[1].title

  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h1 className="font-bold">{cuisines?.join(" ,")}</h1>
      <h2>⭐{avgRatingString}</h2>
      <h3>{city}</h3>

      {/* restro accordians.. each will have title and body which is collapsable */}

      {categories.map((category, index) => {
        return (
          <RestroCategory
            data={category.card.card}
            showItems={index === showIndex? true : false}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ); // making restroCategory as controlled component :- lifting the state up for contolling the children
      })}
    </div>
  );
};

export default RestroMenu;

// import React, { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/link";
// const RestroMenu = () => {
//   const [menuList, setMenuList] = useState(null);

//   const {resId} = useParams();

//   useEffect(() => {
//     menuData();
//   }, []);

//   const menuData = async () => {
//     const data = await fetch(
//       MENU_URL + resId
//     );
//     const json = await data.json();
//     //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[4].card.info.name); //for menu
//     //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card);
//     //console.log(json.data.cards[2].card.card.info.name);
//     const jsonData = json.data;
//     setMenuList(jsonData);
//     //   console.log(menuList);
//     //   console.log(menuList?.itemCards[4]?.card?.info?.description);
//   };

//   if (menuList === null) {
//     return <Shimmer />;
//   }

//   const {
//     name,
//     cloudinaryImageId,
//     cuisines,
//     costForTwoMessage,
//     avgRatingString,
//     city,
//   } = menuList?.cards[2]?.card?.card?.info;

// //   const { name1, id } =
// //     menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info;

//   const { itemCards } =
//     menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card;

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{cuisines.join(" ,")}</h1>
//       <h2>{avgRatingString}</h2>
//       <h3>{city}</h3>
//       <h1>Menu</h1>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>{item.card.info.name} - {"RS"} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestroMenu;

// import React, { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { MENU_URL } from "../utils/link";
// const RestroMenu = () => {
//   const [menuList, setMenuList] = useState(null);

//   const {resId} = useParams();

//   useEffect(() => {
//     menuData();
//   }, []);

//   const menuData = async () => {
//     const data = await fetch(
//       MENU_URL + resId
//     );
//     const json = await data.json();
//     //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[4].card.info.name); //for menu
//     //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card);
//     //console.log(json.data.cards[2].card.card.info.name);
//     const jsonData = json.data;
//     setMenuList(jsonData);
//     //   console.log(menuList);
//     //   console.log(menuList?.itemCards[4]?.card?.info?.description);
//   };

//   if (menuList === null) {
//     return <Shimmer />;
//   }

//   const {
//     name,
//     cloudinaryImageId,
//     cuisines,
//     costForTwoMessage,
//     avgRatingString,
//     city,
//   } = menuList?.cards[2]?.card?.card?.info;

// //   const { name1, id } =
// //     menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info;

//   const { itemCards } =
//     menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
//       ?.card;

//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{cuisines.join(" ,")}</h1>
//       <h2>{avgRatingString}</h2>
//       <h3>{city}</h3>
//       <h1>Menu</h1>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>{item.card.info.name} - {"RS"} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestroMenu;
