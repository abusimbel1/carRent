import React from 'react'
import classes from './PriceList.module.scss'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'


const PriceList = ({ posts, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }
    // const cls = ['list-grou']
    // classes.PriceList
    console.log(posts)
    return (
      <ul className={classes.PriceList}>
        {posts.map((post, index) => (
          <li key={index} className={classes.listItem}>
            <p className={classes.model}>{post.name}({post.transmission})</p>
            <div className={classes.discountItems}>
            <p className={classes.firsDiscount}>{post.discountPrice[0]}&nbsp;</p>
            <p className={classes.secondDiscount}>{post.discountPrice[1]}&nbsp;</p>
            <p className={classes.thirdDiscount}>{post.discountPrice[2]}&nbsp;</p>
            <p className={classes.fourthDiscount}>{post.discountPrice[3]}&nbsp;</p>
            </div>
            <div className={classes.reserveItemButton}>
            <Link to={'/reserve'}>
                <Button
                    type="success"
                    name={'БРОНЮВАТИ'}
                    >
                </Button>
            </Link>
                </div>
            {/* <p></p> */}
          </li>
        ))}
      </ul>
    );
  };
  
  export default PriceList;
  