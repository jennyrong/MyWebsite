import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel';

export default class Navigation extends Component {

    
    render(){
        return(
            <ul className="menu">
              <div className="logo">CloverStar Technologies </div> 

               <li>
                  <Link  to="/ourcompany">Our Company</Link>
                  <div className="fade2">
                     <Link  to="/ourcompany/ourservices">Our Services</Link>
                     <Link  to="/ourcompany/ourhistory">Our History</Link>
                  </div>
              </li>     
              <li>
                 <Link to="/jobs">Jobs</Link>
                 <div className="fade2">
                     <a href="/jobs">opportunities</a>
                 </div>
              </li>

              <li>
                 <Link  to="/locations">Locations</Link>
              </li> 

              <li>
                 <Link to="/aboutus">About Us</Link>
              </li> 

              <li>
                 <Link to="/contactus">Contact Us</Link>
              </li> 

              <div className="carousel"><Carousel /></div>
            </ul>  
        );
    }
}
