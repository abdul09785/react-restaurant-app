import { Link } from "react-router-dom";
import { LogoURl } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import HotelListContext from "../utils/HotelListContext";
import { useState } from "react";
const Header = () => {
  const { name } = useContext(UserContext);
  // console.log(name);

  const { hotelList, setHotelList, allItems } = useContext(HotelListContext);

  const [filterToggle, setFilterToggle] = useState(false);
  const [searchText, setSearchText] = useState("");

  function setFilter() {
    if (!filterToggle) {
      const filteredArray = allItems.filter(
        (restaurant) => restaurant.info.avgRating > 4.3,
      );

      setHotelList(filteredArray);
      setFilterToggle(!filterToggle);
    } else {
      setHotelList(allItems);
      setFilterToggle(!filterToggle);
    }
  }
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo-container">
          <img className="header-logo" src={LogoURl} />
        </div>
      </Link>

      <div className="search-bar">
        <input
          value={searchText}
          placeholder="Search restaurant & food...."
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);

            const filteredList = allItems.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(value.toLowerCase()),
            );
            setHotelList(filteredList);
          }}
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <button className="buttn-filter" onClick={setFilter}>
              {filterToggle ? "all Restaurant" : "Top Restaurant"}{" "}
            </button>
          </li>
          {isOnline ? (
            <li> 🟢 active </li>
          ) : (
            <li className="red"> 🛑 deactive </li>
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
          <li>{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
