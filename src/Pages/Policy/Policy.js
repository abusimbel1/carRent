import React, {Component} from 'react'
import classes from './Policy.module.scss'
import {Documents} from '../../components/Policy/Documents/Documents'
import {Payment} from '../../components/Policy/Payment/Payment'
import {Tariff} from '../../components/Policy/Tariff/Tariff'

class Policy extends Component {
   render() {
       return(
       <div className={classes.Policy}>
           <h1>УМОВИ ПРОКАТУ</h1>
            <Documents />
            <Payment />
            <Tariff />
       </div>
   )
  }
}

export default Policy    