import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="header-logo"
          src="https://ik.imagekit.io/pfq9vdvnxo/images_q=tbn:ANd9GcTxAYbHejDh1MP8fJy9AN5AhuMWmvlQrnO7odm8Ea2KWFT0ARXHFuwprUo&s=10"
        />
      </div>

      <div className="search-bar">
        <input placeholder="Search For Restaurants and Food" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const restaurantsArr = [
  {
    id: "40377",
    resName: "Lucky Restaurant",
    cuisine: ["Biryani", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 36,
    costForTwo: "₹300 for two",
    imgId: "uvapcfajlsbctskdhuhl",
    location: "Santosh Nagar",
  },
  {
    id: "79706",
    resName: "Shah Ghouse Hotel & Restaurant",
    cuisine: ["Biryani", "Chinese", "Mughlai", "Tandoor"],
    avgRating: 4.4,
    delieveryTime: 30,
    costForTwo: "₹350 for two",
    imgId: "ggbuknqzqc4qoqfnl2cr",
    location: "Charminar",
  },

  {
    id: "650820",
    resName: "Imperial Multicuisine Restaurant",
    cuisine: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
    avgRating: 4.3,
    delieveryTime: 38,
    costForTwo: "₹400 for two",
    imgId: "rqlwvsmzcfxbg9u6ajgm",
    location: "Redhills",
  },
  {
    id: "77905",
    resName: "Santosh Dhaba Exclusive",
    cuisine: ["Biryani", "Chinese", "Italian", "Mexican", "Desserts"],
    avgRating: 4.3,
    delieveryTime: 45,
    costForTwo: "₹300 for two",
    imgId: "jllcesio37olflwnvter",
    location: "ABids",
  },
  {
    id: "289061",
    resName: "Istah - The Mediterranean Way",
    cuisine: [
      "Mediterranean",
      "Snacks",
      "Biryani",
      "Grill",
      "Kebabs",
      "Arabian",
      "Lebanese",
      "Beverages",
      "Desserts",
      "Italian",
    ],
    avgRating: 3.8,
    delieveryTime: 43,
    costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/4f3c4f02-b633-4afd-8ece-3f3a358741bc_289061.jpg",
    location: "Puppalaguda",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {restaurantsArr.map((resObj) => {
          return <RestaurantCard resDetail={resObj} />;
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        fontSize: "2rem",
        color: "white",
      }}
    >
      <h4>© 2026 Abdul Noman. All rights reserved.</h4>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
