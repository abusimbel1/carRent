import React, {Component} from 'react'
import classes from './Contacts.module.scss'
import {Phones} from '../../components/Phones/Phones'

class Contacts extends Component {
    renderData(){
        const data = require('../../contacts.json')
        return (
            data.contacts.map((contact, index) =>{
                return <Phones key={index} data={contact} />
            })
        )
        
    }
    renderMap(){
        const data = require('../../contacts.json')
        console.log(data.contacts)
        return data.contacts[0].map
    }
   render() {
       return(
       <div className={classes.Contacts}>
           <h1>КОНТАКТИ</h1> 
           <div className={classes.phoneItem}>
                {/* <Phones data={this.renderData()}/> */}
                {this.renderData()}
           </div>
           <div className={classes.map}> <iframe title="map" src={this.renderMap()} /></div>
            
       </div>
   )
  }
} 

export default Contacts       