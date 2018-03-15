import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OurCompany extends Component {
    render(){
        return(
            <div>
                <div className="heading">Our Company</div>
                <Link to="/index">
                   Back to index page
                </Link>
            </div> 
        );
    }
}
