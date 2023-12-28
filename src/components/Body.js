import resObj from '../utils/mockData'
import Restaurantcard from './RestaurantCard'
import {useState} from 'react';

const Bodycomp = () =>{
  const [reslist,setReslist] = useState(resObj);
  //Array destructuring - usestate example
  // const arr = useState(resObj);
  // const reslist = arr[0];
  // const setReslist = arr[1];

  const clickHandler = ()=>{
      const filteredres = resObj.filter(
        (res) => res.info.avgRating > 4 
      )
      setReslist(filteredres);
  }

    return (
      <div className='body'>
        <div className='filter'>
            search
            <button className='filet-btn' onClick={clickHandler}>Top rated Restros</button>
        </div>
        <div className='card-container'>
          {
           reslist.map((item,index) =>
             <Restaurantcard key={item.info.id} resData={item}/>
           ) 
          }        
        </div>
      </div>
    )
  }


  export default Bodycomp;