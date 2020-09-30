import React, { Fragment, Component } from 'react';

/* Import components */
import ActivitySchedules from '../layout/ActivitySchedules';
import Modal from '../layout/Modal';

class Activity extends Component {

	constructor(props){
		super(props);
	}
	componentDidMount() {
    	const setTransparentToTrue = this.props.setTransparentToTrue;
    	setTransparentToTrue();
    }

	render() {
		const { activityname } = this.props.match.params;
  		return (
    		<Fragment>
        		<div className="top-background">
        		</div>
        		<ActivitySchedules key={ activityname } activity={ activityname }/>
        		<Modal />
    		</Fragment>
  		);
	}
}

export default Activity;