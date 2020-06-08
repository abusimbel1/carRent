import React from 'react'
import classes from './Categories.module.scss'

export const Categories = props => {
    console.log(props)
    return(
        <>
        <div className={classes.status}>
            <p>{props.status}</p>
        </div>
        <div className={classes.price}>
            <p>Від &nbsp;<strong>{props.price}</strong> $/доба</p>
        </div>
    </>
    )
    
}