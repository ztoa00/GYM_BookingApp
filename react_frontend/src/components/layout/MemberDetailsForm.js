import React, { Fragment, Component } from 'react';
import ProfilePic from './images/profile-picture.png';


const FORM_SUBMISSION_URL = "/";


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
			certificate: null,
			profile_picture: null,
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
		let data = {
			user: this.state.userid,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			dob: this.state.dob,
			phone: this.state.phone,
			emergency_telephone: this.state.emergency_telephone,
			mail: this.state.mail,
			certificate: this.state.certificate,
			profile_picture: this.state.profile_picture,
		};	

		fetch(FORM_SUBMISSION_URL, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then( res => {
			console.log(data);
			if(!res.ok){
				alert("retry");
			}
			else{
				let data = res.json();
				alert("Updated");
			}
		},
		).catch( err => {
			alert(err);
		});
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

						<div className="col-6 photo-box" >

							<input type="file" style={{display: 'none'}} id='profile_pic' onChange={ 
								event => {
									event.persist();
									if(event.target.files[0] != undefined){
										this.setState( prev => {
											return { ...prev, profile_picture: event.target.files[0] }
										})		
									}
								}
							}/>
							<center>
								<img src={ (()=>{
									if(this.state.profile_picture === null ){
										return ProfilePic;
									}
									else{
										let f = new FileReader();
										f.readAsDataURL(this.state.profile_picture);
										f.onload = res => {
											document.getElementById('profile_pic_preview').src = res.target.result;
										}
									}
								})()} 
									alt="Your profile picture" id='profile_pic_preview' style={
										{ width: '200px', cursor: 'pointer', height: "200px", borderRadius:"50%", border:"5px solid orange" }} 
									onClick={ 
										event => document.getElementById('profile_pic').click() 
									} 
								/>
							</center>
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
        						<label>
									<span>Certificado medico </span>
						<span id="certificate_filename" style={{color: 'red'}}>{
							this.state.certificate  !== null && ":" + this.state.certificate.name
						}</span>
								</label>
							</div>
                            <div className="col-6">
								<input type="file" id="files" style={{ display: 'none' }} onChange={ 
									event => {
										event.persist();
										if(event.target.files[0] != undefined){
											this.setState(prev => {
												return { ...prev, certificate: event.target.files[0] }
											});
										}
									}
								}/>
								<button type="button" id="select-file" onClick={ event => document.getElementById('files').click() }>Cargar</button>
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