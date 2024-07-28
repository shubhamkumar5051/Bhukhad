import { useEffect, useState } from "react";
import { logo_img } from "../utils/link";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
   const [btn, setbtn] = useState("Login");
   console.log("header render");

   const onlineStatus = useOnlineStatus(); 
   useEffect( ()=> {console.log("useEffect render")}, [btn]);

 
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <img className="w-52" src={logo_img} alt="logo" />
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-6" >
          <li className="px-4"> Online Status : {onlineStatus?"✅":"❌"}</li>
          <li className="px-4"> <Link to="/">Home</Link></li>
          <li className="px-4"> <Link to="/about">About</Link></li>
          <li className="px-4"> <Link to="/contact">Contact Us</Link> </li>
          <li className="px-4"> <Link to="/cart">cart</Link></li>
          <li className="px-4"> <Link to="/grocery">Grocery</Link> </li>
          <li>
            <button
              className="login"
              type="button"
              onClick={() => {
                btn==="Login" ? setbtn("Logout") : setbtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
