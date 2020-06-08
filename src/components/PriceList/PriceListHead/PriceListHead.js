import React from 'react'
import classes from './PriceListHead.module.scss'

export const PriceListHead = () => {
    return (
        <div className={classes.PriceListHead}>
            <div className={classes.model}>
                <p>МОДЕЛЬ</p>
            </div>
            <div className={classes.pricePerDay}>
                <div className={classes.listHeadItm}>30+ днів</div>
                <div>8+ днів</div>
                <div>3-7 днів</div>
                <div>1-2 днів</div> 
            </div>
            <div className={classes.space}></div>
        </div> 
    )
}     