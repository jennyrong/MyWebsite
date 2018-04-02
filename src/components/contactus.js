import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ContactUs extends Component {
    
    render(){
        
        return(
            <div>
            <div className="heading">Contact Us</div>
            <form action="mailto:conneyrong@gmail.com" method="post" enctype="text/plain">
                
                <div className="name">  
                   <label for="name">Name:</label>
                   <input id="name" type="text" name="user_name" />
                </div>

                <div className="email">
                   <label for="email">E-mail:</label> 
                   <input id="email" type="email" name="user_mail" />
                </div>

                <div className="comment">
                    <label for="comment">Comment:</label>
                    <textarea id="comment" name="user_comment" />
                </div>

                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
            </form>     
                <Link className="linkstyle" to="/index">Back to index page</Link> 
            </div>
        );
    }
}




