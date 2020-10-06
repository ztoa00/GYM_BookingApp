import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import FlashMessages from './FlashMessages';

/* Import logo image */
import RockCycling from './images/rock-cycling.png';
import Climbing from './images/climbing.png';
import Yoga from './images/yoga.png';

const rock_cycling = {
	name: "Rock Cycling - Buba gym",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	rating: 5,
	image: RockCycling,
}

const climbing = {
	name: "Climbing - Buba gym",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	rating: 5,
	image: Climbing,
}

const yoga = {
	name: "Yoga - Buba gym",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	rating: 5,
	image: Yoga,
}

const Actividades = () => {
	const activities = [yoga, rock_cycling, climbing];

    const ratingStars = n => {
        let icons = [];
        for(let i=0; i<n; i++){
            icons.push(<i className="fa fa-star" />)
        }
        return icons;
    }

	const flash_messages = [];  // messages = { message: "your msg", warning: true/false }

    return (
		<div>
			<FlashMessages messages={ flash_messages } />
			<div className="jumbotron col-12 row">
				<div className="carousel col-12">
					<h1 className="text-center">Actividades</h1>
					<hr />
					<br />
					<center>
						<div>
						{
							activities.map( activity => (
								<div className="activity" key={ activity.name } >
									<h3>{ activity.name }&nbsp; &nbsp;{ ratingStars(activity.rating) }</h3>
									<hr />
									<img src={ activity.image } alt={ activity.name }/>
									<p style={{width: "60%"}}>{ activity.description }</p>
									<hr />
									<div style={{display: "flex", justifyContent: "space-evenly", width: "50%", marginTop: "2%"}}>
										<button id="mas-info"><Link to={  "/activity/" + activity.name }>Mas Info</Link></button>
										<button id="mas-info" style={{marginLeft: "2%", cursor: "pointer"}}><Link to={  "/activity/" + activity.name }>Reservar</Link></button>
									</div>
								</div>
							))
						}
						</div>
					</center>
				</div>
			</div>
		</div>
    );
}

export default Actividades;