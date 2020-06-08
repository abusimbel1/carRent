import React from 'react'
import classes from './FuterMiddleBlock.module.scss'

export const FuterMiddleBlock = props => (
    <div className={classes.FuterMiddleBlock}>
        <p>{props.data.one}</p>
        <p>{props.data.two}</p>
        <p>{props.data.three}</p>
        <p>{props.data.four}</p>
        <p>{props.data.five}</p>
    </div>
  );
