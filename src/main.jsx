import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRouter from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter}></RouterProvider>
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>
);
