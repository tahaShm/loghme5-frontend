import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Image } from 'react-bootstrap';
import '../styles/font/flaticon.css'
import '../styles/main.css'
import Navbar from '../components/Navbar';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import ResImg from '../images/KFC_logo.png'
import FoodImg from '../images/pizza.jpg'
import Slider from '../components/Slider';
import toPersianNum from '../utils/PersianNumber';
import RestaurantCard from '../components/RestaurantCard';
import PartyFoodCard from '../components/PartyFoodCard';
import { Redirect, withRouter } from 'react-router';
import Profile from './Profile';
import { Link } from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);

         this.state = {
            redirect: "",
            partyFoods : [
                {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCDDWRv3pWM13m11d0ujznrdfAYCjTKkBDEO2_9D-a9tuJXF7&usqp=CAU",
                    name: "پیتزا",
                    oldPrice: 30000,
                    newPrice: 23000,
                    available: 4,
                    restaurantId: "abcdefg",
                    restaurantName: "رستوران خامس",
                    description: "تهیه شده با بهترین مواد",
                    score: 5
                },
                {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCDDWRv3pWM13m11d0ujznrdfAYCjTKkBDEO2_9D-a9tuJXF7&usqp=CAU",
                    name: "پیتزا اعلا",
                    oldPrice: 35000,
                    newPrice: 29000,
                    available: 2,
                    restaurantId: "abcdefg",
                    restaurantName: "رستوران خامس",
                    description: "تهیه شده با بهترین مواد",
                    score: 4
                },
                {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCDDWRv3pWM13m11d0ujznrdfAYCjTKkBDEO2_9D-a9tuJXF7&usqp=CAU",
                    name: "پیتزا",
                    oldPrice: 30000,
                    newPrice: 23000,
                    available: 4,
                    restaurantId: "abcdefg",
                    restaurantName: "رستوران خامس",
                    description: "تهیه شده با بهترین مواد",
                    score: 5
                },
                {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCDDWRv3pWM13m11d0ujznrdfAYCjTKkBDEO2_9D-a9tuJXF7&usqp=CAU",
                    name: "پیتزا",
                    oldPrice: 30000,
                    newPrice: 23000,
                    available: 4,
                    restaurantId: "abcdefg",
                    restaurantName: "رستوران خامس",
                    description: "تهیه شده با بهترین مواد",
                    score: 5
                },
                {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCDDWRv3pWM13m11d0ujznrdfAYCjTKkBDEO2_9D-a9tuJXF7&usqp=CAU",
                    name: "پیتزا",
                    oldPrice: 30000,
                    newPrice: 23000,
                    available: 4,
                    restaurantId: "abcdefg",
                    restaurantName: "رستوران خامس",
                    description: "تهیه شده با بهترین مواد",
                    score: 5
                },
                {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCDDWRv3pWM13m11d0ujznrdfAYCjTKkBDEO2_9D-a9tuJXF7&usqp=CAU",
                    name: "پیتزا",
                    oldPrice: 30000,
                    newPrice: 23000,
                    available: 4,
                    restaurantId: "abcdefg",
                    restaurantName: "رستوران خامس",
                    description: "تهیه شده با بهترین مواد",
                    score: 5
                },
                {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCDDWRv3pWM13m11d0ujznrdfAYCjTKkBDEO2_9D-a9tuJXF7&usqp=CAU",
                    name: "پیتزا",
                    oldPrice: 30000,
                    newPrice: 23000,
                    available: 4,
                    restaurantId: "abcdefg",
                    restaurantName: "رستوران خامس",
                    description: "تهیه شده با بهترین مواد",
                    score: 5
                },
                {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCDDWRv3pWM13m11d0ujznrdfAYCjTKkBDEO2_9D-a9tuJXF7&usqp=CAU",
                    name: "پیتزا",
                    oldPrice: 30000,
                    newPrice: 23000,
                    available: 4,
                    restaurantId: "abcdefg",
                    restaurantName: "رستوران خامس",
                    description: "تهیه شده با بهترین مواد",
                    score: 5
                },
                {
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCDDWRv3pWM13m11d0ujznrdfAYCjTKkBDEO2_9D-a9tuJXF7&usqp=CAU",
                    name: "پیتزا اعلا",
                    oldPrice: 35000,
                    newPrice: 29000,
                    available: 2,
                    restaurantId: "abcdefg",
                    restaurantName: "رستوران خامس",
                    description: "تهیه شده با بهترین مواد",
                    score: 4
                }
            ],
            restaurants : [
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                },
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                },
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                },
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                },
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                },
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                },
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                },
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                },
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                },
                {
                    imageUrl: "https://www.free-largeimages.com/wp-content/uploads/2014/11/Kfc_logo-2.png",
                    restaurantId: "adlkja",
                    restaurantName: "Khames Fried chicken"
                }
            ]
        }
    }

    componentDidMount () {
        
    }

    renderPartyFoods() {
        if (this.state.partyFoods != null && this.state.partyFoods !== ""){
            let partyFoods = this.state.partyFoods;
            let content = [];
            
            for (let index = 0; index < partyFoods.length; index++) { 
                content.push(
                    <PartyFoodCard partyFood = {partyFoods[index]} />
                )
            } 
            console.log("content:", content)
            return (
                <Slider children = {content}/>
            )
        }
    }
    redirectRestaurant = (index) => {
        let path = '/restaurant/' + this.state.restaurants[index].restaurantId;
        this.setState({redirect: <Redirect to={'/profile'} /> })
    }
    renderRestaurantCards() {
        if (this.state.restaurants != null && this.state.restaurants !== ""){
            let restaurants = this.state.restaurants;
            let content = [];
            
            for (let index = 0; index < restaurants.length / 4; index++) { 
                content.push(
                    <div class = "row mt-2">
                        <RestaurantCard info = {restaurants[index*4]} onButtonClick = {(e) => this.redirectRestaurant(index*4)}/>
                        {index*4 + 1 < restaurants.length &&
                            <RestaurantCard info = {restaurants[index*4 + 1]} onButtonClick = {(e) => this.redirectRestaurant(index*4 + 1)}/>
                        }
                        {index*4 + 2 < restaurants.length &&
                            <RestaurantCard info = {restaurants[index*4 + 2]} onButtonClick = {(e) => this.redirectRestaurant(index*4 + 2)}/>
                        }
                        {index*4 + 3 < restaurants.length &&
                            <RestaurantCard info = {restaurants[index*4 + 3]} onButtonClick = {(e) => this.redirectRestaurant(index*4 + 3)}/>
                        }
                    </div>
                )
            }
            return (
                <div>
                    {content}
                </div>
            )
        }
    }

    render() { 
        return (
            <div>
                <Navbar reservedFoods = {3} />
                <HomeHeader />
                <div>
                    <p class="myHomeTitle">جشن غذا!</p>
                    <div class="myPartySeparator"></div>
                    <div class="myRemainingTime">
                        <p class = "timeLabelStyle">زمان باقی مانده: ۲۱:۴۸</p>
                    </div>
                </div>
                <div class="card myPartyNavCard">
                    <div>
                        {this.renderPartyFoods()}
                    </div>
                </div>

                <div>
                    <p class="myHomeTitle">رستوران ها</p>
                    <div class="myPartySeparator"></div>
                </div>

                <div class="container">
                    {this.renderRestaurantCards()}
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter((Home))