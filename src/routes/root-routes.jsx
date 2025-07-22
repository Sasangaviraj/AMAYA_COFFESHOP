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

          // {
          //   path: "about",
          //   children: [
          //     {
          //       index: true,
          //       element: <div>about index</div>,
          //     },
          //     {
          //       path: "abc",
          //       element: <div>abc</div>,
          //     },
          //   ],
          //   element: (
          //     <div>
          //       about
          //       <Outlet />
          //     </div>
          //   ),
          // },

          {
            path:"about",
            Component:About,
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
            path:"shop",
            Component: Shop,
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
]);

const RootRouter = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
