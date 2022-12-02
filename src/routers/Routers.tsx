import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import RoomList from "../pages/roomList/RoomList";
import RoomDetails from "../pages/roomDetails/RoomDetails";
import UserInfo from "../pages/userInfo/UserInfo";
const Routers: React.FC = () => {
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
        {
          path: "roomdetails/:id",
          element: <RoomDetails />,
        },
        {
          path: "userinfo/:id",
          element: <UserInfo />,
        },
      ],
    },
  ]);
};

export default Routers;
