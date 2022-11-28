import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import RoomList from "../pages/roomList/RoomList";
const Routers = () => {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="HomePage" />,
        },
        {
          path: "HomePage",
          element: <HomePage />,
        },
        {
          path: "roomlist/:id",
          element: <RoomList />,
        },
      ],
    },
  ]);
};

export default Routers;
