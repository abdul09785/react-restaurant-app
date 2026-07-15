import React from "react";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { baseURl, menuAPI, swiggyURL } from "../utils/constant";

const RestaurantPage = () => {
  const { resId } = useParams();
  console.log(resId);

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, [resId]);

  const getRestaurantMenu = async () => {
    const rawData = await fetch(menuAPI + resId);
    const json = await rawData.json();
    console.log(json);
    setMenu(json);
  };

    if (menu === null){
      return <div>
          loading......
      </div>
    }
     const {
      name,
      avgRatingString,
      totalRatingsString,
      cuisines,
      cloudinaryImageId,
    } = menu?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1 className="menu-title">{name}</h1>
      <img className="menu-img" src={baseURl + cloudinaryImageId}/>
    </div>
  )
};

export default RestaurantPage;
