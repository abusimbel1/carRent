import React from 'react'
// import {NavLink} from 'react-router-dom'
import classes from './Button.module.scss'


const Button = props => {

    const cls =[
        classes.Button,
        'btn btn-warning'
        // classes[props.type]
    ]
    return(
         <button  className={cls.join(' ')}>
            {props.name}
         </button>
    )
}

export default Button