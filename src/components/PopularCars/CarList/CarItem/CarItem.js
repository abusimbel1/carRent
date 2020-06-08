import React from 'react'
import classes from './CarItem.module.scss'
import Canister from '../../../../Photos/fuel.jpg'
import Smart from '../../../../Photos/smart.jpg'
import GearBox from '../../../../Photos/gear-box.png'

import {Link} from 'react-router-dom'

export const CarItem = props => {
    console.log(props.name)
    return(
        <Link to={'/cars'}>
            <div className={classes['card-container']}>
                <div className={classes.card}>
                <div className={classes.model}>
                <p className={classes.name}>{props.name.name} <i className="fa fa-oil-can"></i></p>
                <div className={classes.characteristics}>
                    <p className={classes.fuelType}><img src={Canister} alt="canister"/>{props.name.fuelType}&nbsp;{props.name.motor}</p>
                    <p className={classes.transmission}><img src={GearBox} alt="gear-box"/>{props.name.transmission}</p>
                </div>
                </div>
                <div className={classes.img}><img src={Smart} alt="smart" /></div>
                <div className={classes.info}>
                    {props.name.price}$&nbsp;/доба
                </div>
                </div>
            </div>
        </Link>
    )
    
}