import React, { useEffect,useState } from 'react';

const Book = () => {

    const [allBooks, setAllBooks] = useState([]);

      useEffect(() => {
        fetch("BooksData.json")
            .then(res => res.json())
            .then(data => {
                setAllBooks(data)
            })
      },[])
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Books</h1>
        </div>
    );
};

export default Book;