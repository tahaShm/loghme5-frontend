import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font/flaticon.css'
import '../styles/main.css'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Profile extends Component {
    constructor(props) {
        super(props);
        
        this.setCredit  = this.setCredit.bind(this);
        this.handleIncreaseCredit = this.handleIncreaseCredit.bind(this)
        this.showOrders = this.showOrders.bind(this);
        this.showCredit  = this.showCredit.bind(this);

        this.orderRef = React.createRef();
        this.creditRef = React.createRef();
        this.creditInputRef = React.createRef();

        this.state = {
            inOrders: true,
            credit: '',
            wrongCredit: false
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
                            <div className="container">
                                <div className="row justify-content-center myOrderRow">
                                    <div className="col-1 myOrderCol">۱</div>
                                    <div className="col-6 myOrderCol myMiddleCol">رستوران خامس</div>
                                    <div className="col">
                                        <button type="button" className="btn btn-sm myDelivering" disabled>پیک در مسیر</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center myOrderRow">
                                    <div className="col-1 myOrderCol">۲</div>
                                    <div className="col-6 myOrderCol myMiddleCol">رستوران خامس</div>
                                    <div className="col">
                                        <button type="button" className="btn btn-sm mySearching" disabled>در جستوجوی پیک</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center myOrderRow">
                                    <div className="col-1 myOrderCol">۳</div>
                                    <div className="col-6 myOrderCol myMiddleCol">رستوران خامس</div>
                                    <div className="col">
                                        <button type="button" className="btn btn-sm mySeeBill">مشاهده فاکتور</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center myOrderRow">
                                    <div className="col-1 myOrderCol">۴</div>
                                    <div className="col-6 myOrderCol myMiddleCol">رستوران خامس</div>
                                    <div className="col">
                                        <button type="button" className="btn btn-sm mySeeBill">مشاهده فاکتور</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center myOrderRow">
                                    <div className="col-1 myOrderCol">۵</div>
                                    <div className="col-6 myOrderCol myMiddleCol">رستوران خامس</div>
                                    <div className="col">
                                        <button type="button" className="btn btn-sm mySeeBill">مشاهده فاکتور</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center myOrderRow">
                                    <div className="col-1 myOrderCol">۶</div>
                                    <div className="col-6 myOrderCol myMiddleCol">رستوران خامس</div>
                                    <div className="col">
                                        <button type="button" className="btn btn-sm mySeeBill">مشاهده فاکتور</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center myOrderRow myLastRow">
                                    <div className="col-1 myOrderCol">۷</div>
                                    <div className="col-6 myOrderCol myMiddleCol">رستوران خامس</div>
                                    <div className="col">
                                        <button type="button" className="btn btn-sm mySeeBill">مشاهده فاکتور</button>
                                    </div>
                                </div>
                                <div className="row justify-content-center myOrderRow myLastRow">
                                    <div className="col-1 myOrderCol">۷</div>
                                    <div className="col-6 myOrderCol myMiddleCol">رستوران خامس</div>
                                    <div className="col">
                                        <button type="button" className="btn btn-sm mySeeBill">مشاهده فاکتور</button>
                                    </div>
                                </div>
                            </div>
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
                <Footer />
            </div>
        )
    }
}

export default Profile;