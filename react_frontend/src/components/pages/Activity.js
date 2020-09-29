import React, { Fragment, Component } from 'react';

/* Import components */
import ActivitySchedules from '../layout/ActivitySchedules';
import Modal from '../layout/Modal';

class Activity extends Component {
	componentDidMount() {
    	const setTransparentToTrue = this.props.setTransparentToTrue;
    	setTransparentToTrue();
    }

	render() {
  		return (
    		<Fragment>
        		<div className="top-background">
        		</div>
        		<ActivitySchedules />
        		<Modal />
    		</Fragment>
  		);
	}
}

export default Activity;