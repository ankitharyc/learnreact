import { CDN_URL} from "../utils/constants";

const Itemlist = ({items})=>{
    console.log(items);
    return(
        <div>
            {
                items.map((item)=>{
                    return <div key={item.card.info.id} className="bg-white flex justify-between text-left font-normal border-t-2 border-solid mb-5 p-3 align-middle">
                        <div className="">
                            <p>{item.card.info.name}</p>
                            <p>Rs. {item.card.info.price/100}</p>
                            <p>{item.card.info.description}</p>
                        </div>
                        <div className="relative ">
                            <img className="w-28 h-20" src={CDN_URL+item.card.info.imageId} alt="dishname"/>
                            <button className="absolute bg-black p-1 border border-solid top-0 left-6 font-white text-white text-sm">Add +</button>
                        </div>
                        </div>
                })
            }           
        </div>
    )
}

export default Itemlist;    