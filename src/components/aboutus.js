import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutUs extends Component {
    render(){
        return(
        <div>
            <h3>About Us</h3>
            <Link to="/index">
               Back to index page
            </Link>
        </div> 
        );
    }
}
