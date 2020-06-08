import React from 'react'
import classes from './Phones.module.scss'
import {Link} from 'react-router-dom'
import Phone from '../../Photos/phone.png'
import Location from '../../Photos/pin.png'
import Viber from '../../Photos/viber.png'
import WhatSapp from '../../Photos/whatsapp.png'
import Email from '../../Photos/email.png'

export const Phones = (props) =>{
    return(
        <div className={classes.Phones}>
            {console.log(props)}
            <div className={classes.boxWithInfo}>
                <div className={classes.address}><img src={Location} alt="location"/> 	&nbsp;{props.data.address}</div>
                <div><img src={Location} alt="location"/> 	&nbsp;< Link to='/contacts' >(Переглянути на карті)</Link></div>
                <div><img src={Phone} alt="location"/> 	&nbsp;{props.data.phoneNumber} &nbsp;<img src={Viber} alt="viber"/> &nbsp;<img src={WhatSapp} alt="whatsapp"/></div>
                <div><img src={Email} alt="location"/> 	&nbsp;{props.data.mail}</div>
            </div>
        </div>
    ) 
    
}