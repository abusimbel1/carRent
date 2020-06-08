import React, {Component} from 'react'
import classes from './Reserve.module.scss'
import Select from '../../components/UI/Select/Select'

class Reserve extends Component {
  state ={
    value : ''
  }
  getOptions(){
    let arrWithCars = []
    const data = require('../../cars.json')
    data.posts.forEach((car) => {
      arrWithCars.push(car)
    })
    return arrWithCars 
  }
  onChangeHandler = event =>{ 
    console.log(event.target.value)
    this.setState({
      value: event.target.value
    })
  }
   render() {
     const select = <Select
     label=''
     options={this.getOptions()}
     onChange={this.onChangeHandler}
    //  value={this.state.selected}

     >
     </Select>
       return(
       <div className={classes.Reserve}>
          <h1>БРОНЮВАННЯ АВТОМОБІЛЯ</h1>
          {select}
          <p><input type="checkbox" name="option1" value="a1"  />Windows 95/98<br/>
          <input type="checkbox" name="option2" value="a2"/>Windows 2000<br/>
          <input type="checkbox" name="option3" value="a3"/>System X<br/> 
          <input type="checkbox" name="option4" value="a4"/>Linux<br/> 
          <input type="checkbox" name="option5" value="a5"/>X3-DOS</p> 
       </div>
   )
  }
}

export default Reserve