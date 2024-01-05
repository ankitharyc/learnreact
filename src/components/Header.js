import { useEffect, useState, useContext } from 'react';
import foodlogo from '../food-shopping.png';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Headercomp = () =>{ 
const[btnName, setBtnname]  = useState('Login');
const data = useContext(UserContext);
console.log(data);

//if no dependency array - useeffect is called on every render
useEffect(()=>{
    console.log('useEffect is called');
})

//if empty dependency array - useeffect is called on initial render
useEffect(()=>{
  console.log('useEffect is called on intial rerender');
},[btnName])

//subscribing to the store using selector
const cartItems = useSelector((store) => store.cart.items);

  console.log('header rerendered')
    return (
      <div className="flex justify-between shadow mb-2 items-center sm:bg-green-100">
        <div className="logo">
          <img className="w-40" src={foodlogo} alt="foodlogo"></img>
        </div>
        <div className="nav-items flex">
          <ul className='flex p-4 m-4 gap-3'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact US</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li className='font-bold text-lg'>cart({cartItems.length} items)</li>
          </ul>
          <button className="background px-4 bg-pink-100" onClick={() =>{btnName === 'Login'?setBtnname('Logout'):setBtnname('Login');}}>{btnName}</button>
          <p className='font-bold ml-2'>{data.loggedUser}</p>
        </div>
      </div>
    )
  }

  export default Headercomp;