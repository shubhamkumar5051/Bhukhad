// writing accordian from scratch

import ItemList from "./ItemList";

const RestroCategory = ({ data }) => {

  return (
    <div>

       {/* accordian header  */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between">
        <span className="font-bold text-xl">
            {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
        </div>
         {/* accordian body */}
      <ItemList items={data.itemCards}/>
      </div>
    </div>
  );
};

export default RestroCategory;
