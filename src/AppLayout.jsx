import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import HotelListContext from "./utils/HotelListContext";
const AppLayout = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();


  const [allItems, setAllItems] = useState(null);
  const [hotelList, setHotelList] = useState(null);
  
//authentication

useEffect(()=>{
  const randomTrue = Math.random() < 0.3;
  if (!randomTrue){
    setName("guest");
      setEmail("guestEmail@.com");
      return;

    
  }
  
    // data from backend if authentication call success
    const loggedInUser = {
      email: "abdul@gmail.com",
      name: "Noman",
    };


  setName(loggedInUser.name);
  setEmail(loggedInUser.email);
},[]);

  

  return (
      <div>
    <UserContext.Provider value="{{name, email}}">
      <HotelListContext.Provider value={{hotelList,setHotelList, setAllItems, allItems}}>
        <Header />
        <Outlet />
        <Footer />
        </HotelListContext.Provider>
    </UserContext.Provider>
      </div>
  );
};
export default AppLayout;
