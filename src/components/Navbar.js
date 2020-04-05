import React, { Component } from 'react';
import Logo from '../images/LOGO.png'
import toPersianNum from '../utils/PersianNumber'

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reservedFoods: 0
        }
    }
    componentDidMount() {
        this.setState({reservedFoods : this.props.reservedFoods})
    }
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-light fixed-top">
                <div class="mx-3">
                    <a class="navbar-brand" href="./restaurant.html">
                        <img class = "myNav-logo" src={Logo} alt="logo"/>
                    </a>
                </div>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class = "myNav-cartLink" href = "#">
                            <span class = "myNav-badgeLabel">
                                <span class=" myNav-badge">{toPersianNum(this.state.reservedFoods)}</span>
                            </span>
                            <i class="flaticon-smart-cart myNav-cart"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link myNav-account" href="./profileOrders.html">حساب کاربری</a>
                    </li>
                    <li class="nav-item mx-3">
                        <a class="nav-link myNav-exit" href="./signup.html">خروج</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;