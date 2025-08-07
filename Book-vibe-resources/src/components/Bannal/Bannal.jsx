import React from 'react';
import bookimage from '../../img/png-clipart-the-dating-playbook-for-men-a-proven-7-step-system-to-go-from-single-to-the-woman-of-your-dreams-amazon-com-woman-text-people-removebg-preview.png'

const Bannal = () => {
    return (
        <div className='bg-gray-300 rounded-lg mt-4 mb-4  flex '>
            <div className='text-center bg-center m-auto'>
                <h1 className='font-bold text-5xl text-black'>Books to freshen up your bookshelf</h1>
                <button className='bg-[#23BE0A] btn btn-primary mt-6 mb-6'>View The List</button>
            </div>
            <div>
                <img className='mt-6 mb-6' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Bannal;