import React, { Component } from 'react'
import classes from './CarsInCity.module.scss'
import Cars from '../../components/Cars/Cars'
import Input from '../../components/UI/Input/Input'
import DniproImage from '../../Photos/maxresdefault.jpg'
// import {Link} from 'react-router-dom'

class CarsInCity extends Component {
    // {if(new URLSearchParams(this.props.location.search).get("filter")){

    // }}
    state = {
        filter: false,
        visited: false,
        category: new URLSearchParams(this.props.location.search).get("filter") || '',
        inputText: '',

    }

    // setFilter(){
    //     let filterFromUrl = new URLSearchParams(this.props.location.search).get("filter")
    //     console.log(new URLSearchParams(this.props.location.search).get("filter"))
    //     if(filterFromUrl){
    //         filterFromUrl.toLowerCase()
    //     }
    //     if(typeof filterFromUrl === 'string'){
    //         return filterFromUrl.toLowerCase()
    //     }
    //     else{return false}


    // }

    renderCars() {
        // const cls = []
        let carsFromDB = require('../../cars.json')
        let arrWithCars = [];
        console.log(this.state.category)
        carsFromDB.posts.forEach(car => {
            car.cities.forEach((city) => {
                if (this.props.match.params.city === city) {
                    if (this.state.inputText.length > 0) {
                        if (car.name.includes(this.state.inputText)) {
                            if (this.state.filter || this.state.category.length > 1) {
                                if (car.category === this.state.category.toLowerCase()) {
                                    arrWithCars.push(car)
                                } else { }
                            } else {
                                arrWithCars.push(car)
                            }
                        } else { }
                    } else {
                        if (this.state.filter || this.state.category.length > 1 ) {
                            if (car.category === this.state.category.toLowerCase()) {
                                arrWithCars.push(car)
                            }
                        } else {
                            arrWithCars.push(car)
                        }
                    }
                }
            })
        })
        return arrWithCars
    }
    renderInput() {
        return (
            <div className={classes.searchInput}>
                <Input
                    value={this.state.inputText}
                    valid={false}
                    touched={false}
                    label={''}
                    shouldValidate={false}
                    errorMessage={''}
                    onChange={event => this.onChangeHandler(event)}
                    placeholder={'Введіть марку автомобіля'}

                >
                </Input>
            </div>
        )
    }
    onChangeHandler = (event) => {
        // const cars = this.renderCars()
        // const value = event.target.value
        // for(let i=0;i<cars.length; i++){
        //     if(!cars[i].name.includes(value)){
        //         cars.slice(i, 1)
        //     }
        // }
        this.setState({
            inputText: event.target.value
        })
        console.log('sasha')
        // log
        // cars.forEach(car => {

        //     if(!car.name.includes(value)){
        //         cars.slice(index, 1)
        //     }
        // })
    }
    render() {
        console.log(this.state.filter)
        return (
            <div className={classes.CarsInCity}>
                {/* {this.setState({
           filter:this.setFilter
       })} */}
                <div className={classes.imgHead}>
                    <img src={DniproImage} alt="Dnipro" /></div>
                <div className={classes.classification}>
                    <div className={classes.filters} id="top">
                        <button onClick={() => this.setState({ filter: true, category: 'комфорт' })}>Комфорт</button>
                        <button onClick={() => this.setState({ filter: true, category: 'преміум' })}>Преміум</button>
                        <button onClick={() => this.setState({ filter: true, category: 'бюджетні' })}>Бюджетні</button>
                        <button onClick={() => this.setState({ filter: true, category: 'позашляховики' })}>Позашляховики</button>
                        <button onClick={() => this.setState({ filter: false, category: '' })}>Всі</button>
                    </div>
                    {
                        this.state.filter || this.state.category.length > 0
                            ?
                            <p className={classes.curFilter}>Filter: {this.state.category}</p>
                            :
                            null
                    }
                    {this.renderInput()}

                </div>
                <Cars data={this.renderCars()} filter={this.state.filter} />
            </div>
        )
    }
}

export default CarsInCity    