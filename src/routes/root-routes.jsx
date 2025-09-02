import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "../latout/root-layout"; 
import HomeScreen from "../pages/home"; 
import Contact from "../pages/contact"; 
import Shop from "../pages/shop"; 
import WhooleSale from "../pages/whoolesale";
import Location from "../pages/location"; 
import About from "../pages/about"; 
import SignUpPage from "../pages/sign-up"; 
import SignInPage from "../pages/login"; 
import DashboardPage from "../pages/dashboard"; 
import BaristaTraning from "../pages/barista-traning"; 
import SingleProductDetails from "../pages/single_product"; 
import CartPage from "../pages/cart.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        Component: RootLayout,
        children: [
          {
            index: true,
            Component: HomeScreen,
          },
          {
            path: "about",
            Component: About,
          },
          {
            path: "contact",
            Component: Contact,
          },
          {
            path: "shop", 
            Component: Shop,
          },
          {
            path: "whoolesale",
            Component: WhooleSale,
          },
          {
            path: "location",
            Component: Location,
          },
          {
            path:"barista-traning",
            Component:BaristaTraning,
          },
          {
            path:"products/:productId", 
            Component:SingleProductDetails,
          },
          {
            path:"cart", 
            Component:CartPage,
          }
        ],
      },
    ],
  },
 
  {
    path:"/login",
    Component:SignInPage,
  },
  {
    path: "/sign-up", 
    Component:SignUpPage,
  },
  {
    path:"/dashboard",
    Component:DashboardPage,
  },
  
],
  {
    basename: "/AMAYA_COFFESHOP/",
  }
);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
