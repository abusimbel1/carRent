import React from 'react'
import classes from './CarouselItem.module.scss'
import firsIMg from '../../bentley.jpg'
import secondIMg from '../../volvo.jpg'
import thirdIMg from '../../audi.jpg'
// import {NavLink} from 'react-router-dom'
import {Carousel} from 'react-bootstrap'
// import Button from '../UI/Button/Button'
// import {Link} from 'react-router-dom'

export const CarouselItem = () => {
    const cls = [classes.CarouselItem,'d-block w-100',]
    return(
        <>
        {/* <div className={classes.CarouselItemButton}>
            <Link to={'/about'}>
                <Button
                    type="success"
                    name={'забронировать'}
                    >
                </Button>
            </Link>
        </div> */}
        <Carousel>
            <Carousel.Item>
                <img
                className={cls.join(' ')}
                src={firsIMg}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className={cls.join(' ')}
                src={secondIMg}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className={cls.join(' ')}
                src={thirdIMg}
                alt="Third slide"
                />
                </Carousel.Item>
        </Carousel>
        </>
    )
}