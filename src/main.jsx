import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Products from './Components/Products/Products.jsx';
import Items from './Components/items/Items.jsx';
import ProductDetails from './Components/Productetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },{
        path:"/statisctics",
        loader:()=>fetch("/data.json"),
        element:<Statistics></Statistics>
      },{
       path:"/items",
       loader:()=>fetch("/data.json"),
       element:<Items></Items>
      },{
        path:'/products/:id',
       loader:()=>fetch("/data.json"),
       element:<ProductDetails></ProductDetails>
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
