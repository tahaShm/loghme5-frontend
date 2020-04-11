import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Image } from 'react-bootstrap';
import '../styles/font/flaticon.css'
import '../styles/main.css'
import Navbar from '../components/Navbar';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import toPersianNum from '../utils/PersianNumber';
import RestaurantCard from '../components/RestaurantCard';
import PartyFoodCard from '../components/PartyFoodCard';
import { Redirect, withRouter } from 'react-router';
class Home extends Component {
    constructor(props) {
        super(props);

        this.showPartyFoodModal = this.showPartyFoodModal.bind(this)
        this.hidePartyFoodModal = this.hidePartyFoodModal.bind(this)

        this.state = {
            redirect: "",
            curIdx: 0,
            curFoodAmount: 0,
            dialogShow: false,
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

    showPartyFoodModal (index) {
        this.setState({curIdx: index})
        this.setState({curFoodAmount: 0})
        this.setState({dialogShow: true})
    }

    hidePartyFoodModal(){
        this.setState({dialogShow: false})
    }

    renderPartyFoods() {
        if (this.state.partyFoods != null && this.state.partyFoods !== ""){
            let partyFoods = this.state.partyFoods;
            let content = [];
            
            for (let index = 0; index < partyFoods.length; index++) { 
                content.push(
                    <PartyFoodCard partyFood = {partyFoods[index]} onButtonClick = {(e) => this.showPartyFoodModal(index)}/>
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

                <Modal 
                    show={this.state.dialogShow} 
                    onHide={this.hidePartyFoodModal}
                    centered 
                >
                    <Modal.Body class = "normalModal">
                        <div class = "foodModalTitle col">
                            <p class="text-center">رستوران خامس</p>
                        </div>
                        <div class = "foodModalBody row">
                            <div class = "col-5">
                                <img className = "modalFoodImage" src = {this.state.partyFoods[this.state.curIdx].imageUrl} alt="food-pic"/>
                            </div>
                            <div class = "col-7">
                                <div className = "modalFoodName row height-30">
                                    <p className = "modalFoodNameLabel"><strong>{this.state.partyFoods[this.state.curIdx].name}</strong></p>
                                    <i className="flaticon-star modalStar"></i>
                                    <p className = "modalFoodScore">{toPersianNum(this.state.partyFoods[this.state.curIdx].score)}</p>
                                </div>
                                <div className = "row height-30">
                                    <p className = "modalFoodDescriptionLabel">{this.state.partyFoods[this.state.curIdx].description}</p>
                                </div>
                                <div className = "row height-30">
                                    <p className = "modalFoodPriceLabel myRedLineThrough">{toPersianNum(this.state.partyFoods[this.state.curIdx].oldPrice)} </p>
                                    <p className = "modalFoodPriceLabel modalFoodNewPrice">{toPersianNum(this.state.partyFoods[this.state.curIdx].newPrice)} تومان</p>
                                </div>
                           </div>
                        </div>
                        <hr class="modalFoodHr"/>
                        <div class = "row foodModalFooter">
                            <div class = "col-7">          
                                <div className="d-flex ml-2 myNotFirstFood">
                                    <div className="ml-auto p-2">
                                        <div class="modalRemainingDiv">
                                            <p class="modalRemainingFood">موجودی:‌ {toPersianNum(this.state.partyFoods[this.state.curIdx].available)}</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 incDecDiv">
                                        <div className="d-flex flex-row">
                                            <a className="plusButton" onClick={this.increaseCurrentFood}>
                                                <i className="flaticon-plus"></i>
                                            </a>
                                            <p className="pl-3">{toPersianNum(this.state.curFoodAmount)}</p>
                                            <a className="minusButton" onClick={this.decreaseCurrentFood}>
                                                <i className="flaticon-minus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "col-5">
                                <button  type="button" className="btn modalConfirmBtn" onClick = {this.props.onButtonClick}>افزودن به سبد خرید</button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default withRouter((Home))