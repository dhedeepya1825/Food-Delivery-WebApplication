import React,{lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurantCard from "./components/RestaurantCard.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/ContactUs.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
const Grocery=lazy(()=>import("./components/Grocery.js"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
        {
          path: "/",
          element: <Body />,
        },
         {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
  ,
   {
        path:"/cart",
        element:<Cart/>,
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
    },
    {
      path:"/grocery",
      element:<Grocery/>,
    },
    ]
    ,
    errorElement:<Error/>,
   
},
 
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
