import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import RoomList from "../pages/roomList/RoomList";
import RoomDetails from "../pages/roomDetails/RoomDetails";
import UserInfo from "../pages/userInfo/UserInfo";
import UserManagement from "../pages/admin/userManagement/UserManagement";
import LocationManagement from "../pages/admin/locationManagement/LocationManagement";
import RoomInfoManagement from "../pages/admin/roomInfoManagement/RoomInforManagement";
import RentingManagement from "../pages/admin/rentingManagement/RentingManagement";
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
    {
      path: "admin",
      // element: <AdminLayout />,
      children: [
        {
          path: "usermanagement",
          element: <UserManagement />,
        },
        {
          path: "locationmanagement",
          element: <LocationManagement />,
        },
        {
          path: "roominfomanagement",
          element: <RoomInfoManagement />,
        },
        {
          path: "rentingmanagement/:id",
          element: <RentingManagement />,
        },
      ],
    },
  ]);
};

export default Routers;
