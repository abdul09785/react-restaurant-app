

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
export default Header;
