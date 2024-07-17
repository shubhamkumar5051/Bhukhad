import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Cart from "./components/Cart";




const AppLayout = () => {
  return (
    <React.Fragment> 
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    </React.Fragment>
  )
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element : <BodyComponent/>
      },
      {
        path : "/about",
        element :<About/>
      },
      {
       path : "/contact",
       element : <ContactUS/>
      },
      {
        path : "/cart",
        element : <Cart/>
      }
    ],
    errorElement : <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("ram"));
root.render(<RouterProvider router={appRouter}/>);


//1st way
//using props.. here i will get the data in the from of objects

// const RestroCard=(props)=>{
//   console.log(props);
//   return(
//     <div className="card">
//      <img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.restaurant.info?.cloudinaryImageId}></img>
//      <h2>{props.restaurant.info?.name}</h2>
//      <h3>{props.restaurant.info?.cuisines.join(", ")}</h3>
//      <h4>{props.restaurant.info?.avgRating}</h4>
//     </div>
//   )
// }




//2nd way
//object destructuring on the fly.. no need to do props.restaurant.info.name
// const RestroCard=({restaurant})=>{
//   return(
//     <div className="card">
//      <img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.info?.cloudinaryImageId}></img>
//      <h2>{restaurant.info?.name}</h2>
//      <h3>{restaurant.info?.cuisines.join(", ")}</h3>
//      <h4>{restaurant.info?.avgRating}</h4>
//     </div>
//   )
// }



//3rd way :- destructing one level more :- we will destructure restaurant into specific variable. for clean code

// const RestroCard=({restaurant})=>{
 
//   const {cloudinaryImageId, name, cuisines, avgRating} = restaurant?.info;  //desturcturing restaurant here
//   // why restaurant.info ?  beacuse, i have all those data inside info

//   return(
//     <div className="card">
//      <img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
//      <h2>{name}</h2>
//      <h3>{cuisines.join(", ")}</h3>
//      <h4>{avgRating}</h4>
//     </div>
//   )
// }


// const BodyComponent =()=>{
//   return (
//    <div className="restro-list">
//     <RestroCard restaurant={restroList[0]} hello="world"/>
//     <RestroCard restaurant={restroList[1]} hello="world"/>
//     <RestroCard restaurant={restroList[2]} hello="world"/>
//     <RestroCard restaurant={restroList[3]} hello="world"/>
//   </div>
//   )
// }


// // 4th way: i want to destructure on the fly.. just accepting as param
// const RestroCard=({name, cuisines, cloudinaryImageId, avgRating})=>{
//   return(
//     <div className="card">
//      <img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="image"></img>
//      <h2>{name}</h2>
//      <h3>{cuisines.join(", ")}</h3>
//      <h4>{avgRating}</h4>
//     </div>
//   )
// }

// const BodyComponent =()=>{
//   return (
//    <div className="restro-list">
//     {
//       restroList.map((restro) => {
//         return <RestroCard {...restro.info} key={restro.info.id}/>
//       })
//     }
//   </div>
//   )
// }


// const BodyComponent =()=>{
//   return (
//    <div className="restro-list">
//     {/* using spread operator here. it will spread my object */}
//     <RestroCard {...restroList[0].info}/>  
//     <RestroCard {...restroList[1].info}/>  
//     <RestroCard {...restroList[2].info}/>  
//     <RestroCard {...restroList[3].info}/>
//     <RestroCard {...restroList[4].info}/>  
//     <RestroCard {...restroList[5].info}/>    
   
//   </div>
//   )
// }


// my way to do the task







