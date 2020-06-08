import React, { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import classes from './Price.module.scss';
import {PriceListHead} from '../../components/PriceList/PriceListHead/PriceListHead'
import PriceList from '../../components/PriceList/PriceList'
// import axios from 'axios';

const Price = () =>{

const [posts, setPosts] = useState([]);
const [loading] = useState(false);
const [currentPage, setCurrentPage] = useState(1); 
const [postsPerPage] = useState(5);
// const string = '{"userId":1,"id":1}'
const dataFromDatabase = require('../../cars.json')
useEffect(() => {
  const fetchPosts = () => {
    setPosts(dataFromDatabase.posts);
  };
  fetchPosts();
});

// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
console.log(currentPosts);

// Change page
const paginate = pageNumber => {
  console.log(pageNumber);
  setCurrentPage(pageNumber)
}


return (
  <div className={classes.Price} >
    <h1>ЦІНИ</h1>
    <PriceListHead />
    {/* <div className='container mt-5'> */}
      <PriceList posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> 
    </div>
    // </div>
);
};

export default Price;
