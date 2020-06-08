import React, {useState, useEffect } from 'react';
import classes from './Cars.module.scss'
// import {CarItemInList} from './CarItemInList/CarItemInList'
import Pagination from '../Pagination/Pagination';
import Car from './CarItemInList/Car/Car'

export  const Cars = (props) =>{
    const [posts, setPosts] = useState([]);
    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    useEffect(() => {
        const fetchPosts = () => {
            
        // console.log(props.match.params);
        setPosts(props.data);
        };  
        fetchPosts();
    });
    // if(props.match.params){
        // console.log(new URLSearchParams(props.location.search).get("name"))
    // }
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    }
    return(
        <div className={classes.Cars}>
        <Car posts={currentPosts} loading={loading} />
        <Pagination
            postsPerPage={postsPerPage} 
            totalPosts={posts.length}
            paginate={paginate}
        />
        </div> 
    )
}     
export default Cars