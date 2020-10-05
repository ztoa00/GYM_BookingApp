import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';

/* Import logo image */

const MemberSchedules = () => {

	const initial_state = [
		{
			name: "Rock Cycling",
			time: 15,
			day: "Martes",
			clock: "11.00",
		},
		{
			name: "Climbing",
			time: 17,
			day: "Jueves",
			clock: "17.00",
		},
		{
			name: "Running",
			time: 19,
			day: "Jueves",
			clock: "08.00",
		},
	]

	const [ schedules, set_schedules ] = useState(initial_state);

	const remove_schedule = (schedule, index) => {

		//  API call to remove schedule

		let new_schedule = [];
		schedules.forEach( (val, i) => {
			if(index != i){
				new_schedule.push(val);
			}
		});
		set_schedules(new_schedule);
	}

    return (
		<Fragment>
			<div className="center-col-12">
				<div className="col-12 text-center horarios-lists">
					<i className="fas fa-calendar"></i>
					<h1 className="text-center">Horarios</h1>
				</div>
			</div>
			<div className="col-12 row horarios-lists" style={{marginTop: '0', paddingTop: '0'}}>
				{
					schedules.map( (schedule, i) => {
						return (
							<div className="schedule-card col-12 row" id="running" key={ schedule.name + schedule.clock + schedule.day }>
								<div className="col-8">
									<h2>{ schedule.name }</h2>
									<p><span id="time">{ schedule.time }</span> { schedule.day }</p>
								</div>
								<div className="col-4">
									<i className="fa fa-minus-circle" onClick={ event => remove_schedule(schedule, i) }>d</i>
									<p><i className="fa fa-clock"></i> { schedule.clock }</p>
								</div>
							</div>
						);
					})
				}
				{
					schedules.length === 0 && <h3 className="text-center"> You have no active events... </h3>
				}
			</div>
		</Fragment>
    );
}

export default MemberSchedules;