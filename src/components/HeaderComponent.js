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
    <div className="header">
      <img id="img" src={logo_img} alt="logo" />
      <div className="nav-items">
        <ul>
          <li> Online Status : {onlineStatus?"✅":"❌"}</li>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/contact">Contact Us</Link> </li>
          <li> <Link to="/cart">cart</Link></li>
          <li> <Link to="/grocery">Grocery</Link> </li>
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
