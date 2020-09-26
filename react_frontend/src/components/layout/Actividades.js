import React, { useState } from 'react';
import ActivityDescription from './ActvityDescription';

/* Import logo image */
import RockCycling from './images/rock-cycling.png';
import Climbing from './images/climbing.png';
import Yoga from './images/yoga.png';

const rock_cycling = {
	name: "Rock Cycling / Buba gym",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	rating: 5,
	image: RockCycling,
	url: "/rock-cycling",
}

const climbing = {
	name: "Climbing / Buba gym",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	rating: 5,
	image: Climbing,
	url: "/rock-cycling",
}

const yoga = {
	name: "Yoga / Buba gym",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	rating: 5,
	image: Yoga,
	url: "/rock-cycling",
}

const Actividades = () => {
	const activities = [yoga, rock_cycling, climbing];
	const [activity, set_activity] = useState(1);    // index of the three activities;

	const selected_activity = activities[activity];
	
    return (
	<div className="jumbotron col-12 row">
    	<div className="carousel col-12">
    		<h1 className="text-center"><i className="fas fa-bicycle" id="actividades-bicycle"></i>Actividades</h1>
    		<div className="center-col-12 row sliding-images">
    			<div className="col-3" id="left">
    				<img src={Yoga} id="left-image" onClick={ event => set_activity(0) }/>
				</div>
    			<div className="col-6">
    				<img src={RockCycling} id="center-image" onClick={ event => set_activity(1) }/>
				</div>
    			<div className="col-3" id="right">
    				<img src={Climbing} id="right-image" onClick={ event =>  set_activity(2) }/>
				</div>
			</div>
			<h2 className="text-center">&#x25C4; <span style={{padding: '0 26px'}}>Rock Cycling</span> &#x25BA;</h2>
    	</div>

		{/* Seperated this as ActivityDescription, cause it changes with selected value from above */}
		<ActivityDescription key={ selected_activity.name } name={ selected_activity.name } description={ selected_activity.description } 
			rating={ selected_activity.rating } url={ selected_activity.url } />

    </div>
    );
}

export default Actividades;