import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import LogIn from './components/LogIn/LogIn';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PhoneDetails from './components/PhoneDetails/PhoneDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        loader : () => fetch('/phones.json'),
        element : <Home></Home>

      },
      {
        path : "/favorites",
        element : <Favorites></Favorites>
      },
      {
        path : "/login",
        element : <LogIn></LogIn>
      },
      {
        path : "/phones/:id",
        element : <PhoneDetails></PhoneDetails>,
        loader : () => fetch('/phones.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
