import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import '../styles/font/flaticon.css'
import '../styles/main.css'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import OrderRow from '../components/OrderRow'
import Footer from '../components/Footer';
import toPersianNum from '../utils/PersianNumber';

class Profile extends Component {
    constructor(props) {
        super(props);
        
        this.setCredit  = this.setCredit.bind(this);
        this.handleIncreaseCredit = this.handleIncreaseCredit.bind(this)
        this.showOrders = this.showOrders.bind(this);
        this.showCredit = this.showCredit.bind(this);
        this.showFactor = this.showFactor.bind(this); 
        this.hideFactor = this.hideFactor.bind(this);

        this.orderRef = React.createRef();
        this.creditRef = React.createRef();
        this.creditInputRef = React.createRef();

        this.state = {
            inOrders: true,
            credit: '',
            wrongCredit: false,
            currentOrder: [],
            orders: [
                {
                    id: 1,
                    restaurantName: "رستوران خامس",
                    status: "finding",
                    orderList: [
                        {
                            foodName: "برگر گوشت",
                            amount: 3,
                            price: 30000
                        },
                        {
                            foodName: "برگر مرغ",
                            amount: 2,
                            price: 22000
                        }
                    ]
                },
                {
                    id: 2,
                    restaurantName: "رستوران خامس",
                    status: "onTheWay",
                    orderList: [
                        {
                            foodName: "برگر گوشت",
                            amount: 3,
                            price: 30000
                        },
                        {
                            foodName: "برگر مرغ",
                            amount: 2,
                            price: 22000
                        }
                    ]
                },
                {
                    id: 3,
                    restaurantName: "رستوران خامس",
                    status: "delivered",
                    orderList: [
                        {
                            foodName: "برگر گوشت",
                            amount: 3,
                            price: 30000
                        },
                        {
                            foodName: "برگر مرغ",
                            amount: 2,
                            price: 22000
                        }
                    ]
                },
                {
                    id: 4,
                    restaurantName: "رستوران خامس",
                    status: "delivered",
                    orderList: [
                        {
                            foodName: "برگر گوشت",
                            amount: 3,
                            price: 30000
                        },
                        {
                            foodName: "برگر مرغ",
                            amount: 2,
                            price: 22000
                        },
                        {
                            foodName: "برگر گوشت",
                            amount: 3,
                            price: 30000
                        },
                        {
                            foodName: "برگر مرغ",
                            amount: 2,
                            price: 22000
                        },
                        {
                            foodName: "برگر گوشت",
                            amount: 3,
                            price: 30000
                        },
                        {
                            foodName: "برگر مرغ",
                            amount: 2,
                            price: 22000
                        },
                        {
                            foodName: "برگر گوشت",
                            amount: 3,
                            price: 30000
                        },
                        {
                            foodName: "برگر مرغ",
                            amount: 2,
                            price: 22000
                        },
                        {
                            foodName: "برگر گوشت",
                            amount: 3,
                            price: 30000
                        },
                        {
                            foodName: "برگر مرغ",
                            amount: 2,
                            price: 22000
                        }
                    ]
                }
            ],
            dialogShow: false
        }
    }
    setCredit(event) {
        this.setState({credit: event.target.value});
        this.setState({wrongCredit: false})
        this.creditInputRef.current.style.borderColor = 'gray';
        this.creditInputRef.current.placeholder = "میزان افزایش اعتبار"
    }
    handleIncreaseCredit(event) {
        if (this.state.credit == null || this.state.credit === '') {
            this.setState({wrongCredit: true})
            this.creditInputRef.current.style.borderColor = 'red';
            this.creditInputRef.current.placeholder = 'میزان افزایش اعتبار را مشخص کنید!';
        }
        //send increase value to server and fetch response
    }
    showOrders() {
        this.setState({inOrders: true})
        this.orderRef.current.style.visibility = 'visible';
        this.orderRef.current.style.display = 'block';
        this.creditRef.current.style.visibility = 'hidden';
        this.creditRef.current.style.display = 'none';
        this.forceUpdate();
    }
    showCredit() {
        this.setState({inOrders: false})
        this.creditRef.current.style.visibility = 'visible';
        this.creditRef.current.style.display = 'block';
        this.orderRef.current.style.visibility = 'hidden';
        this.orderRef.current.style.display = 'none';
        this.forceUpdate();
    }
    showFactor(order) {
        this.setState({currentOrder: order})
        this.setState({dialogShow: true})
    }
    hideFactor(){
        this.setState({dialogShow: false})
    }
    showOrder = (order, i) => {
        return  <OrderRow id = {order.id} restaurantName = {order.restaurantName} status = {order.status} onButtonClick = {(e) => this.showFactor(order)} />
    }
    renderOrders(){
        if (this.state.orders)
        return (
            <div className="container">
            {   
                this.state.orders.map(this.showOrder, this)
            }
            </div>
        )
    }
    renderCurrentOrder() {
        if (this.state.currentOrder != null && this.state.currentOrder.orderList != null){
            return (
                this.state.currentOrder.orderList.map(function(food, i){
                    return (
                        <tr>
                            <th scope="row">{toPersianNum(i + 1)}</th>
                            <td>{food.foodName}</td>
                            <td>{toPersianNum(food.amount)}</td>
                            <td>{toPersianNum(food.price)}</td>
                        </tr>
                    )
                })
            )}
    }
    calculateTotalPrice() {
        var totalPrice = 0;
        var orderList = this.state.currentOrder.orderList;
        
        if (orderList != null && orderList !== ""){
            orderList.forEach(function (food) {
                totalPrice += food.amount * food.price
            });
        }
        return totalPrice;
    }
    render() {
        let rightButton = 'btn myRightTabButton';
        let leftButton = 'btn myLeftTabButton';
        if (this.state.inOrders) {
            rightButton += ' myActiveTab';
            leftButton += ' myNotActiveTab';
        }
        else {
            rightButton += ' myNotActiveTab';
            leftButton += ' myActiveTab';
        }
        let creditPlaceholder = ''
        if (this.state.wrongCredit) {
            creditPlaceholder = ' warningInput'
        }
        return (
            <div>
                <Navbar reservedFoods = {3} />
                <Header name = "هومان چمنی" phoneNumber = "09300323231" email = "hoomonchamani@yahoo.com" credit="100000" />
                <div className="myTabs">
                    <div className="d-flex justify-content-center mb-n2">
                        <button type="button" className={rightButton} onClick = {this.showOrders}>سفارش ها</button>
                        <button type="button" className={leftButton} onClick = {this.showCredit}>افزایش اعتبار</button>
                    </div>
                    <div ref={this.orderRef} className="card myMiddleCard myCardBorder">
                        <div className="card-body">
                            {this.renderOrders()}
                        </div>
                    </div>
                    <div ref={this.creditRef} className="card myMiddleCard myCardBorder myHiddenDiv">
                        <div className="card-body">
                            <div className="container">
                                <div className="row justify-content-center myCreditRow">
                                    <div className="col-6">
                                        <input type="text" className={"form-control myCreditInp" + creditPlaceholder}  id="credit" placeholder="میزان افزایش اعتبار" value={this.state.credit} onChange={this.setCredit} ref={this.creditInputRef}/>
                                    </div>
                                    <div className="col-4">
                                        <button type="button" className="btn myCreditBtn" onClick={this.handleIncreaseCredit}>افزایش</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal 
                    show={this.state.dialogShow} 
                    onHide={this.hideFactor}
                    size = "lg"
                    centered 
                >
                    <Modal.Body class = "profileModal">
                        <div class = "profileModalTitle col">
                            <p class="text-center">رستوران خامس</p>
                        </div>
                        <hr class="profileModalHr"/>
                        <div class = "profileModalBody">
                            <table class="orderTable">
                                <thead class="pTHeadModal">
                                <tr>
                                    <th class="col-1">ردیف</th>
                                    <th class="col-7">نام غذا</th>
                                    <th class="col-2">تعداد</th>
                                    <th class="col-2">قیمت</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderCurrentOrder()}
                                </tbody>
                            </table>
                        </div>
                        <div class = "profileModalFooter">
                        <p class = "modalTotalPrice"><b>جمع کل: {toPersianNum(this.calculateTotalPrice())} تومان</b></p>
                        </div>
                    </Modal.Body>
                </Modal>
                <Footer />
            </div>
        )
    }
}

export default Profile;