import React, { Component } from 'react';
import Logo from '../images/LOGO.png'
import toPersianNum from '../utils/PersianNumber'

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userAccountField: false, 
            reservedFoods: 0
        }
    }
    componentDidMount() {
        this.setState({reservedFoods : this.props.reservedFoods})
        this.setState({userAccountField: this.props.userAccountField ? this.props.userAccountField : false})
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light fixed-top">
                <div className="mx-3">
                    <a className="navbar-brand" href="./restaurant.html">
                        <img className = "myNav-logo" src={Logo} alt="logo"/>
                    </a>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className = "myNav-cartLink" href = "#">
                            <i className="flaticon-smart-cart myNav-cart"></i>
                            <span className = "myNav-badgeLabel">
                                <span className=" myNav-badge">{toPersianNum(this.state.reservedFoods)}</span>
                            </span>
                        </a>
                    </li>
                    {this.state.userAccountField &&
                        <li className="nav-item">
                            <a className="nav-link myNav-account" href="./profileOrders.html">حساب کاربری</a>
                        </li>
                    }
                    <li className="nav-item mx-3">
                        <a className="nav-link myNav-exit" href="./signup.html">خروج</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;