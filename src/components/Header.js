import foodlogo from '../food-shopping.png'

const Headercomp = () =>{
    return (
      <div className="header">
        <div className="logo">
          <img src={foodlogo} alt="foodlogo"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact US</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Headercomp;