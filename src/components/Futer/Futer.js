import React, {Component} from 'react'
import classes from './Futer.module.scss'
import {FuterLeftBlock} from './FuterLeftBlock/FuterLeftBlock'
import {FuterMiddleBlock} from './FuterMiddleBlock/FuterMiddleBlock'
import {FuterRightBlock} from './FuterRightBlock/FuterRightBlock'
const links = {
    one:'Парк авто',
    two:'Умови прокату',
    three:'Ціни',
    four:'Контакти',
    five:'Бронювання'}
class Futer extends Component {
   render() {
       return(
       <div className={classes.Futer}>
            <div>
                <FuterLeftBlock date={"2013-2020 \"Car Rent\""} info={'оренда автомобілей і Україні'}/> 
            </div>
            <div>
                <FuterMiddleBlock data={links}/>
            </div>
            <div>
                <FuterRightBlock />
            </div>
           
       </div>
   )
  }
}

export default Futer