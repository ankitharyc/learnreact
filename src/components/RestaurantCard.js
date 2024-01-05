import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Restaurantcard = ({resData}) =>{
    const data = useContext(UserContext);
    console.log(data);
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = resData?.info;

    return(
      <div className="border border-solid border-black p-3 h-full hover:shadow-lg">
          <div className="card" style={{width:'18rem'}}>
            <img className="w-full rounded-lg h-44 mb-2" src={CDN_URL+cloudinaryImageId} alt="Card cap"></img>
            <div className="card-body">
            <h5 className="font-bold mb-3">{name}</h5>
            <p className="card-cuisine mb-3">{cuisines.join(', ')}</p>
            <p className='starrating text-base'>{avgRating} rating</p>
            <p className='del-time'><span className="font-medium text-sm">Delivery time:</span> {sla?.deliveryTime} mins</p>
            <p>loggedinUser : {data.loggedUser} {data.secname}</p>
          </div>
        </div>
      </div>
    )
  }

  //Higher order component(adding promoted label to restaurants)
  //input - Resto card and output - Restro card promoted
  export const withPromotedLabel = (Restaurantcard)=>{
      return (props) =>{
        return(
          <div>
            <label>Promoted</label>
            <Restaurantcard {...props}/>
          </div>
        )
      }
  }

  export default Restaurantcard;