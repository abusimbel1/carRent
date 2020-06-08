import React, {Component} from 'react'
import classes from './Car.module.scss'
import {CarInfo} from '../../components/CarInfo/CarInfo'


class Car extends Component {
    renderCar(){
        const arrWithCars = require('../../cars.json')
        var carInfo = null
        arrWithCars.posts.forEach((car) =>{
            if(car.id === this.props.match.params.id){
                carInfo = car
            }
           
        })
        return carInfo
    }
    render() {
       return(
       <div className={classes.Car}>
       <CarInfo infoAboutCar={this.renderCar()}/>
           {/* {this.renderCar()}  */}
       </div>
   )
  }
}

export default Car      