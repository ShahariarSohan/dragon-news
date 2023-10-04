import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import News from "../Pages/News";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../data/news.json"),
      },
      {
        path: "/news/:id",
        element: <News></News>,
        loader: () => fetch("../data/news.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default myRouter;
