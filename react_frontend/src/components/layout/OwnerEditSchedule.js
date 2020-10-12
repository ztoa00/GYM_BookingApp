import React, { Fragment, Component } from 'react';
import FlashMessages from './FlashMessages';
import TimeSlot from './TimeSlot';

// Import images
import RockCycling from './images/rock-cycling.png';

const init_timeslot = {
	user: null,
	day: null,
	cost: null,
	count: null,
	duration: null,
}


class OwnerEditSchedule extends Component {

	constructor(props){
		super(props);

		this.state = {
			name: "",
			description: "",
			image: RockCycling,
			timeslots: [],
			flash_messages: [],
		}

				
		try{
			this.activity_schedule = this.props.location.state.schedule;
			this.state = {
				...this.state, name: this.activity_schedule.name,
			}
		}
		catch(e){
		}
		
		console.log(this.props);
		this.set_timeslot = this.set_timeslot.bind(this);
		this.saveActivity = this.saveActivity.bind(this);
		this.handle_change = this.handle_change.bind(this);
		this.remove_flash_message = this.remove_flash_message.bind(this);
	}

	handle_change(key, event){
		event.persist();

		switch(key){
			case "name": this.setState(prev => ({ ... prev, name: event.target.value })); break;
			case "description": this.setState(prev => ({ ... prev, description: event.target.value })); break;
		}
	}

	set_timeslot(timeslot, index){
		let new_timeslots = [];
		this.state.timeslots.forEach((val, i) => {
			if(index === i){
				if(timeslot !== null){

					//             API Call to save the timeslot if necessary
					new_timeslots.push(timeslot);
				}
				else{
					//           If null timeslot is being deleted.. API Call to delete the timeslot if necessary

				}
			}
			else{
				new_timeslots.push(val);
			}
		});

		//  API Call if necessary

		this.setState( prev => ({ ...prev, timeslots: new_timeslots }));
	}


	saveActivity(event){
		//   API Call to save activity if necessary
		this.setState(prev => {
			return { ...prev, flash_messages: [ ...prev.flash_messages, {message: "Success", warning: false }] }
		});
	}

	remove_flash_message(index){
		let new_flash_messages = [];
		for(let i=0; i<this.state.flash_messages.length; i++){
			if(i !== index){
				new_flash_messages.push(this.state.flash_messages[i]);
			}
		}

		this.setState(prev => ({ ...prev, flash_messages: new_flash_messages}));
	}


	render() {
		const flash_messages = this.state.flash_messages  // messages = { message: "your msg", warning: true/false }

    	return (
        <Fragment>
			<FlashMessages messages={ flash_messages } remove_message={ this.remove_flash_message }/>
			<div className="container">
        	<div className="col-12 row">
        		<h1 className="text-center">Actividad</h1>
        	</div>
        	<div className="col-12">
				<input type="file" id="image_select" style={{display: "none"}} onChange={
					event => {
						let file_reader = new FileReader();
						file_reader.readAsDataURL(event.target.files[0]);

						file_reader.onload = res => {
							let data = res.target.result;
							this.setState( prev => ({...prev, image: data }))
						}
					}
				} />
				<center><img src={ this.state.image } alt="activity" className="top-image" onClick={
					event => {
						document.getElementById("image_select").click();
					}
				} /></center>
        	</div>
        	<div className="col-12 row">
        		<form className="editar-form">
            		<div className="col-12">
						
						<div className="col-9 edit-schedule">
							<input type="text" placeholder="Name" value={ this.state.name } onChange={ 
								event => { this.handle_change("name", event)}
								} />
						</div>
						
						<div className="col-12">
							<div className="center-col-9 edit-schedule">
								<i className="fa fa-file" style={{position: 'relative', bottom: '26px'}}></i>
								<textarea placeholder="Description" 
								style={{minWidth: "300px", minHeight: "100px", border: "2px solid lightgray", resize: "none"}}
								 value={ this.state.description } onChange={
									 event => { this.handle_change("description", event) }
								 }></textarea>
							</div>
						</div>

						<div className="center-col-12">

							<h1 style={{width: "100%", borderBottom: "2px solid gray"}}>
								Time Slots
							</h1>
							

							<span style={{fontSize: 70, display: "block", color: "blue", cursor: "pointer"}} onClick={
								event => {
									this.setState( prev => {
										let new_timeslots = prev.timeslots.slice(0);
										new_timeslots.push({ ...init_timeslot });
										return {
											...prev,
											timeslots: new_timeslots,
										}
									})
								}
							}> + </span>
						</div>
						
						<div className="col-12">
							{
								this.state.timeslots.map((timeslot, index) => {
									return (
										<TimeSlot edit={false} timeslot={timeslot} index={index} set_timeslot={ this.set_timeslot } />
									);
								})
							}
						</div>
					</div>
            		
					<div className="center-col-12">
						<button type="button" className="blue" id="reservar"  onClick={
							event => this.saveActivity()
						}>Confirmar</button>
					</div>
					<br />
        		</form>
        	</div>
			</div>
		</Fragment>
        );
    }
}

export default OwnerEditSchedule;