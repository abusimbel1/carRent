import React from 'react'
import classes from './CarInfo.module.scss'
import Image from '../../Photos/3_Citroen-C1-540x335.jpg'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import UserImg from '../../Photos/user.png'
import GasStationImg from '../../Photos/fuel.png'
import DoorImg from '../../Photos/car-door.png'
import MotorImg from '../../Photos/sym-motor.png'
import ACImg from '../../Photos/snow.png'
import GearBox from '../../Photos/gear-box.png'
import Canister from '../../Photos/canister.png'

export const CarInfo = (props) => {
    console.log(props.infoAboutCar.name)
    return (
        <div className={classes.CarInfo}>
            <div className={classes.leftBox}>
                <div className={classes.carModel}>{props.infoAboutCar.name}</div>
                <div><img src={Image} alt="photo_of_car" /></div>
            </div>
            <div className={classes.rightBox}>
                <div className={classes.pricePerDayAndReserve}>
                    <div className={classes.pricePerDay}>від <span>{props.infoAboutCar.price}$</span>/доба</div>
                    <div className={classes.reserveBut}><Link to={'/car/bron6'}>
                        <Button
                            type="success"
                            name={'БРОНЮВАТИ'}
                        >
                        </Button>
                    </Link></div>
                </div>
                <div className={classes.price}>
                    <div>
                        <div className={classes.topEl}><span>30+</span><p>діб</p></div>
                        <p className={classes.botEl}>{props.infoAboutCar.discountPrice[0]} $</p>
                    </div>
                    <div>
                        <div className={classes.topEl}><span>8+</span><p>діб</p></div>
                        <p className={classes.botEl}>{props.infoAboutCar.discountPrice[1]} $</p>
                    </div>
                    <div>
                        <div className={classes.topEl}><span>3-7</span><p>діб</p></div>
                        <p  className={classes.botEl}>{props.infoAboutCar.discountPrice[2]} $</p>
                    </div>
                    <div>
                        <div className={classes.topEl}><span>1-2</span><p>доби</p></div>
                        <p  className={classes.botEl}>{props.infoAboutCar.discountPrice[3]} $</p>
                    </div>
                </div>
                <div className={classes.characteristic}>
                    <div>
                        <img src={UserImg} alt="user" />
                        <p>{props.infoAboutCar.numberOfЗassengers}</p>
                    </div>
                    <div>
                        <img src={GasStationImg} alt="GasStationImg" />
                        <p>{props.infoAboutCar.fuelConsumption}л /100км</p>
                    </div>
                    <div>
                        <img src={DoorImg} alt="DoorImg" />
                        <p>{props.infoAboutCar.doors}</p>
                    </div>
                    <div>
                        <img src={Canister} alt="MotorImg" /> 
                        <p>{props.infoAboutCar.fuelType}</p>
                    </div>
                    <div>
                        <img src={GearBox} alt="gear-box" />
                        <p>{props.infoAboutCar.transmission}</p>
                    </div>
                    <div>
                        <img src={MotorImg} alt="motor" />
                        <p>{props.infoAboutCar.motor}</p>
                    </div>
                    <div>
                        <img src={ACImg} alt="A/C" />
                        <p>Кондиціонер</p>
                    </div>
                </div>
            </div>
        </div>
    )
}     