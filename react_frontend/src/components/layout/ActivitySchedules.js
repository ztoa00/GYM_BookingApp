import React, { useEffect, useState } from 'react';
import FlashMessages from './FlashMessages';


const ActivitySchedules = (props) => {

	const toggle_modal = props.toggle_modal;
	const set_schedule = props.set_schedule;

	const [ selected_schedule, set_selected_schedule ] = useState(-1);

	const show_warning = (msg) => {
		alert(msg);
	}

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

	const [flash_messages, set_flash_messages ] = useState([]);

	function remove_flash_message(index){
		let new_flash_messages = [];
		for(let i=0; i<flash_messages.length; i++){
			if(i !== index){
				new_flash_messages.push(this.state.flash_messages[i]);
			}
		}

		set_flash_messages(new_flash_messages);
	}

	


    return (
    	<div className="container">
			<FlashMessages messages={ flash_messages} remove_message={ remove_flash_message } />
    		<div className="col-12 schedule">
				<h1 className="text-center">{ activity.name }</h1>
				<p className="description-text">{ activity.description }</p>
				{
					activity.schedules.map( (schedule, i) => {
						return (
							<div style={{cursor: "pointer"}} className={ 
								selected_schedule == i ? "schedule-card col-12 row schedule-card-select": "schedule-card col-12 row"} 
								key={ i } onClick={ event => { set_selected_schedule(i); set_schedule(schedule) } }>
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
					<button id="reservar" style={{cursor: "pointer"}} onClick={ 
						event => {
							 selected_schedule !== -1 ? toggle_modal(true) : show_warning(" Select any event !") } 
						}>Reservar</button>
				</div>
	    	</div>
    	</div>
    );
}

export default ActivitySchedules;