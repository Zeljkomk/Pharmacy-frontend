import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {

    state = {
        najaven: localStorage.getItem('username'),
        menuShown: false,
        active: 'Dashboard',
        itemsAdmin: [
            {
                label: 'Home',
                imgSrc: 'icon-audit.png',
                path: '/home'
            },
            {
                label: 'Cart',
                imgSrc: 'icon-point-contact.png',
                path: '/cart'
            }
        ],

        itemsNenajaven: [
            {
                label: 'Home',
                imgSrc: 'icon-audit.png',
                path: '/home'
            }
        ]
    };


    toggleSidebar() {
        let menuClass = '';
        let toggleClass = '';

        if (this.state.menuShown) {
            menuClass = 'menu';
            toggleClass = '';
        } else {
            menuClass = 'menu menu_shown';
            toggleClass = 'active'
        }

        document.getElementById('menu').setAttribute('class', menuClass);
        document.getElementById('nav-toggle').setAttribute('class', toggleClass);

        this.setState((prevState) => ({
            menuShown: !prevState.menuShown
        }));
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    {/*<img style={{width: "15%",height:"5%", padding:"5px", paddingRight: "13px"}} src={require(`../Login`)} id="logo_amerx" alt=""></img>*/}
                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                            data-target="#navbarCollapse1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse1">
                        <div className="navbar-nav">
                            {
                                this.state.najaven ?
                                    this.state.itemsAdmin.map((item, index) => {
                                        return (
                                            <NavLink key={index}
                                                     style={{color: "white", fontSize: "initial", fontWeight: "bold"}}
                                                     className="menu_menu" to={item.path}>                                                <span><img
                                                key={index} className="img-icon ml-1"
                                                src={require(`../../assets/images/dashboard_icons/${item.imgSrc}`)}
                                                alt=""/></span>
                                                {item.label}
                                            </NavLink>
                                        );
                                    }) : this.state.itemsNenajaven.map((item, index) => {
                                        return (
                                            <NavLink key={index}
                                                     style={{color: "white", fontSize: "initial", fontWeight: "bold"}}
                                                     className="menu_menu" to={item.path}>                                                <span><img
                                                key={index} className="img-icon ml-1"
                                                src={require(`../../assets/images/dashboard_icons/${item.imgSrc}`)}
                                                alt=""/></span>
                                                {item.label}
                                            </NavLink>
                                        );
                                    })
                            }


                        </div>

                        <div className="navbar-nav ml-auto">

                        </div>
                        {this.state.najaven ?
                        <div className="navbar-nav ml-auto">
                            <p className="nav-item nav-link" style={{
                                color: "white",
                                fontSize: "initial",
                                fontWeight: "bold"
                            }}>{this.state.najaven}</p>
                            <a className="nav-item nav-link"
                               style={{color: "white", fontSize: "initial", fontWeight: "bold"}}
                               href="/logout">Logout</a> </div>:     <div className="navbar-nav ml-auto">
                                <p className="nav-item nav-link" style={{
                                    color: "white",
                                    fontSize: "initial",
                                    fontWeight: "bold"
                                }}></p>
                                <a className="nav-item nav-link"
                                   style={{color: "white", fontSize: "initial", fontWeight: "bold"}}
                                   href="/signup">Sign Up</a> <a className="nav-item nav-link"
                                                              style={{color: "white", fontSize: "initial", fontWeight: "bold"}}
                                                              href="/login">Login</a> </div>

                                }

                    </div>
                </nav>
            </div>


        );
    }
}

export default Nav;