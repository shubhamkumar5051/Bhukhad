import { useEffect, useState } from "react";
import { logo_img } from "../utils/link";

const HeaderComponent = () => {
   const [btn, setbtn] = useState("Login");
   console.log("header render");


   useEffect( ()=> {console.log("useEffect render")}, [btn]);

 
  return (
    <div className="header">
      <img id="img" src={logo_img} alt="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUS</li>
          <li>Cart</li>
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
