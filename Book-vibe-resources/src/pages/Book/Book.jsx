import React, { useEffect,useState } from 'react';
import Books from '../Books/Books';
import { Suspense } from 'react';

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
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6'>
                {
                data.map((singleBook)=><Books key={singleBook.bookId} 
                singleBook={singleBook}></Books>)
                  }
               </div>
            </Suspense>
        </div>
    );
};

export default Book;