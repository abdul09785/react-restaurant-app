import { useEffect, useState } from "react"
import { menuAPI } from "./constant";




const useMenuData =(resId)=>{
    const [menu, setMenu] = useState(null);
    useEffect(()=>{
        getRestaurantMenu();
    
    },[]);


   
const getRestaurantMenu = async () => {
    const rawData = await fetch(menuAPI + resId);
    const json = await rawData.json();
    // console.log(json);
    setMenu(json);
  };
   return menu ;
};


export default useMenuData;