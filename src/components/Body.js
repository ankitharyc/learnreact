
import Restaurantcard,{withPromotedLabel} from './RestaurantCard'
import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Bodycomp = () =>{
  const [reslist,setReslist] = useState([]);
  const [filteredres, setFilteredres] = useState([]);
  const [searchval, setSearchval] = useState('');
  console.log('body rendered ');
  //Array destructuring - usestate example
  // const arr = useState(resObj);
  // const reslist = arr[0];
  // const setReslist = arr[1];

  const {loggedUser,secname, setUsername} = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLabel(Restaurantcard);

  //is called once after the render cycle is finished
  useEffect(()=>{
      console.log('useEffect called');
      fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json();
    console.log('anki'+json);
    setReslist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log('helo'+reslist);
  }

  //fileter the top rated restos
  const clickHandler = ()=>{
      const filteredres = reslist.filter(
        (res) => res.info.avgRating > 4 
      )
      setReslist(filteredres);
  }

  //search the resto based on search
  const searchHandler = () =>{
    console.log(searchval);
    const searchedres = reslist.filter(
      (res) => res.info.name.toLowerCase().includes(searchval)
    )
    setFilteredres(searchedres)
    setSearchval('');
  }

  // if(reslist.length === 0){
  //   return <Shimmer/>
  // }

  const onlinestatus = useOnlineStatus();

  if(onlinestatus === false)
    return (<h1>You are offline</h1>);
  
    return reslist.length === 0 ? (<Shimmer/>) :(
      <div className='body'>        
        <div className='filter'>
          <div className='search'>
            <input className="border border-solid border-black mr-5" type="text" value={searchval} placeholder="serch restoname" onChange={(e) =>{setSearchval(e.target.value)}}></input>
            <button className="bg-green-100 px-4 mr-5" onClick={searchHandler}>Search</button>
            <button className='bg-green-100 px-4 my-2 rounded-lg' onClick={clickHandler}>Top rated Restros</button>
            <label>Username:</label><input type="text" value={loggedUser} onChange={(e) => setUsername(e.target.value)} className='border border-black'></input>
          </div>            
        </div>
        
        <div className='flex flex-wrap gap-5'>
          {         
           filteredres.map((item,index) =>
            <Link key={item.info.id} to={"/restaurants/"+item.info.id}>
              {
              item.info.promoted ? <RestaurantCardPromoted resData={item}/> :
                <Restaurantcard resData={item}/> 
              }
            </Link>
           ) 
          }        
        </div>
      </div>
    )
  }


  export default Bodycomp;