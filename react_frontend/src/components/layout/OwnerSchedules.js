import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
import FlashMessages from './FlashMessages';

/* Import logo image */

const OwnerSchedules = () => {

	const initial_state = [
		{
			name: "Rock Cycling",
			rating: 5,
			time: 15,
			day: "Martes",
			clock: "11.00",
			user: 7,
		},
		{
			name: "Climbing",
			rating: 5,
			time: 17,
			day: "Martes",
			clock: "17.00",
			user: 5,
		},
		{
			name: "Running",
			rating: 5,
			time: 17,
			day: "Jueves",
			clock: "08.00",
			user: 5,
		},
	]

	const [ schedules, set_schedules ] = useState(initial_state);

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


	const rating_stars = (rating) => {
		let stars = [];
		for(let i=0; i<rating; i++){
			stars.push(<i className="fa fa-star" key={i} />);
		}
		return stars;
	}

	const remove_schedule = (schedule, index) => {

		//   API call to remove schedule

		let new_schedule = [];
		schedules.forEach( (val, i) => {
			if(index != i){
				new_schedule.push(val);
			}
		})
		set_schedules(new_schedule);
	}

    return (
		<Fragment>
			<FlashMessages messages={flash_messages} remove_message={ remove_flash_message } />
			<div className="center-col-12">
				<div className="col-12 text-center horarios-lists">
					<i className="fas fa-calendar"></i>
					<h1 className="text-center">Actividades</h1>
				</div>
			</div>
			<div className="col-12 row horarios-lists" style={{marginTop: '0', paddingTop: '0'}}>
				{
					schedules.map( (schedule, i) => {
						return ( 
							<div key={schedule.name}>
							<Link to={{
								pathname:"/edit",
								state: {schedule: schedule},
							}}>
								<div className="schedule-card col-12 row" id="cycling">
									<div className="col-8">
										<h2>{ schedule.name }</h2>
										{ rating_stars(schedule.rating) }
										<span>({ schedule.rating })</span>
									</div>
									<div className="col-4">
										<i className="fa fa-minus-circle" onClick={ event => remove_schedule(schedule, i) }></i>
									</div>
									<div className="col-12 schedule-card-details">
										<p><span className="blue-time">{ schedule.time }</span> { schedule.day } </p>
										<p><i className="fa fa-clock"></i> { schedule.clock }</p>
										<p><i className="fa fa-user"></i> { schedule.user }</p>
									</div>
								</div>		
							</Link>
							</div>					
						);
					})			
				}
				<div className="center-col-12">
					<button className="blue" id="reservar"><Link to="edit">Cagar Nueva</Link></button>
				</div>
			</div>
		</Fragment>
    );
}

export default OwnerSchedules;