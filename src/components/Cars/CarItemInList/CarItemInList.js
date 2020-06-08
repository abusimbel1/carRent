import React, { useState, useEffect } from 'react';
import classes from './CarItemInList.module.scss'
import Car from './Car/Car'
import Pagination from '../../Pagination/Pagination'

export const CarItemInList = (props) => {

    const [posts, setPosts] = useState([]);
    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    useEffect(() => {
        const fetchPosts = () => {
          setPosts(props.car);
        };
        fetchPosts();
      });
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => {
        console.log(pageNumber);
        setCurrentPage(pageNumber)
      }
    return ( 
        <div className={classes.CarItemInList}>
            <h1>{props.car.name}</h1>
            <Car posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div> 
    )
}          