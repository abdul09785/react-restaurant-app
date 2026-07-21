import { swiggyURL } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import { ResList } from "../utils/mockData";
import { Shimmer } from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import HotelListContext from "../utils/HotelListContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withDiscountLable } from "./RestaurantCard";
const Body = () => {
  const { hotelList, setHotelList, allItems, setAllItems } =
    useContext(HotelListContext);
  const DiscountResCard = withDiscountLable(RestaurantCard);

  // console.log(hotelList);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();
    // console.log(
    //   data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    // );

    setAllItems(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    setHotelList(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    // console.log(hotelList);
  };

  if (!isOnline) {
    return (
      <div className="body">
        <h1 style={{ padding: "10vh 1.5rem", textAlign: "center" }}>
          🔴 You are offline. Please check your internet connection.
        </h1>
      </div>
    );
  }

  if (hotelList == null) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="res-container">
        {hotelList.map((resObj) => (
          <Link to={`/restaurant/${resObj.info.id}`} key={resObj.info.id}>
            {resObj.info.aggregatedDiscountInfoV3 ? (
              <DiscountResCard resDetail={resObj.info} />
            ) : (
              <RestaurantCard resDetail={resObj.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
