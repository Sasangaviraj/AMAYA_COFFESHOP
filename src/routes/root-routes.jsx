import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import RootLayout from "../latout/root-layout";
import HomeScreen from "../pages/home";



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
            element:(
                <div><h1>contact</h1></div>
            )
          },

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
