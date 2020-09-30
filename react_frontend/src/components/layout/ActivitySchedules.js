import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

/* Import logo image */

const ActivitySchedules = (props) => {

	let activity = {
		name: props.activity,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus libero sit amet quam dictum, id tempor arcu volutpat. Donec nec diam at ante ornare pulvinar.",
		schedules: [
			{
				name: "Lunes",
				time: 15,
				clock: "11.00",
				cost: 100,
			},
			{
				name: "Lunes",
				time: 15,
				clock: "11.00",
				cost: 100,
			},
			{
				name: "Lunes",
				time: 15,
				clock: "11.00",
				cost: 100,
			}
		]
	}

    return (
    	<div className="container">
    		<div className="col-12 schedule">
				<h1 className="text-center">{ activity.name }</h1>
				<p className="description-text">{ activity.description }</p>
				{
					activity.schedules.map( (schedule, i) => {
						return (
							<div className="schedule-card col-12 row" key={ i }>
								<div className="col-8">
									<p><span id="time">{ schedule.time }</span> { schedule.name }</p>
									<p><i className="fas fa-clock"></i> { schedule.clock }</p>
								</div>
								<div className="col-4">
									<p className="col-12 cost">${ schedule.cost }</p>
								</div>
							</div>
						);
					})
				}
				
				<div className="center-col-12">
					<button id="reservar">Reservar</button>
				</div>
	    	</div>
    	</div>
    );
}

export default ActivitySchedules;