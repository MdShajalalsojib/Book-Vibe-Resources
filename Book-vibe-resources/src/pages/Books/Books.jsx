
 import { Link, NavLink , Star} from 'react-router';
 import React, { use } from 'react';
 

const Books = ({singleBook}) => {
    // const data = use(bookPromise);

    // console.log(data)
    const {bookName, author,image,category,rating,bookId} = singleBook;
    return (
          <Link to={`bookDetails/${bookId}`}>
           <div className="card bg-white w-96 shadow-sm border ">
      <figure className='p-3 bg-gray-300 w-2/3 mx-auto mt-5'>
          <div >
            <img className='h-[166px] mt-10 mb-10' src= {image} alt="Shoes" />
          </div>
       </figure>
  <div className="card-body">
     <div className='flex justify-between'>
      <h2 className=" badge badge-secondary btn ">
       Young Adult
       </h2>
      <div className="badge badge-secondary btn">Identity</div>
    
     </div>
    <p className='font-bold text-2xl text-black'>{bookName}</p>

    <p className='text-gray-500'>{author}</p>
    <div className="card-actions  justify-between">
      <div className="  text-black">{category}</div>
       <div className='flex gap-2'>
        <div className="  text-black">{rating} </div>
      <div className='text-black'><Star /></div>
       </div>
    </div>
  </div>
</div>
          </Link>
    );
};

export default Books;