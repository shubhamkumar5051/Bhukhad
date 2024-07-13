import { logo_img } from "../utils/link";
const HeaderComponent = () => {
    return (
      <div className="header">
       <img
        id="img"
        src={logo_img}
        alt="logo"
      />
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

  export default HeaderComponent;