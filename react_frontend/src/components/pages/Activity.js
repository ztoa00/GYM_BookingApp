import React, { Fragment, Component } from 'react';

/* Import components */
import ActivitySchedules from '../layout/ActivitySchedules';
import FlashMessages from '../layout/FlashMessages';
import Modal from '../layout/Modal';

class Activity extends Component {

	constructor(props){
		super(props);
		this.state = {
			show_modal: false,
		}

		this.selected_schedule = null;

		this.toggle_modal = this.toggle_modal.bind(this);
		this.reserve = this.reserve.bind(this);
		this.set_schedule = this.set_schedule.bind(this);
	}

	componentDidMount() {
    	const setTransparentToTrue = this.props.setTransparentToTrue;
    	setTransparentToTrue();
	}

	set_schedule(schedule){
		this.selected_schedule = schedule;
	}

	reserve(){
		// Server API Call to reserve
		let schedule = this.selected_schedule;
		this.toggle_modal(false);
	}
	
	toggle_modal(val){
		this.setState(prev => ({...prev, show_modal: val}));
	}

	render() {
		const { activityname } = this.props.match.params;

		const flash_messages = [];  // messages = { message: "your msg", warning: true/false }

  		return (
    		<Fragment>
				<FlashMessages messages={ flash_messages } />
        		<div className="top-background">
        		</div>
				<ActivitySchedules key={ activityname } activity={ activityname } toggle_modal={ this.toggle_modal } set_schedule = { this.set_schedule }/>			
        		{
					this.state.show_modal && 
					<Modal toggle_modal={ this.toggle_modal } reserve={ this.reserve } name={ activityname } schedule={ this.selected_schedule }/> 
				}
    		</Fragment>
  		);
	}
}

export default Activity;