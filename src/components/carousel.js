import React, { Component } from 'react';

export default class Carousel extends Component {
       
        constructor(props){
            super(props);

            this.state = {slideIndex: 1};
            this.showSlides = this.showSlides.bind(this);
        }

       

    componentDidMount(){
        const slides = document.getElementsByClassName("mySlides");
        slides[0].style.display = "block"; 

        setInterval(() => {this.showSlides()}, 5000);
    }    

    showSlides() {
        console.log("called");
        let {slideIndex} = this.state; 
        const slides = document.getElementsByClassName("mySlides");
        
        for(var i=0; i<slides.length; i++){
            slides[i].style.display = "none";
        }
        this.setState ({slideIndex: slideIndex+1});

        if (slideIndex > slides.length) {
            this.setState({slideIndex: 1})
        } 

        slides[slideIndex-1].style.display = "block"; 
       //setTimeout(this.showSlides, 5000); // Change image every 2 seconds

    }

    
    render(){    
        return(
          <div>
           <div className="slideshow-container">
                <div className="mySlides fade">
                    <div className="numbertext"><b>1 / 3</b></div>
                    <img src="http://hdwallpaperdaily.com/wp-content/uploads/2013/05/hong-kong-skyscrapers-wallpaper.jpg" />
                    <div className="text"><b>Hong Kong</b></div>
                </div>   

                <div className="mySlides fade">
                    <div className="numbertext"><b>2 / 3</b></div>
                    <img src="https://news.cct.cn/wp-content/uploads/2016/10/3b3fd449b66b.jpg" />
                    <div className="text"><b>Shang Hai</b></div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext"><b>3 / 3</b></div>
                    <img src="https://cdn.allwallpaper.in/wallpapers/960x600/11808/cityscapes-singapore-960x600-wallpaper.jpg" />
                    <div className="text"><b>Singapore City</b></div>
                </div>  
           </div>
          </div>      
        );
    }
}