import RestaurantCard from "./RestaurantCard";
import { ResList } from "../utils/mockData";
import {Shimmer} from "./Shimmer";
const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {/* {ResList.map((elem) => (
          <RestaurantCard resDetail={elem} key={elem.id} />
        ))} */}
        <Shimmer />
      </div>
    </div>
  );
};
export default Body;
