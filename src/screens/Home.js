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
class Home extends Component {
    constructor(props) {
        super(props);

         this.state = {
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
            test : [
                <p>hello</p>,
                <p>hello</p>,
                <p>hello</p>,
                <p>hello</p>,
                <p>hello</p>,
                <p>hello</p>,
                <p>hello</p>,
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
                    <div class="col-3 partyCardWidth">
                        <div class="card myPartyCard">
                            <div class="row mt-2 justify-content-center">
                                <div class="col-6 mr-2">
                                    <img class = "menuFoodImage w-100" src = {partyFoods[index].imageUrl} alt="food-pic"/>
                                </div>
                                <div class="col-5 ml-1 padding-r-0">
                                    <div class = "foodName">
                                        <p class = "foodNameLabel d-flex"><strong>{partyFoods[index].name}</strong></p>
                                        <div class = "d-flex margin-t-15">
                                            <p class = "menuStarLabel">{toPersianNum(partyFoods[index].score)}</p>
                                            <i class="flaticon-star menuStarIcon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row mt-1 justify-content-around">
                                    <div class="col-6 pl-0">
                                        <p class = "menuFoodPrice myRedLineThrough">{toPersianNum(partyFoods[index].oldPrice)}</p>
                                    </div>
                                    <div class="col-6 pr-0">
                                        <p class = "menuFoodPrice">{toPersianNum(partyFoods[index].newPrice)}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row justify-content-around">
                                    <div class="col-6 pl-1">
                                        <p class="myRemainingFood">موجودی:‌ {toPersianNum(partyFoods[index].available)}</p>
                                    </div>
                                    <div class="col-6 pr-1">
                                        <button type="button" class="btn myPartyBuyBtn">خرید</button>
                                    </div>
                                </div>
                            </div>
                            <hr class="myDashedGreenLine"/>
                            <div class="text-center myPartyRestaurant">
                                <p>{partyFoods[index].restaurantName}</p>
                            </div>
                        </div>
                    </div>
                )
            } 
            console.log(content)
            return (
                <Slider children = {content}/>
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
                    <div class="row mt-2">
                        <div class="col-3">
                            <div class="card myPartyCard">
                                <img src={ResImg} width="50%" class="myHomeResLogo"/>
                                <p class="myNormalRestaurantName">Khames Fried Chicken</p>
                                <div class="text-center">
                                    <button type="button" class="btn myShowMenuBtn">نمایش منو</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card myPartyCard">
                                <img src={ResImg} width="50%" class="myHomeResLogo"/>
                                <p class="myNormalRestaurantName">Khames Fried Chicken</p>
                                <div class="text-center">
                                    <button type="button" class="btn myShowMenuBtn">نمایش منو</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card myPartyCard">
                                <img src={ResImg} width="50%" class="myHomeResLogo"/>
                                <p class="myNormalRestaurantName">Khames Fried Chicken</p>
                                <div class="text-center">
                                    <button type="button" class="btn myShowMenuBtn">نمایش منو</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card myPartyCard">
                                <img src={ResImg} width="50%" class="myHomeResLogo"/>
                                <p class="myNormalRestaurantName">Khames Fried Chicken</p>
                                <div class="text-center">
                                    <button type="button" class="btn myShowMenuBtn">نمایش منو</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-3">
                            <div class="card myPartyCard">
                                <img src={ResImg} width="50%" class="myHomeResLogo"/>
                                <p class="myNormalRestaurantName">Khames Fried Chicken</p>
                                <div class="text-center">
                                    <button type="button" class="btn myShowMenuBtn">نمایش منو</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card myPartyCard">
                                <img src={ResImg} width="50%" class="myHomeResLogo"/>
                                <p class="myNormalRestaurantName">Khames Fried Chicken</p>
                                <div class="text-center">
                                    <button type="button" class="btn myShowMenuBtn">نمایش منو</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card myPartyCard">
                                <img src={ResImg} width="50%" class="myHomeResLogo"/>
                                <p class="myNormalRestaurantName">Khames Fried Chicken</p>
                                <div class="text-center">
                                    <button type="button" class="btn myShowMenuBtn">نمایش منو</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card myPartyCard">
                                <img src={ResImg} width="50%" class="myHomeResLogo"/>
                                <p class="myNormalRestaurantName">Khames Fried Chicken</p>
                                <div class="text-center">
                                    <button type="button" class="btn myShowMenuBtn">نمایش منو</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;