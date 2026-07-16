import React from "react";
import { baseURl} from "../utils/constant";

const MenuItems = ({ details }) => {
  console.log(details)

   const {
    name,
    price,
    description,
    imageId,
    ratings,
    finalPrice,
    defaultPrice,
    isVeg,
  } = details;
  return (
    <div className="menu-item-card">
      <div>
        <h1>{name}</h1>
        <p>Price: {price / 100 || finalPrice / 100 || defaultPrice / 100}</p>
        <p>
          ⭐️ {ratings.aggregatedRating.rating} (
          {ratings.aggregatedRating.ratingCount})
        </p>
        <p>{description}</p>
      </div>


      <div>
        <img className="menu-item-img" src={baseURl+ imageId}/>
      </div>
    </div>
  );
};


export default MenuItems;