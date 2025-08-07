import React from 'react';

import {
  createBrowserRouter,
} from "react-router";
import Roods from '../pages/Rood/Roods';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Roods,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path:"/",
            Component:Home
        }
    ]
    

  },
]);