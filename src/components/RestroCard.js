import { cdn_img } from "../utils/link";

const RestroCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    props.restaurants?.info;
  // Extract the initial two cuisines
  const initialCuisines = cuisines.length<3 ?cuisines.join(" ,") : `${cuisines.slice(0,2)} ,...`;
  return (
    <div className="mx-16 my-8 p-4 max-w-[265px] bg-gray-100 hover:bg-gray-200 rounded-lg shadow-lg">
      <div className="h-40 rounded-lg w-[235] overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={cdn_img + cloudinaryImageId}
          alt="image"
        />
      </div>
      <div className="card-data">
        <h2 className="font-bold py-2 text-lg">
          {name.length < 24 ? name : `${name.slice(0, 23)} ...`}
        </h2>
        <h4 className="font-semibold">
          ⭐ {avgRating} - {sla.slaString}
        </h4>
        <h3>{initialCuisines}</h3>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestroCard;
