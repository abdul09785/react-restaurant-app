
import RestaurantCard from "./RestaurantCard";
import { ResList } from "../mockData/ResList";

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {ResList.map((elem) => (
          <RestaurantCard resDetail={elem} key={elem.id} />
        ))}
        ;
      </div>
    </div>
  );
};
export default Body;
