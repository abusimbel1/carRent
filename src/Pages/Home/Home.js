import React, {Component} from 'react'
import {CarouselItem} from '../../components/Carousel/CarouselItem'
import classes from './Home.module.scss';
// import {Categories} from '../../components/PopularCars/Categories/Categories'
// import {dataBase} from '../../data.json'
import {PopularCars} from '../../components/PopularCars/PopularCars'

class Home extends Component {
    renderCategories(){
        let dataFromDatabase = require('../../data.json')
        return dataFromDatabase.categories.map((data, index) =>{
            return(
                <PopularCars
                    key={index}
                    name={data} 
                >
                </PopularCars>
            )
        })
    }
   render() {
       return(
       <div className={classes.Home}>
            <CarouselItem />
            &nbsp;<h1>ПОПУЛЯРНІ АВТО</h1>
            {this.renderCategories()}
            {/* <Categories name={}/> */}
       </div>
   )
  }
}

export default Home