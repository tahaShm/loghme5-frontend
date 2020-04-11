import React, { Component } from 'react';
import toPersianNum from '../utils/PersianNumber';
import { Modal } from 'react-bootstrap';
import FoodCart from './FoodCart';

class CartModal extends Component {
    constructor(props) {
        super(props);

        this.hideModal = this.hideModal.bind(this)

        this.state = {
            show: false,
            currentOrder: [
                {
                    name: "غذا 1",
                    count: 3,
                    price: 12000
                },
                {
                    name: "غذا 1",
                    count: 3,
                    price: 12000
                },
                {
                    name: "غذا 1",
                    count: 3,
                    price: 12000
                },
                {
                    name: "غذا 1",
                    count: 3,
                    price: 12000
                },
                {
                    name: "غذا 1",
                    count: 3,
                    price: 12000
                },
                {
                    name: "غذا 1",
                    count: 3,
                    price: 12000
                },
            ]
        }
    }
    componentDidMount() {
        this.setState({show : this.props.show})
    }
    componentWillReceiveProps(nextProps) {
        this.setState({show: nextProps.show});
    }

    hideModal() {
        this.setState({show: false})
    }

    render() {
        return (
            <Modal 
                show={this.state.show} 
                onHide={this.hideModal}
                size="sm"
                centered 
            >
            <div className = "bg-success">    
                <FoodCart cartModal = {"mt-0"} order = {this.state.currentOrder} finalize = {this.finalizeOrder} increaseButton = {this.increaseFood} decreaseButton = {this.decreaseFood} />   
            </div>
            </Modal>
        )
    }
}

export default CartModal;