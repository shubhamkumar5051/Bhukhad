import { useState } from "react";
import ItemList from "./ItemList";


const RestroCategory = ({ data, showItems, setShowIndex }) => {
  
  
  const[showButton, setShowButton]= useState("⬇️");
  const handleClick =()=>{
    
    setShowIndex();
  
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


// writing accordian from scratch
// here restro category is controlling itself :- so its uncontrolled component. it has its own state
// but i will make controlled component.. parent(RestroMenu) will manage the RestroCategoy.. so parent will manage its children. by passing state in props

// import { useState } from "react";
// import ItemList from "./ItemList";


// const RestroCategory = ({ data }) => {
//   const[showItems, setShowItems] = useState(false);
//   const[showButton, setShowButton]= useState("⬇️");
//   const handleClick =()=>{
//     if(showItems)
//     {
//       setShowItems(false);
//       setShowButton("⬇️");
//     }else{
//       setShowItems(true);
//       setShowButton("⬆️")
//     }
//   }

//   return (
//     <div>

//        {/* accordian header  */}
//       <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
//         <div className="flex justify-between cursor-pointer" onClick={handleClick}>
//         <span className="font-bold text-xl">
//             {data.title} ({data.itemCards.length})
//         </span>
//         <span>{showButton}</span>
//         </div>
//          {/* accordian body */}
//          {showItems && <ItemList items={data.itemCards}/>}
//       </div>
//     </div>
//   );
// };

// export default RestroCategory;
