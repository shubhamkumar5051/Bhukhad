import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = () => {
  const { resId } = useParams(); //inbuild hooks.. someone has written the logic to extract the code from url

  const menuList = useRestroMenu(resId); //custom hook :- utility function. making api call on that custom hook. it makes it testable

  if (menuList === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    avgRatingString,
    city,
  } = menuList?.cards?.[2]?.card?.card?.info;

  const itemCards =
    menuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;
 //menuList?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.categories[1].title
  return (
    <div>
      <h1>{name}</h1>
      <h1>{cuisines?.join(" ,")}</h1>
      <h2>{avgRatingString}</h2>
      <h3>{city}</h3>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"RS"} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
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





