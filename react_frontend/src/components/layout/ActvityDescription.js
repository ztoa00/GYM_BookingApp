import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class ActivityDescription extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.description = props.description;
        this.rating = props.rating;
        this.url = props.url;
    }


    ratingStars(){
        let icons = [];
        for(let i=0; i<this.rating; i++){
            icons.push(<i className="fa fa-star" />)
        }
        return icons;
    }

    render(){
        return (
            <div className="description container">
                <div className="col-12 row">
                    <div className="col-7">
                        <p>{ this.name }</p>
                    </div>
                    <div className="col-5">
                        { this.ratingStars() }
                        <span>({ this.rating })</span>
                    </div>
                    <div className="col-12">
                        <p className="description-text">{ this.description }</p>
                        <br />
                        <div className="center-col-12">
                            <button id="mas-info"><Link to={ this.url }>Mas Info</Link></button>
                        </div>
                        <div className="center-col-12">
                            <button id="reservar">Reservar</button>
                        </div>
                    </div>
                </div>
		    </div>
        );
    }
}