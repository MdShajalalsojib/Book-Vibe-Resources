import React from 'react';

const Navbar = () => {
    const links = <>
       <li className='m-3 text-ms font-bold btn'>Home</li>
       <li className='m-3 text-ms font-bold btn'>Listed Books</li>
       <li className='m-3 text-ms font-bold btn'>Pages to Read</li>
    </>
    return (
        <div className="navbar  bg-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn   text-xl text-white">Book Vibe</a>
  </div>
  <div className="navbar-center text-black hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn m-3 bg-[#59C6D2]">Sign In</a>
    <a className="btn bg-[#23BE0A]">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;