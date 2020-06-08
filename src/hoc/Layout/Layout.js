import React, {Component} from 'react'
import classes from './Layout.module.scss'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DrawNav from '../../components/Navigation/DrawNav/DrawNav'
import Home from '../../Pages/Home/Home'
import Policy from '../../Pages/Policy/Policy'
import Futer from '../../components/Futer/Futer'
import Price from '../../Pages/Price/Price' 
import CarsInCity from '../../Pages/CarsInCity/CarsInCity'
import Car from '../../Pages/Car/Car'
import Reserve from '../../Pages/Reserve/Reserve'
import Contacts from '../../Pages/Contacts/Contacts'
 
class Layout extends Component {
   render() {
       return(
        <BrowserRouter>
            <DrawNav />
            <div className={classes.Layout}>
                <Switch>
                    <Route path={'/policy'} exact component={Policy} />
                    <Route path={'/price'} exact component={Price} />
                    <Route path={'/cars/:city'} exact component={CarsInCity} />
                    <Route path={'/car/:id'} exact component={Car} />
                    <Route path={'/reserve'} exact component={Reserve} />
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/contacts'} exact component={Contacts} />
                </Switch>
            </div>
            <Futer /> 
        </BrowserRouter>
   )
  }
} 
export default Layout