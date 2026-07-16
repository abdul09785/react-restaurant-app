import React from "react";
import { useParams } from "react-router-dom";
import { MenuAPI } from "../utils/constant";
import { useEffect, useState } from "react";
import RestaurantPageInfo from "./RestaurantPageInfo";
import RestaurantCategory from "./RestaurantCategory";
import { Shimmer } from "./Shimmer";
import useMenuData from "../utils/useMenuData";


const RestaurantPage = () => {
  const { resId } = useParams();

  const menu = useMenuData(resId);

  if (menu === null) {
    return <Shimmer />;
  }

  const categories =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        if (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return true;
        } else {
          return false;
        }
      },
    );

  const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;

  return (
    <div
      style={{
        paddingLeft: "340px",
        paddingTop: "100px",
        paddingBottom: "50px",
        paddingRight: "340px",
      }}
    >
      <RestaurantPageInfo menu={menu} />

      {categories.map((category) => {
        console.log(category);
        return (
          <RestaurantCategory
            key={category.card.card.categoryId}
            categoryInfo={category.card.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantPage;