import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'
import '../styles/font/flaticon.css'
import Navbar from '../components/Navbar';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    render() {
        return (
            <Navbar reservedFoods = {3} />
        )
    }
}

export default Profile;