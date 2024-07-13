import { cdn_img } from "../utils/link";

const RestroCard=(props)=>{
  const{cloudinaryImageId,name, cuisines, avgRating} = props.restaurants?.info;
  return(
    <div className="card">
     <img src = {cdn_img + cloudinaryImageId} alt="image"></img>
     <h2>{name}</h2>
     <h3>{cuisines.join(", ")}</h3>
     <h4>{avgRating}</h4>
    </div>
  )
}

export default RestroCard;