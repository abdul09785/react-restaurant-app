import { swiggyURL } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import { ResList } from "../utils/mockData";
import { Shimmer } from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [hotelList, setHotelList] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(swiggyURL);

    const data = await response.json();

    // console.log(data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,);

    setHotelList(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  if (hotelList == null) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="res-container">
        {hotelList.map((resObj) => {
          return (
            <Link to={`/restaurant/${resObj?.info?.id}`} key={resObj?.info?.id}>
              {" "}
              <RestaurantCard resDetail={resObj?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
