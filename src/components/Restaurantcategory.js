import React from 'react'
import Itemlist from './Itemlist';

const Restaurantcategory = ({data, showitem ,setShowindex}) => {
    console.log(data);
    // const [showitems, setShowitems] = useState(false);
    const handleClick = ()=>{
        console.log('clicked');
        setShowindex(!showitem);
    }

  return (
    <div>
        <div className='bg-pink-100 p-2 font-bold text-lg shadow-lg my-3'>
        <div className="cursor-pointer mb-2 flex justify-between" onClick={handleClick}>
            <h2>{data.title}({data.itemCards.length})</h2>
            <span>+</span>
        </div>
        
        {showitem && <Itemlist items={data.itemCards}/> } 
        
        </div>           
    </div>
  )
}

export default Restaurantcategory