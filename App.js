import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import RestroDetails from "./src/components/RestroDetails";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
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
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestroDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
