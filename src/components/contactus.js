import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ContactUs extends Component {
    
    render(){
        
        return(
            <div>
            <div className="heading">Contact Us</div>
            <form action="mailto:conneyrong@gmail.com" method="post" enctype="text/plain">
                <div className="name">  
                  Name:<br/>
                </div>  
                <input id="inputBar" type="text" name="name" className="name-input"/><br/>

                <div className="email">
                  E-mail:<br/>
                </div>
                <input id="inputBar" type="text" name="mail" className="email-input"/><br/>

                <div className="comment">
                  Comment:
                </div>  
                
                <textarea id="textarea" name="comment"  className="comment-input"/><br/>

                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
            </form>     
                <Link className="linkstyle" to="/index">Back to index page</Link> 
            ;</div>
        );
    }
}




