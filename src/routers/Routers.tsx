import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from '../components/layouts/mainLayout/MainLayout'
import HomePage from '../pages/homepage/HomePage';
const Routers = () => {
   return useRoutes([
      {
         path: '',
         element: <MainLayout />,
         children: [
            {
               path: '',
               element: <Navigate to='HomePage' />
            },
            {
               path:'HomePage',
               element:<HomePage/>,
            }
         ]
      },
   ])
}

export default Routers