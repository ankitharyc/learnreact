import { CDN_URL } from "../utils/constants";

const Restaurantcard = ({resData}) =>{
    const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;
    return(
      <div className="res-card">
          <div className="card" style={{width:'18rem'}}>
            <img className="card-img-top" src={CDN_URL+cloudinaryImageId} alt="Card cap"></img>
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-cuisine">{cuisines.join(', ')}</p>
            <p className='starrating'>{avgRating} rating</p>
            <p className='del-time'>Delivery time: {resData.info.sla.deliveryTime} mins</p>
          </div>
        </div>
      </div>
    )
  }

  export default Restaurantcard;