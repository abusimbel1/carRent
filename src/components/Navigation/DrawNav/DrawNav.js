import React, { Component } from 'react'
import classes from './DrawNav.module.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../../logo.png'

const links = [
    {
        to: '#', lable: 'Парк авто', exact: true,
        submenu: [
            { to: '/cars/poltava', lable: 'Полтава', exact: true },
            { to: '/cars/lviv', lable: 'Львів', exact: true },
            { to: '/cars/rivne', lable: 'Рівне', exact: true },
            { to: '/cars/kiev', lable: 'Київ', exact: true },
        ]
    },
    { to: '/price', lable: 'Ціни', exact: true },
    { to: '/reserve', lable: 'Бронювання', exact: true },
    { to: '/policy', lable: 'Умови прокату', exact: true },
    { to: '/contacts', lable: 'Контакти', exact: true }
]
class DrawNav extends Component {
    showUl(){
        let el = document.getElementById('uList')
        el.style.visibility = 'visible'
    }
    hideUl(){
        let el = document.getElementById('uList')
        el.style.visibility = 'hidden'
    }
    renderLinks() {
        return links.map((link, index) => {
            return (
                link.lable === 'Парк авто'
                    ?
                    <li key={index}>
                        <NavLink
                            onClick={this.showUl}
                            to={link.to}
                            exact={link.exact}
                            // activeClassName={classes.active}
                            className={classes.ulItemWithSubmenu}
                        >
                            {link.lable}
                        </NavLink>
                        <ul className={classes.ulSubmenu} id="uList">{
                            link.submenu.map((cityLink, index) => {
                                return (
                                        <li key={index}
                                        onClick={this.hideUl}
                                        className={classes.submenuItem}>
                                            <NavLink
                                                to={cityLink.to}
                                                exact={cityLink.exact}
                                                activeClassName={classes.active}
                                                className={classes.ulItem}
                                            >
                                            {cityLink.lable}
                                            </NavLink>
                                        </li>
                                    )
                            })}</ul>
                    </li>

                    : <li key={index}>
                        <NavLink
                            to={link.to}
                            exact={link.exact}
                            activeClassName={classes.active}
                            className={classes.ulItem}
                        >
                            {link.lable}
                        </NavLink>
                    </li>
            )
        })
    }
    render() {
        const cls = [classes.DrawNav, 'navbar navbar-expand-lg',]
        return (
            <nav className={cls.join(' ')}>
                <div className="navbar-brand">
                    <NavLink className="nav-link" to="/" exact><img src={Logo} alt="logo" /></NavLink>
                </div>
                <ul className="navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

export default DrawNav