import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Image, Spinner } from 'react-bootstrap';
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
import Axios from 'axios';
import CartModal from '../components/CartModal';
import calcFoodCount from '../utils/OrderCounter';

class Home extends Component {
    constructor(props) {
        super(props);

        this.showPartyFoodModal = this.showPartyFoodModal.bind(this)
        this.hidePartyFoodModal = this.hidePartyFoodModal.bind(this)
        this.increaseCurrentFood = this.increaseCurrentFood.bind(this)
        this.decreaseCurrentFood = this.decreaseCurrentFood.bind(this)
        this.addPartyFoodFromModal = this.addPartyFoodFromModal.bind(this)
        this.increaseFood = this.increaseFood.bind(this)
        this.decreaseFood = this.decreaseFood.bind(this)
        this.finalizeOrder = this.finalizeOrder.bind(this)
        this.showCart = this.showCart.bind(this)
        this.hideCart = this.hideCart.bind(this)
        this.enableMessage = this.enableMessage.bind(this)

        this.timer = setTimeout(this.enableMessage, 1000);

        this.state = {
            redirect: "",
            curIdx: 0,
            curFoodCount: 0,
            dialogShow: false,
            showCartModal: false,
            restaurantLoading: true,
            partyLoading: true,
            partyFoods : [],
            restaurants : [],
            displayMessage: false,
            currentOrder: [],
            foodCountInOrder: 0
        }
    }

    enableMessage () {
        this.setState({displayMessage: true});
    }

    componentDidMount () {
        this.fetchRestaurants()
        this.fetchPartyFoods()
        this.fetchCurrentOrder()
    }

    fetchRestaurants = () => {
        Axios.get('http://localhost:8080/restaurant')
        .then((response) => {
            this.setState({
                restaurants: response.data,
                restaurantLoading: false
            })
        })
        .catch((error) => {
            console.log(error);
            this.props.history.push('/home');
        });
    }
    fetchPartyFoods = () => {
        Axios.get('http://localhost:8080/partyFood')
        .then((response) => {
            this.setState({
                partyFoods: response.data,
                partyLoading: false
            })
        })
        .catch((error) => {
            console.log(error);
            this.props.history.push('/home');
        });
    }
    fetchCurrentOrder = () => {
        Axios.get('http://localhost:8080/currentOrder')
        .then((response) => {
            this.setState({
                currentOrder: response.data,
                foodCountInOrder: calcFoodCount(response.data)
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    showPartyFoodModal (index) {
        this.setState({curIdx: index})
        this.setState({curFoodAmount: 0})
        this.setState({curFoodCount: 0})
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
            return (
                <Slider children = {content}/>
            )
        }
    }
    redirectRestaurant = (index) => {
        let path = '/restaurant/' + this.state.restaurants[index].id;
        this.props.history.push(path);
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
    showCart() {
        this.setState({showCartModal: true})
    }
    hideCart() {
        this.setState({showCartModal: false})
    }
    increaseCurrentFood() {
        if (this.state.curFoodCount == this.state.partyFoods[this.state.curIdx].food.count)
            return;
        this.setState({curFoodCount: this.state.curFoodCount + 1})
    }
    decreaseCurrentFood() {
        if (this.state.curFoodCount == 0)
            return;
        this.setState({curFoodCount: this.state.curFoodCount - 1})
    }
    addPartyFoodFromModal() {
        var food = this.state.partyFoods[this.state.curIdx]
        console.log(food)
        Axios.put('http://localhost:8080/partyFood/' + food.restaurantId, null, {params: {
            foodName: food.food.name,
            count: this.state.curFoodCount
        }})
        .then((response) => {
            this.setState({currentOrder: response.data})
            this.setState({foodCountInOrder: this.state.currentOrder.length});
        })
        .catch((error) => {
            console.log(error);
        });
        this.hidePartyFoodModal();
    }

    increaseFood = (index) => {
        let tempOrder = this.state.currentOrder.slice()
        tempOrder[index].count += 1
        this.setState({currentOrder: tempOrder})
        
        Axios.put('http://localhost:8080/food/' + this.state.restaurantId, null, {params: {
            foodName: this.state.currentOrder[index].name,
            count: 1
        }})
        .then((response) => {
            this.setState({currentOrder: response.data})
            this.setState({foodCountInOrder: calcFoodCount(response.data)});
        })
        .catch((error) => {
            console.log(error);
        });
    }
    decreaseFood = (index) => {
        let tempOrder = this.state.currentOrder.slice()
        tempOrder[index].count -= 1
        if (tempOrder[index].count < 0) {
            return;
        }
        this.setState({currentOrder: tempOrder})
        
        Axios.delete('http://localhost:8080/food/' + this.state.restaurantId, {params: {
            foodName: this.state.currentOrder[index].name,
            count: 1
        }})
        .then((response) => {
            this.setState({currentOrder: response.data})
            this.setState({foodCountInOrder: calcFoodCount(response.data)});
        })
        .catch((error) => {
            console.log(error);
        });
    }
    finalizeOrder() {
        Axios.put('http://localhost:8080/order')
        .then((response) => {
            this.setState({currentOrder: null})
        })
        .catch((error) => {
            console.log(error);
        });
        this.setState({foodCountInOrder: 0});
        this.setState({showCartModal: false})
        this.forceUpdate();
    }

    render() { 
        if (this.state.restaurantLoading === true || this.state.partyLoading === true || this.state.displayMessage === false) 
            return (
                <div id ="center" className="spinnerDiv">
                    <Spinner animation="border" variant="success" />
                </div>
                
            )
        return (
            <div>
                <Navbar reservedFoods = {this.state.foodCountInOrder} showCart = {this.showCart} userAccountField = {true}/>
                <CartModal currentOrder = {this.state.currentOrder} show = {this.state.showCartModal} hideModal = {this.hideCart} finalize = {this.finalizeOrder} increaseButton = {this.increaseFood} decreaseButton = {this.decreaseFood}/>
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
                {this.state.partyFoods.length > 0 && 
                <Modal 
                    show={this.state.dialogShow} 
                    onHide={this.hidePartyFoodModal}
                    centered 
                >
                    <Modal.Body class = "normalModal">
                        <div class = "foodModalTitle col">
                            <p class="text-center">{this.state.partyFoods[this.state.curIdx].restaurantName}</p>
                        </div>
                        <div class = "foodModalBody row">
                            <div class = "col-5">
                                <img className = "modalFoodImage" src = {this.state.partyFoods[this.state.curIdx].food.image} alt="food-pic"/>
                            </div>
                            <div class = "col-7">
                                <div className = "modalFoodName row height-30">
                                    <p className = "modalFoodNameLabel"><strong>{this.state.partyFoods[this.state.curIdx].food.name}</strong></p>
                                    <i className="flaticon-star modalStar"></i>
                                    <p className = "modalFoodScore">{toPersianNum(this.state.partyFoods[this.state.curIdx].food.popularity)}</p>
                                </div>
                                <div className = "row height-30">
                                    <p className = "modalFoodDescriptionLabel">{this.state.partyFoods[this.state.curIdx].food.description}</p>
                                </div>
                                <div className = "row height-30">
                                    <p className = "modalFoodPriceLabel myRedLineThrough">{toPersianNum(this.state.partyFoods[this.state.curIdx].food.price)} </p>
                                    <p className = "modalFoodPriceLabel modalFoodNewPrice">{toPersianNum(this.state.partyFoods[this.state.curIdx].food.newPrice)} تومان</p>
                                </div>
                           </div>
                        </div>
                        <hr class="modalFoodHr"/>
                        <div class = "row foodModalFooter">
                            <div class = "col-7">          
                                <div className="d-flex ml-2 myNotFirstFood">
                                    <div className="ml-auto p-2">
                                        <div class="modalRemainingDiv">
                                            <p class="modalRemainingFood">موجودی:‌ {toPersianNum(this.state.partyFoods[this.state.curIdx].food.count)}</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 incDecDiv">
                                        <div className="d-flex flex-row">
                                            <a className="plusButton" onClick={this.increaseCurrentFood}>
                                                <i className="flaticon-plus"></i>
                                            </a>
                                            <p className="pl-3">{toPersianNum(this.state.curFoodCount)}</p>
                                            <a className="minusButton" onClick={this.decreaseCurrentFood}>
                                                <i className="flaticon-minus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class = "col-5">
                                <button  type="button" className="btn modalConfirmBtn" onClick = {this.addPartyFoodFromModal}>افزودن به سبد خرید</button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>}
            </div>
        )
    }
}

export default withRouter((Home))