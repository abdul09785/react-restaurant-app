import { Link } from "react-router-dom";
import { LogoURl } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
     <Link to={"/"} ><div className="logo-container">
        <img className="header-logo" src={LogoURl} />
      </div> </Link>

      <div className="search-bar">
        <input placeholder="Search For Restaurants and Food" />
      </div>

      <div className="nav-items">
        <ul>
          {/* <li>Home</li>

          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li> */}
        
        <li><Link to={"/"} >Home</Link></li>

        <li> <Link to={"/about"}>About us</Link></li>

        <li> <Link to={"/contact"}>contact</Link></li>

        <li> <Link to={"/cart"}>cart</Link></li>
       
        </ul>
      </div>
    </div>
  );
};
export default Header;
