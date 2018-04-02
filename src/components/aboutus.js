import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutUs extends Component {
    render(){
        return(
        <div>
            <div className="heading">About Us</div>
            <Link to="/index">
               Back to index page
            </Link>
        </div> 
        );
    }
}
