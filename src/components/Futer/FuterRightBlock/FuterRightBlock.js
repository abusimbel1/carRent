import React from 'react'
import classes from './FuterRightBlock.module.scss'
import Button from '../../UI/Button/Button'
import {Link} from 'react-router-dom'


export const FuterRightBlock = () =>{
    return(
        <div className={classes.FuterRightBlock}>
            <Link to={'/reserve'}>
                <Button
                    type="success"
                    name={'забронировать'}
                    >
                </Button>
            </Link>
        </div>
    )
    
}