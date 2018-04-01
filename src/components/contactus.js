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
                   <input id="name" type="text" name="name"/><br/>
                </div>

                <div className="email">
                   <label for="email">E-mail:</label> 
                   <input id="email" type="email" name="mail" /><br/>
                </div>

                <div className="comment">
                    <label for="comment">Comment:</label>
                    <textarea id="comment" name="comment" /><br/>
                </div>


                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
            </form>     
                <Link className="linkstyle" to="/index">Back to index page</Link> 
            ;</div>
        );
    }
}




