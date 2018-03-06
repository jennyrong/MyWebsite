import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Jobs extends Component {
    render(){
        return(
            <div>
                <div className="heading">Jobs</div>
                <Link to="/index">
                   Back to index page
                </Link>
            </div>  
        );
    }
}
