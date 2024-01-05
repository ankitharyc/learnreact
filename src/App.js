import './App.css';
import React, { useEffect } from 'react';
import Headercomp from './components/Header.js' 
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';

function App() {
  const[username, setUsername] = useState();
  const[secname, setSecname] = useState();

  useEffect(()=>{
    //make  afetch api and send name and ped
    const userdata ={
      loggedname : "Ankitha",
      secname: 'Reddy'
    }
    setUsername(userdata.loggedname);
    setSecname(userdata.secname);
  },[])
 

  return (
    <Provider store ={appStore}>
    <UserContext.Provider value ={{loggedUser : username, secname:secname,setUsername } }>
    <div className="AppLayout">
      <h1 className='text-center font-semibold text-2xl'>Food order App</h1>
      <UserContext.Provider value ={{loggedUser : 'Krishna'}}>
      <Headercomp/>
      </UserContext.Provider>
      {/* Outlet renders the component based on the route*/ }
      <Outlet/>
    </div>
   </UserContext.Provider>
   </Provider> 
  );
}


export default App;
