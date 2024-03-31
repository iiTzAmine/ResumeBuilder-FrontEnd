import React from "react";
import ReactDOM from "react-dom/client";
import LaddingPage from "./LaddingPage";
import LoginPage from "./Pages/AuthPages/LoginPage";
import RegistrationPage from "./Pages/AuthPages/RegistrationPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateResume from "./Pages/CreateResume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LaddingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    path: "/create-resume",
    element: <CreateResume />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
