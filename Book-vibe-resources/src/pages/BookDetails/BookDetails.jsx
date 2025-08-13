import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { storedBookDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
     
     const { bookName, image,author, category, review, totalPages,publisher, yearOfPublishing,rating}= singleBook;
     const handleMarkAsRead = id => {
        //Store withe id
        //where to store
        //array or collection
        //if book already exist the show a alart
        //if book not exist then push in the collection or array
        storedBookDB(id)

     }
    
    return (
        <div className='w-2/2  mx-auto'>
            <div className='flex mt-7 mb-7 gap-5 justify-between'>
                 <div className='bg-gray-200 rounded-2xl w-2/5  '>
                  <img className='w-70 p-10 mx-auto mt-12 mb-12' src={image} alt="" />
                </div>
                <div className='w-2/3 border-2 p-4 rounded-2xl'>
                   
                   <h1 className='font-bold text-2xl'>{bookName}</h1>
                   <h3 className='font-bold'>{author}</h3>
                   <div className='border-t-1 border-dashed mt-2 mb-2'></div>
                   <h4 className='font-bold'>{category}</h4>
                   <div className='border-t-1 border-dashed mt-2 mb-2'></div>
                   <p className='text-gray-300'><p className='font-bold'>Review:</p>{review}</p>
                   <div className='flex gap-5 text-green-300'>
                      <div>
                        <p className='font-bold'>Tag</p>
                      </div>
                      <div>
                        <p>Young Aduit</p>
                      </div>
                      <div>
                        <p>identity</p>
                      </div>
                   </div>

                    
                  <div className='font-bold'>
                    <p>totalPages:{totalPages}</p>   
                   <p>Rublisher: {publisher}</p>   
                    <p>YearOfPublishing: {yearOfPublishing}</p>   
                   <p>Rating: {rating}</p>  
                    </div>    
                          <div className=' flex gap-20 mt-5'>
                             <div>
                                <button onClick={()=>handleMarkAsRead (id)} className="btn btn-dash">Read</button>
                             </div>
                              <div>
                                 <button className="btn btn-dash btn-primary">Wishllst</button>
                              </div>
                          </div>
               </div>
                
            </div>
              
        </div>
    );
};

export default BookDetails;