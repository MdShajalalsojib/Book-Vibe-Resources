import React from 'react';

import {
  createBrowserRouter,
  Routes,
} from "react-router"
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Roods from '../pages/Rood/Roods';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
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
        },
        {
          path:'/about',
          Component:About
        },
        {
          path:'readList',
          Component:ReadList
        },
        {
          path:'/bookDetails/:id',
          loader:()=>fetch('./BooksData.json'),
          Component:BookDetails
        }
    ]
    

  },
]);