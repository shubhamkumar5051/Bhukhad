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

const restroList = [
  {
    "info": {
      "id": "654087",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_654087.JPG",
      "locality": "SP Verma Road",
      "areaName": "Lodipur",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.1,
      "parentId": "166",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 58,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-13 06:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-sp-verma-road-lodipur-patna-654087",
      "type": "WEBLINK"
    }
  },
]

const RestroCard=()=>{
  return(
    <div className="card">
     { <img src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restroList[0].info?.cloudinaryImageId}></img> }
     <h2>{restroList[0].info?.name}</h2>
     <h3>{restroList[0].info?.cuisines.join(", ")}</h3>
     <h4>{restroList[0].info?.avgRating}</h4>
    </div>
  )
}
const BodyComponent =()=>{
  return (
   <div className="restro-list">
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
    <RestroCard/>
  </div>
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
