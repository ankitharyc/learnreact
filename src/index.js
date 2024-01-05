import React, { Suspense,lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About.js'; 
import Contact from './components/Contact.js';  
import Error from './components/Error.js';    
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Bodycomp from './components/Body.js';
import Restromenu from './components/Restromenu.js';
// import Grocery from './components/Grocery.js';

const Grocery = lazy(() => import("./components/Grocery.js"))
const appRouter = createBrowserRouter([
  {
    path :'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Bodycomp/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path:'/restaurants/:resID',
        element:<Restromenu/>
      }
    ],  
    errorElement:<Error/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
