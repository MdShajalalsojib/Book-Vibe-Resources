import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Books from '../Books/Books';


const ReadList = () => {
    //worst case
    const [readList,setReadList]=useState([])

      const[sort,setSort]=useState("");



    const data = useLoaderData();
    console.log(data)
      useEffect(() => {
        const storedBookData = getStoredBook();
         const ConveredStoredBooks = storedBookData.map(id=>parseInt(id))
         const myReadList = data.filter(book => ConveredStoredBooks.includes(book.bookId));
          setReadList(myReadList)
      },[])

      const handleSort = (type) => {
         setSort(type)

         if(type === "pages"){
            const sortedByPage = [...readList].sort((a, b)=>a.totalPages - b.totalPages);
            setReadList(sortedByPage)
            console.log(sortedByPage)
         }

         if (type === "ratings"){
            const sortedByrating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByrating);
         }
      } 

    return (
        
        <div className='mt-10'>
            <details className="dropdown flex justify-center mb-5 ">
              <summary className="btn m-1 btn-primary">sort by : {sort?sort:""}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={()=>handleSort("pages")}>pages</a></li>
                <li><a onClick={()=>handleSort("ratings")}>ratings</a></li>
              </ul>
            </details>
            <Tabs>
    <TabList>
      <Tab>Read</Tab>
      <Tab>Wishllst</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read {readList.length}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6'>
            {
            readList.map(b=><Books key ={b.bookId} singleBook={b}></Books>)
         }
          </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content  Wishllst</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;