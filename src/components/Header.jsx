import { Link } from "react-router-dom";
import { LogoURl } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="header-logo" src={LogoURl} />
        </div>
      </Link>

      <div className="search-bar">
        <input placeholder="Search For Restaurants and Food" />
      </div>

      <div className="nav-items">
        <ul>
          {isOnline ? (
            <li> 🟢 Online </li>
          ) : (
            <li className="red"> 🛑 Offline </li>
          )}

          <li>
            {" "}
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About us</Link>{" "}
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            {" "}
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
