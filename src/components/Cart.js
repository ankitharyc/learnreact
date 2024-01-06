import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartlist from './Cartlist';
import { clearCart } from '../utils/cartSlice';


const Cart = () => {
    const cardetails = useSelector((store)=>store.cart.items);
    console.log(cardetails);

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

  return (
    <div className='text-center'>
        <h1 className='text-lg font-bold'>Cart items list</h1>
        <div className='w-6/12 m-auto'>
            <button className='bg-pink-50 w-20 p-2 rounded-lg font-bold' onClick={handleClearCart}>clearCart</button>
            {cardetails.length === 0 && <h1>Please  add the items. your cart is empty</h1>}
             <Cartlist items={cardetails} />
        </div>
        
    </div>
  )
}

export default Cart