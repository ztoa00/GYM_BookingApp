import React, { Fragment, Component } from 'react';

// Import images
import ProfilePic from './images/profile-picture.png';

class MemberDetailsForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			userid: "",
			first_name: "",
			last_name: "",
			dob: "",
			phone: "",
			emergency_telephone: "",
			mail: "",
		}

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(field, event){
		event.persist();
		switch(field){
			case "userid": this.setState((prev)=>{
				return {...prev, userid: event.target.value }
				});
				break;
			case "first_name": this.setState((prev)=>{
				return {...prev, first_name: event.target.value }
				});
				break;
			case "last_name": this.setState((prev)=>{
				return {...prev, last_name: event.target.value }
				});
				break;
			case "dob": this.setState((prev)=>{
				return {...prev, dob: event.target.value }
				});
				break;
			case "phone": this.setState((prev)=>{
				return {...prev, phone: event.target.value }
				});
				break;
			case "emergency_telephone": this.setState((prev)=>{
				return {...prev, emergency_telephone: event.target.value }
				});
				break;
			case "mail": this.setState((prev)=>{
				return {...prev, mail: event.target.value }
				});
				break;
		}
	}

	render() {
    	return (
        <Fragment>
			<div className="container">
        	<div className="col-12 row">
        		<form className="editar-form">
            		<div className="col-12">
            			<div className="col-6">
        					
							<label>Usuario</label>
							<input type="text" value={ this.state.userid } onChange={
								(event) => {
									this.handleInput("userid", event);
								}
							}/>
        					
							<label>Nombre*</label>
							<input type="text" value={ this.state.first_name } onChange={
								(event) => {
									this.handleInput("first_name", event);
								}
							} />
        					
							<label>Apellido*</label>
							<input type="text"  value={ this.state.last_name } onChange={
								(event) => {
									this.handleInput("last_name", event);
								}
							}/>
        					
							<label>Fecha de nacimiento*</label>
							<input type="text"  value={ this.state.dob } onChange={
								(event) => {
									this.handleInput("dob", event);
								}
							}/>

						</div>
						<div className="col-6 photo-box">
                        	<img src={ProfilePic} alt="Your profile picture"  style={{width: '100%'}}/>
							<p className="text-center">Camblar foto</p>
                        </div>
					</div>
            		<div className="col-12 row">
            			<div className="col-6">

        					<label>Numero de telefono*</label>
							<input type="tel" value={ this.state.phone } onChange={
								(event) => {
									this.handleInput("phone", event);
								}
							}/>

						</div>
            			<div className="col-6" style={{ paddingLeft: '15pt' }}>

        					<label>Tel. emergencia</label>
							<input type="tel" value={ this.state.emergency_telephone } onChange={
								(event) => {
									this.handleInput("emergency_telephone", event);
								}
							}/>

						</div>
					</div>
            		<div className="col-12">
            			<div className="col-8">

        					<label>Mail*</label>
							<input type="email" value={ this.state.mail } onChange={
								(event) => {
									this.handleInput("mail", event);
								}
							}/>

						</div>
					</div>
            		<div className="col-12 row">
            			<div className="center-col-12 row upload">
                        	<div className="col-6">
        						<label>Certificado medico</label>
							</div>
                            <div className="col-6">
                            <input type="file" id="files" style={{ display: 'none' }}/>
							<button id="select-file" onClick={ ()=>{ document.getElementById('files').click() } }>Cargar</button>
                            </div>
						</div>
					</div>
					<div className="center-col-12">
						<button type="submit" id="reservar">Actualizar</button>
					</div>
        		</form>
        	</div>
			</div>
		</Fragment>
        );
    }
}

export default MemberDetailsForm;