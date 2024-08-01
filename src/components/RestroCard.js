import { cdn_img } from "../utils/link";

const RestroCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, locality, isOpen  } = props.restaurants?.info;

  // Extract the initial two cuisines
  const initialCuisines =
    cuisines.length < 3 ? cuisines.join(", ") : `${cuisines.slice(0, 2)} ,...`;

  return (
    <div className="mx-16 my-8 p-4 w-[285px] bg-gray-100 hover:bg-gray-200 rounded-lg shadow-lg">
      <div className="h-40 rounded-lg w-[255px] overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={cdn_img + cloudinaryImageId}
          alt="image"
        />
      </div>
      <div className="card-data h-36">
        <h2 className="font-bold py-2 text-lg">
          {name.length < 24 ? name : `${name.slice(0, 23)} ...`}
        </h2>
        <div className="flex items-center font-semibold">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B"></stop>
                <stop offset="1" stopColor="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span className="ml-2">{avgRating} - {sla.slaString}</span>
        </div>
        <div className="">{initialCuisines}</div>
        <div>{locality}</div>
        <div>{costForTwo}</div>
      </div>
    </div>
  );
};


  // higher order component which will take above component as input and will return enhanced component with Open/closed label

  export const LabelRestroComponent = (RestroCard)=>{
      return(props)=>{
        return(
           <div>
            <label className="absolute text-md bg-black text-white px-2 py-1 mx-16 rounded-md">Open</label>
            <RestroCard {...props}/>
           </div>
        )
      }
  }


export default RestroCard;
