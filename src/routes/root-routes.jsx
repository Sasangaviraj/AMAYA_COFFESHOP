import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import RootLayout from "../latout/root-layout";
import HomeScreen from "../pages/home";
import Contact from "../pages/contact";
import Shop from "../pages/shop";



const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { 
        Component:RootLayout,
        children: [
          
          {
            index: true,
            Component:HomeScreen,
          },

          {
            path:'about',
            children:[
                {
                    index:true,
                    element: <div>about index</div>
                },
                {
                    path:'abc',
                    element: <div>abc
                    </div>
                }
            ],
            element: (
                <div>about
                     <Outlet/>
                </div>
            )
          },

          {
            path:'contact',
            Component:Contact,
          },

          {
            path:'shop',
            Component:Shop,
          }

        ],
      },
    ],
  },

  {
    path: "/login",
  },
]);

const RootRouter = () => {
  return <RouterProvider router={router}/>;
};

export default RootRouter;
