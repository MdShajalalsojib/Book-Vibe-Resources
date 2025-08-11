import React from 'react';
import Bannal from '../../components/Bannal/Bannal';
import Book from '../Book/Book';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Bannal></Bannal>
            <Book data={data}></Book>
        </div>
    );
};

export default Home;