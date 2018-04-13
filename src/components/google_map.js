import React, { Component } from 'react';

export default class GoogleMap extends Component {
   
   componentDidMount(){ 
        new google.maps.Map(this.refs.map,{
            zoom:13,
            center: {
                lat: -34.397,
                lng: 150.644
            }
        });
   }

    render(){
        return <div ref="map" />;         
    }
}
