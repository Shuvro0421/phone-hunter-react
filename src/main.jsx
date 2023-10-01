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
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch('/phones.json'),
        element: <PrivateRoute><Home></Home></PrivateRoute>

      },
      {
        path: "/favorites",
        element: <PrivateRoute><Favorites></Favorites></PrivateRoute>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/phones/:id",
        element: <PrivateRoute><PhoneDetails></PhoneDetails></PrivateRoute>,
        loader: () => fetch('/phones.json')
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
