import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurantcategory from "./Restaurantcategory";
import { useState } from "react";

const Restromenu= ()=>{
const  {resID} = useParams();
const menudata = useRestaurantMenu(resID);
const[showindex, setShowindex] = useState(null);


if(menudata === null){
    return <Shimmer/>;
}
const {name, cuisines, avgRating, costForTwoMessage} = menudata?.cards[0]?.card?.card?.info;
//const {itemCards} = menudata?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log('itemCards' +menudata?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = menudata?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>
    category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)
console.log(categories);


    return  (
        <div className="">           
            <h2 className="font-bold text-lg my-4">{name}</h2>
            <h3 className="font-bold">{cuisines.join(', ')} - {costForTwoMessage}</h3>
            <h4>{avgRating} rating</h4> 
             
            {/* categories */}
            {
                categories.map((itemtype,index)=>
                    //controlled component
                    <Restaurantcategory data={itemtype?.card?.card} showitem={index === showindex && true} setShowindex={()=>setShowindex(index)}/>
                )
            }
        </div>
    )
}

export default Restromenu;