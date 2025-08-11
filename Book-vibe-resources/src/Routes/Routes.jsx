import React from 'react';

import {
  createBrowserRouter,
  Routes,
} from "react-router"
import Rood from '../pages/Rood/Roods';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rood,
      errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
                loader:()=>fetch('BooksData.json'),
            path:"/",
            Component: Home,
        }
    ]
    

  },
]);