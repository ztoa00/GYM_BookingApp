import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/* Import logo image */

class Modal extends Component {
	
	constructor(props){
		super(props);

		this.toggle = this.props.toggle_modal;
		this.reserve = this.props.reserve;
		this.schedule = this.props.schedule;

	}
	
	componentDidMount() {  
	}
	

	render() {
		return (
			<div id="myModal" className="modal">
				<div className="modal-content"> 
					<span className="close" id="close-button" onClick={ event => this.toggle(false) }>&times;</span>
					<h1 className="text-center">Clase Confirmada</h1>
					<br/>
					<p className="text-center">{ this.props.name }</p>
					<p className="text-center">{ this.schedule.name }</p>
					<p className="text-center">Duration: { this.schedule.time } mins</p>
					<p className="text-center">Time : { this.schedule.clock }</p>
					<p className="text-center">${ this.schedule.cost }</p>
					<div className="center-col-12">
						<button id="reservar" onClick={ event => this.reserve() }>Invitar</button>
					</div>
				</div>
			</div>  
		);
    }
}

export default Modal;