import React from 'react'
import classes from './Car.module.scss'
import Button from '../../../UI/Button/Button'
import {Link} from 'react-router-dom'
import CarImg from '../../../../Photos/skoda-fabia.jpg'
import Canister from '../../../../Photos/canister.png'
import User from '../../../../Photos/user.png'
import GearBox from '../../../../Photos/gear-box.png'
import CarDoor from '../../../../Photos/car-door.png'


const Car = ({ posts, loading }) => {
    if (loading) { 
      return <h2>Loading...</h2>; 
    }
    // const cls = ['list-grou']
    // classes.PriceList
    console.log(posts)
    return (
      posts.length < 1 
      ?
      <div>no results</div>
      : 
      <ul className={classes.Car}>
        {posts.map((car, index) => ( 
          <>
          <li key={index} className={classes.listItem}> 
            {/* <p className={classes.model}>{car.name}({car.transmission})</p> */}
            <div className={classes.leftSide}><Link to={'/car/'+car.id}><img src={CarImg} alt="car"/></Link></div>
            <div className={classes.midSide}>
              <p className={classes.carModel}><Link to={'/car/'+car.id}>&nbsp;{car.name}</Link></p>
              <div className={classes.characteristics}>
              <p><img src={GearBox} alt="transmission"/>&nbsp;{car.transmission}</p>    
              <p><img src={Canister} alt="fuel"/>&nbsp;{car.fuelConsumption}л/100км</p>
              <p><img src={User} alt="passengers"/>&nbsp;{car.numberOfЗassengers} пасажирів</p>
              <p><img src={CarDoor} alt="door"/>&nbsp;{car.doors} дверей</p>
              </div> 
            </div>  
            <div className={classes.rightSide}>
              <div className={classes.mainPrice}>
                <p>від <span>{car.price}$</span>/доба</p>  
                </div>
                <div className={classes.dayPrice}>
                  <div><p className={classes.topEl}><span className={classes.spanItem1}>30+</span><span className={classes.spanItem}>діб</span></p><p className={classes.botEl}>{car.discountPrice[0]} $</p></div>
                  <div><p className={classes.topEl}><span className={classes.spanItem1}>8+</span><span className={classes.spanItem}>діб</span></p><p className={classes.botEl}>{car.discountPrice[1]} $</p></div>
                  <div><p className={classes.topEl}><span className={classes.spanItem1}>3-7</span><span className={classes.spanItem}>діб</span></p><p className={classes.botEl}>{car.discountPrice[2]} $</p></div>
                  <div><p className={classes.topEl}><span className={classes.spanItem1}>1-2</span><span className={classes.spanItem}>доби</span></p><p className={classes.botEl}>{car.discountPrice[3]} $</p></div>
                </div>
                <div className={classes.reserveItemButton}>
                <Link to={'/car/bron6'}>
                    <Button
                        type="success"
                        name={'БРОНЮВАТИ'}
                        >
                    </Button>
                </Link>
                    </div>
              </div> 
            {/* <p></p> */}
          </li>
          <hr/>
          </>
        ))}
      </ul>
    );
  };
  
  export default Car
  