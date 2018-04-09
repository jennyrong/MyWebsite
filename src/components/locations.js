import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from './google_map';
import Counter from './counter';

export default class Locations extends Component {
    render(){
        return(
            <div>
                <div className="heading">Locations 1</div>
                
                <div><GoogleMap /></div>
                <Link to="/index">
                   Back to index page
                </Link>
            </div> 
        );
    }
}
