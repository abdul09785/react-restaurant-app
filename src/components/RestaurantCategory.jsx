import React from "react";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import { useState } from "react";
import MenuItems from "./MenuItems";
import { FaAngleDown } from "react-icons/fa6";

const RestaurantCategory = ({ categoryInfo, order, setIndex }) => {
  const { title, itemCards } = categoryInfo;

  let isOpen = order;

  function toggleBody() {
    setIndex();
  }

  return (
    <div className="category-accordian ">
      <div className="category-header" onClick={toggleBody}>
        <span>
          {title} ({itemCards.length})
        </span>
        <span>
          <FaAngleDown />
        </span>
      </div>

      {isOpen ? (
        <div className="category-body">
          {itemCards.map((singleMenu) => {
            return (
              <MenuItems
                details={singleMenu.card.info}
                key={singleMenu.card.info.id}
              />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
