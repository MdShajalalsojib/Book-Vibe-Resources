import React from 'react';

import {
  createBrowserRouter,
  Routes,
} from "react-router"
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Roods from '../pages/Rood/Roods';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roods,
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