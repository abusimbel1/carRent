import React from 'react'
import classes from './FuterLeftBlock.module.scss';
import Logo from '../../../logo.png'

export const FuterLeftBlock = props => (
    <div className={classes.FuterLeftBlock}>
        <img src={Logo} alt='logo'/>
        <p>{props.date}</p>
        <p>{props.info}</p>
    </div>
  );