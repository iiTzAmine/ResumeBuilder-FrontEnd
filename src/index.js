import React from "react";
import ReactDOM from "react-dom/client";
import LaddingPage from "./LaddingPage";
import LoginPage from "./Pages/AuthPages/Login/LoginPage";
import RegistrationPage from "./Pages/AuthPages/Register/RegistrationPage";
import NavAdmin from "./Dashboard/Components/NavAdmin";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateResume from "./Pages/CreateResume";
import Offre from "./Pages/OffrePage/Offre";

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
  {
    path: "/offre",
    element: <Offre />,
  },
  {
    path: "/admin",
    element: <NavAdmin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
