import React from 'react'
import {Categories} from './Categories/Categories'
import CarList from './CarList/CarList'
import {Link} from 'react-router-dom'
import classes from './PopularCars.module.scss';

export const PopularCars = (props) => {
    // console.log(props.name)
    return(
        <div className={classes.PopularCars}>
            <Categories 
                status={props.name.name}
                price={props.name.everagePrice}
            />
            <CarList 
                info={props.name.cars}
            />
            <p className={classes.link}>
                <Link to={'/cars/lviv/?filter='+props.name.name}>
                    Переглянути всі...
                </Link>
            </p>
            

        </div>
    )
}