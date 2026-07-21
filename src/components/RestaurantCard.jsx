import { baseURl } from "../utils/constant";

const RestaurantCard = ({ resDetail }) => {
  if (!resDetail) return null;

  const {
    id,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
    areaName,
    location,
    resName,
    delieveryTime,
    imgId,
  } = resDetail;

  console.log(resDetail);
  const restaurantName = name || Name || resName || "Restaurant";
  const restaurantCuisines = Array.isArray(cuisines)
    ? cuisines
    : Array.isArray(cuisine)
      ? cuisine
      : ["Various cuisines"];
  const restaurantRating = avgRating || "N/A";
  const deliveryTime = sla?.deliveryTime || delieveryTime || "N/A";
  const restaurantCost = costForTwo || "Price not available";
  const restaurantImage = cloudinaryImageId || imgId;
  const restaurantArea = areaName || location || "Location unavailable";

  return (
    <div className="res-card" key={id}>
      <div className="res-img-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={restaurantImage ? `${baseURl}${restaurantImage}` : ""}
        />
      </div>
      <h3 className="res-title">{restaurantName}</h3>
      <h4>{restaurantCuisines.join(", ")}</h4>
      <h4>⭐️ {restaurantRating} Stars</h4>
      <h4>
        {deliveryTime} mins | {restaurantCost}
      </h4>
      <h4>📍{restaurantArea}</h4>
    </div>
  );
};

export const withDiscountLable = (RestaurantCard) => {
  function newComponent({ resDetail }) {
    const { header, subHeader } = resDetail?.aggregatedDiscountInfoV3 || {};
    return (
      <div className="discount-wrapper">
        <div className="discount-container"><label className="Discount">Discount</label>
        <span className="discount-header">{header}</span>
        <span className="discount-subHeader">{subHeader}</span>
</div>
     

        <RestaurantCard resDetail={resDetail} />
      </div>
    );
  }

  return newComponent;
};

export default RestaurantCard;
