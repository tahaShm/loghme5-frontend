import React, { Component } from 'react';
import toPersianNum from '../utils/PersianNumber'

class RestaurantCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {}
        }
    }
    componentWillMount() {
        this.setState({info : this.props.info})
    }
    render() {
        return (
            <div class="col-3">
                <div class="card myPartyCard">
                    <img src={this.state.info.imageUrl} alt = "restaurant pic" width="50%" class="myHomeResLogo"/>
                    <p class="myNormalRestaurantName">Khames Fried Chicken</p>
                    <div class="text-center">
                        <button type="button" class="btn myShowMenuBtn" onClick = {this.props.onButtonClick}>نمایش منو</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantCard;