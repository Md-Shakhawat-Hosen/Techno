

import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardHome from '../components/Dashboard/DashboardHome/DashboardHome';
import Price from '../components/Dashboard/Price/Price';
import Profile from '../components/Dashboard/Profile/Profile';
import User from '../components/Dashboard/User/User';
import Home from '../components/Home/Home';
import Navbar from '../components/NavBar/Navbar';
import Pricing from '../components/Pricing/Pricing';
import Products from '../components/Products/Products';
import ShowDetails from '../components/ShowDetails/ShowDetails';


    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navbar></Navbar>,

        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/about",
            element: <About></About>,
          },
          {
            path: "/products",
            loader: () => fetch("https://dummyjson.com/products"),
            element: <Products></Products>,
          },
          {
            path: "/product/:id",
            loader: ({ params }) =>
              fetch(`https://dummyjson.com/products/${params.id}`),
            element: <ShowDetails></ShowDetails>,
          },
          {
            path: "/pricing",
            element: <Pricing></Pricing>,
          },
          {
            path: "/contact",
            element: <Contact></Contact>,
          },
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
            children: [
              {
               path: "/dashboard",
               element: <DashboardHome></DashboardHome>
              },
              {
                path: "/dashboard/profile",
                element: <Profile></Profile>,
              },
              {
                path: "/dashboard/price",
                element: <Price></Price>,
              },
              {
                path: "/dashboard/user",
                element: <User></User>,
              },
            ],
          },
        ],
      },
    ]);
    


export default router;