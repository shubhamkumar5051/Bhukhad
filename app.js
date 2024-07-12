import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - logo
 * - Nav Items (Right side)
 * - Cart
 *
 * Body
 * - Search Bar
 * - Restaurant container
 *   - Restaurant card
 *     - image
 *     - Name of the restro, star rating, cusines, delivery time
 *
 * Footer
 * - copyright
 * - Links
 * - Address
 * - contact
 */
const Title = () => {
  return (
    <img
      id="img"
      src="https://logosmarcas.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
      alt="logo"
      srcset=""
    />
  );
};
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUS</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const RestroCard=()=>{
  return(
    <div className="card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_654087.JPG" alt="" srcset="" />
      <h3>Burger King</h3>
      <h4>Burger, American</h4>
      <h5>4.2 stars</h5>
    </div>
  )
}
const BodyComponent =()=>{
  return (
   <>
    <RestroCard/>
  </>
  )
}

const FooterComponent =()=>{
  return(
    <h2>Footer</h2>
  )
}

const AppLayout = () => {
  return (
    <React.Fragment> 
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
    </React.Fragment>
  )
};

const root = ReactDOM.createRoot(document.getElementById("ram"));
root.render(<AppLayout />);
