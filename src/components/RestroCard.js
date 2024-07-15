import { cdn_img } from "../utils/link";

const RestroCard=(props)=>{
  const{cloudinaryImageId,name, cuisines, avgRating, costForTwo,sla} = props.restaurants?.info;
  return(
    <div className="card">
     <img src = {cdn_img + cloudinaryImageId} alt="image"></img>
    <div className="card-data">
    <h2>{name}</h2>
     <h3>{cuisines.join(", ")}</h3>
     <h4>{avgRating}</h4>
     <h4>{costForTwo}</h4>
     <h4>{sla.slaString}</h4>
    </div>
    </div>
  )
}

export default RestroCard;