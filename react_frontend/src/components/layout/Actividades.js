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
}

const climbing = {
	name: "Climbing / Buba gym",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	rating: 5,
	image: Climbing,
}

const yoga = {
	name: "Yoga / Buba gym",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	rating: 5,
	image: Yoga,
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
					{
						activity > 0 &&
						<img src={ activities[activity-1].image } id="left-image" onClick={ event => set_activity(activity - 1) }
						 alt={ selected_activity.name }/> 
					}
				</div>

    			<div className="col-6">
					<img src={ activities[activity].image } id="center-image" onClick={ event => set_activity(activity) } 
					alt={ selected_activity.name }/>
				</div>
    			
				<div className="col-3" id="right">
					{
						activity < activities.length-1 &&
						<img src={ activities[activity+1].image } id="right-image" onClick={ event =>  set_activity(activity + 1) } 
						alt={ selected_activity.name }/> 
					}
				</div>

			</div>
			<h2 className="text-center">
				<span style={{cursor: "pointer"}} onClick={ event => {
					if(activity > 0) set_activity(activity - 1);
				}}>&#x25C4;</span>
				<span style={{padding: '0 26px'}}>{ selected_activity.name }</span> 
				<span style={{cursor: "pointer"}} onClick={ event => {
					if(activity < activities.length-1) set_activity(activity + 1);
				}}>&#x25BA;</span>
			</h2>
    	</div>

		{/* Seperated this as ActivityDescription, cause it changes with selected value from above */}
		<ActivityDescription key={ selected_activity.name } name={ selected_activity.name } description={ selected_activity.description } 
			rating={ selected_activity.rating } />

    </div>
    );
}

export default Actividades;