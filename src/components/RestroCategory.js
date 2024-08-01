// writing accordian from scratch

import { useState } from "react";
import ItemList from "./ItemList";


const RestroCategory = ({ data }) => {
  const[showItems, setShowItems] = useState(false);
  const[showButton, setShowButton]= useState("⬇️");
  const handleClick =()=>{
    if(showItems)
    {
      setShowItems(false);
      setShowButton("⬇️");
    }else{
      setShowItems(true);
      setShowButton("⬆️")
    }
  }

  return (
    <div>

       {/* accordian header  */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-xl">
            {data.title} ({data.itemCards.length})
        </span>
        <span>{showButton}</span>
        </div>
         {/* accordian body */}
         {showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestroCategory;
