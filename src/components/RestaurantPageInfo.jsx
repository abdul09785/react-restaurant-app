
import React from "react";
import { baseURl } from "../utils/constant";

const RestaurantPageInfo = ({ menu }) => {
  const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <div className="res-main-container">
        <h1 className="menu-title">{name}</h1>

        <img
          className="menu-img"
          src={baseURl + cloudinaryImageId}
          alt={name}
        />

        <h3>
          🌟{avgRatingString} ({totalRatingsString})
        </h3>

        <h3>{cuisines?.join(", ")}</h3>
      </div>
    </div>
  );
};

export default RestaurantPageInfo;