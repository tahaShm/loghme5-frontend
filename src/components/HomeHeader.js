import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Image } from 'react-bootstrap';
import '../styles/font/flaticon.css'
import '../styles/main.css'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import OrderRow from '../components/OrderRow'
import Footer from '../components/Footer';
import toPersianNum from '../utils/PersianNumber';
import { Redirect } from 'react-router';
import RestaurantImg from '../images/McDonald\'sLogo.png'

import FoodCart from '../components/FoodCart';
import FoodCard from '../components/FoodCard';
import Logo from '../images/LOGO.png'
class HomeHeader extends Component {
    constructor(props) {
        super(props);

         this.state = {
            
        }
    }

    componentDidMount () {
        
    }

    render() {
        
        return (
            <div>
                <header class = "myHomeHeader myHomeHeaderBackground">
                    <img class="myHomeLogo" src={Logo} alt="logo" />
                    <p class ="myHomeGreetingMsg">اولین و بزرگترین وب سایت سفارش آنلاین غذا در دانشگاه تهران</p>
                </header>
                <div class="card myCardBorder myMiddleCard mySearchCard">
                    <div class="row justify-content-center mySearchRow">
                        <div class="col-4 padding-r-10">
                            <input type="text" class="form-control mySearchInp" placeholder="نام غذا" />
                        </div>
                        <div class="col-4 padding-r-0">
                            <input type="text" class="form-control mySearchInp" placeholder="نام رستوران"/>
                        </div>
                        <div class="col-3 padding-r-0">
                            <button type="button" class="btn mySearchButton">جست و جو</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;