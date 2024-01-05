import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID)=>{

const [menudata, setMenudata] = useState(null);
    //fetch data
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resID);
        const json = await data.json();
        console.log(json);
        setMenudata(json.data);
    }

    return menudata;
}

export default useRestaurantMenu;