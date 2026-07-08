
const RestaurantCard = ({ resDetail, moreDetails }) => {
  const {
    id,
    resName,
    cuisine,
    avgRating,
    delieveryTime,
    costForTwo,
    imgId,
    location,
  } = resDetail;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgId}`}
        />
      </div>
      <h3 className="res-title">{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>⭐️ {avgRating} Stars</h4>
      <h4>
        {delieveryTime} mins | {costForTwo}
      </h4>
    </div>
  );
};
export default RestaurantCard;
