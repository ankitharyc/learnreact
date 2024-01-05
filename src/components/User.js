import React, { useState } from 'react'

const User = ({name}) => {
const [count] = useState(0);
const [count2]  = useState(1);
  return (
    <div className='usercard'>
        <h1>Count:{count}</h1>
        <h1>Count2:{count2}</h1>
        <h2>Name:{name}</h2>
        <h3>Location</h3>
        <p>Contact : @ankitha</p>
    </div>
  )
}

export default User