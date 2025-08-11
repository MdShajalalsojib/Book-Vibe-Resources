import React, { useEffect,useState } from 'react';
import Books from '../Books/Books';

const Book = ({data}) => {

      const [allBooks, setAllBooks] = useState([]);

    //   useEffect(() => {
    //     fetch("BooksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data)
    //         })
    //   },[])

    // const bookPromise = fetch('./BooksData.json').then(res=>res.json())
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Books</h1>
            <Suspense fallback = {<span>Loading.....</span>}>
              {
                data.map((singleBook)=><Books key={singleBook.bookId} singleBook={singleBook}></Books>)
              }
            </Suspense>
        </div>
    );
};

export default Book;