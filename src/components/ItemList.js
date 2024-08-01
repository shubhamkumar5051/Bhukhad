import { cdn_img } from "../utils/link";

const ItemList = ({ items }) => {
  //console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                {" "}- ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs"> {item.card.info.description}</p>
          </div>
          
          <div className="w-3/12 p-4 relative flex items-center justify-center">
                            <img src={cdn_img + item.card.info.imageId} className="rounded-lg h-36 w-36" alt="Food Image" />
                            <button className="text-base font-medium absolute bottom-2 w-20 text-center bg-black text-white shadow-lg rounded-lg p-1">ADD +</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
