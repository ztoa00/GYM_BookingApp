import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

// Import images
import ProfilePic from './images/profile-picture.png';

class OwnerDetailsForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			userid: "",
			first_name: "",
			last_name: "",
			dob: "",
			phone: "",
			emergency_telephone: "",
			mail: ""
		}

		this.handleInput = this.handleInput.bind(this);
		this.submitForm = this.submitForm.bind(this);
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

	submitForm(event){
		event.preventDefault();
	}

	render() {
    	return (
        <Fragment>
			<div className="container">
        	<div className="col-12 row">
        		<form className="editar-form" onSubmit={this.submitForm}>
            		<div className="col-12">
            			<div className="col-6">

        					<label>Usuario</label>
							<input type="text" value={this.state.userid} onChange={
								(event) => {this.handleInput("userid", event)}
							}/>

        					<label>Nombre*</label>
							<input type="text" value={this.state.first_name} onChange={
								(event) => {this.handleInput("first_name", event)}
							} />

        					<label>Apellido*</label>
							<input type="text" value={this.state.last_name} onChange={
								(event) => {this.handleInput("last_name", event)}
							}/>

        					<label>Fecha de nacimiento*</label>
							<input type="text" value={this.state.dob} onChange={
								(event) => {this.handleInput("dob", event)}
							}/>

						</div>

						<div className="col-6 photo-box" >

							<input type="file" id='profile_pic' style={{display: 'none'}} onChange={
								(event) => {
									event.persist();
									let f = new FileReader();
									if(event.target.files[0] != undefined){
										f.readAsDataURL(event.target.files[0]);
										f.onload = (data) => {
											document.getElementById('profile_pic_preview').src = data.target.result;
										}
									}
								}
							 }/>
							<img src={ProfilePic} 
								 alt="Your profile picture" id='profile_pic_preview' style={{width: '100%'}}
								 onClick={
									event => document.getElementById('profile_pic').click()
								}
							/>
							<p className="text-center">Camblar foto</p>

                        </div>

					</div>
            		<div className="col-12 row">
            			<div className="col-6">

        					<label>Numero de telefono*</label>
							<input type="tel" value={this.state.phone} onChange={
								(event) => {
									this.handleInput("phone", event)
								}
							}/>
							
						</div>
            			<div className="col-6" style={{ paddingLeft: '15pt' }}>

        					<label>Tel. emergencia</label>
							<input type="tel" value={this.state.emergency_telephone} onChange={
								(event) => {
									this.handleInput("emergency_telephone", event)
								}
							}/>

						</div>
					</div>
            		<div className="col-12">
            			<div className="col-8">

        					<label>Mail*</label>
							<input type="email" value={this.state.mail} onChange={
								(event) => {
									this.handleInput("mail", event)
								}
							}/>

						</div>
					</div>
            		<div className="col-12 row">
            			<div className="center-col-12 row upload">
                        	<div className="col-6">
        						<label>
									<span>Certificado medico </span>
									<span id='certificate_filename' style={{color:'blue'}}></span>
								</label>
							</div>
                            <div className="col-6">
								<input type="file" id="files" style={{ display: 'none' }} onChange={ 
									event => {
										if(event.target.files[0] != undefined){
											document.getElementById('certificate_filename').innerHTML = ":" + event.target.files[0].name;
										}
									}
								}/>
								<button v className="blue" id="select-file" onClick={ event => document.getElementById('files').click() }>Cargar</button>
                            </div>
						</div>
					</div>
            		<div className="center-col-12">
            			<div className="col-8" style={{paddingRight: '16px'}}>
        					<label>Mi gym</label>
						</div>
						<div className="col-4">
							<button type="button" className="blue" id="select-file" >
								<Link to='/gym-editar'>Editar</Link>
							</button>
                        </div>
					</div>
					<div className="center-col-12">
						<button type="submit" className="blue" id="reservar">Actualizar</button>
					</div>
        		</form>
        	</div>
			</div>
		</Fragment>
        );
    }
}

export default OwnerDetailsForm;