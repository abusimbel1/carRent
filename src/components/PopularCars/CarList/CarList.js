import React from 'react'
import classes from './CarList.module.scss'
import {CarItem} from './CarItem/CarItem'

const CarList = props => (
    <div className={classes.CarList}>
        <div className={classes['carousel-container']}>
        <div className={classes['carousel-inner']}>
            <div className={classes.track}>{
        props.info.map((car, index) => {
        return(
            <CarItem 
                key={index}
                name={car}
            /> 
        )
    })
    }
            </div>
        </div>
        </div>
        {/* <div className={classes.nav}>
            <p className={classes.prev}>
            <i className="material-icons">
            keyboard_arrow_left
            </i>
            </p>
            <p className={classes.next}>
            <i className="material-icons">
            keyboard_arrow_right
            </i>
            </p>
        </div>   */}
    </div>
    
)
export default CarList