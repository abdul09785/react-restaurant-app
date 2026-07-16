import React from "react";
import RestaurantPageInfo from "./RestaurantPageInfo";
import { useState } from "react";

const RestaurantCategory = ({ categoryInfo }) => {

  const { title, itemCards } = categoryInfo;

  const [isOpen, setIsOpen] = useState(false);

  function toggleBody() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="category-accordian">
      <div className="category-header" onClick={toggleBody}>
        <span>
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {isOpen ? (
        <div className="category-body">
          {itemCards.map((singleMenu) => {
            return (
              <MenuItem
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