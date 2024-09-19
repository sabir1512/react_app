import React, { lazy, Suspense, useState, useEffect } from "react";
import "../index.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "../utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Sabir Ali",
    };
    setUserName(data.name);
  }, []);
  return (
    //Default
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* Sabir Ali */}
      <div>
        {/* <UserContext.Provider value={{ loggedInUser: "Yusha Ali" }}> */}
        {/* Yusha Ali */}
        <Header />
        {/* </UserContext.Provider> */}

        <Outlet />
      </div>
    </UserContext.Provider>
    /* <UserContext.Provider value={{ loggedInUser: userName }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider> */
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />,
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
