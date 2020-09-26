import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import Photo1 from './images/photo1.png';
import Photo2 from './images/photo2.png';
import Photo3 from './images/photo3.png';
import Map_Image from './images/map.png';

const GymDetails = () => {
	const image_style = {
		width: "100%",
		height: "300px",
		padding: "10%",
		borderRadius: "50px",
	};

	const button_style = {
		background: "lightblue",
		paddingLeft: "2%",
		paddingRight: "2%",
		color: "white",
		margin: "1%",
	}

	let initial_state = {
		gym_id: null,
		gym_owner_id: null,
		gym_name: "Buba Gym",
		gym_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus libero sit amet quam dictum, id tempor arcu volutpat. Donec nec diam at ante ornare pulvinar.",
		gym_picture_1_file_path: Photo1,
		gym_picture_2_file_path: Photo2,
		gym_picture_3_file_path: Photo3,
		gym_location: Map_Image,
		gym_email: "bubagym@gmail.com",
		gym_phone_number: "+12345678545",
	};

	const [gym_details, set_gym_details] = useState(initial_state);

	const [page_settings, set_page_settings] = useState({
		name_field_disabled: true,
		description_field_disabled: true,
		phone_field_disabled: true,
		mail_field_disabled: true,
	});

	function check_for_changes(){
		if(gym_details.gym_id !== initial_state.gym_id || gym_details.gym_owner_id !== initial_state.gym_owner_id || gym_details.gym_name !== initial_state.gym_name
			|| gym_details.gym_description !== initial_state.gym_description || gym_details.gym_picture_1_file_path !== initial_state.gym_picture_1_file_path ||
			gym_details.gym_picture_2_file_path !== initial_state.gym_picture_2_file_path || gym_details.gym_picture_3_file_path !== initial_state.gym_picture_3_file_path
			|| gym_details.gym_location !== initial_state.gym_location || gym_details.gym_email !== initial_state.gym_email
			|| gym_details.gym_phone_number !== initial_state.gym_phone_number )
			{
				return true;
			}
		return false;
	}

	function handleChange(field, event){
		event.persist();
		switch(field){
			case "gym_name": set_gym_details({ ...gym_details, gym_name: event.target.value }); break;
			case "gym_description": set_gym_details({ ...gym_details, gym_description: event.target.value }); break;
			case "gym_phone": set_gym_details({ ...gym_details, gym_phone_number: event.target.value }); break;
			case "gym_mail": set_gym_details({ ...gym_details, gym_email: event.target.value }); break;
		}
	}

	function updateDetails(){
		// Code for api call
	}


    return (
    	<div className="container">
    		<div className="col-12 schedule gym-editar">
    			<div className="center-col-12 row gym-icon">
    				<i className="fas fa-dumbbell"></i>
    			</div>
    			<div >
					<center>
						{
							page_settings.name_field_disabled ? <h1 style={{display: "inline-block"}}>{ gym_details.gym_name } </h1>:
							<input id="gym_name" className="text-center" type="text" value={ gym_details.gym_name } style={{
								background:"none", width:"max-content", display: "inline-block"}} 
								disabled={ page_settings.name_field_disabled } onChange={ event => handleChange("gym_name", event) } />									
						}

					<i className="fas fa-edit" style={{marginLeft: "30px"}} onClick={ () => {
						let toggle = !page_settings.name_field_disabled;
						set_page_settings({ ...page_settings, name_field_disabled: toggle });						
					} }></i>

					</center>
				</div>

    			<div className="col-12">

					{
						page_settings.description_field_disabled ? <p>&nbsp;{ gym_details.gym_description }</p> :
						<textarea id="gym_description" className="description-text" style={{ background: "none", resize:"none" }}
						onChange={ event => handleChange("gym_description", event) }>
							{ gym_details.gym_description }
						</textarea>
					}

    				<i className="fas fa-edit description-edit" onClick={ event => {
						let toggle = !page_settings.description_field_disabled;
						set_page_settings({ ...page_settings, description_field_disabled: toggle });
					}}></i>

    			</div>
    			<div className="col-4">

					<input type="file" style={{ display: "none" }} id="pic1_file" onChange={ event => {
						event.persist();
						if(event.target.files[0] !== undefined){
							let f = new FileReader();
							f.readAsDataURL(event.target.files[0]);
							f.onload = res => {
								document.getElementById('pic1').src = res.target.result;
							}
						}
					}} />
    				<img id="pic1" src={ gym_details.gym_picture_1_file_path } alt="Photo 1" style={{ cursor: "pointer" }} 
					onClick={ event => document.getElementById('pic1_file').click() } style={ image_style } />

    			</div>

				<div className="col-4">

					<input type="file" style={{ display: "none" }} id="pic2_file" onChange={ event => {
						event.persist();
						if(event.target.files[0] !== undefined){
							let f = new FileReader();
							f.readAsDataURL(event.target.files[0]);
							f.onload = res => {
								document.getElementById('pic2').src = res.target.result;
							}
						}
					}}/>
    				<img id="pic2" src={ gym_details.gym_picture_2_file_path } alt="Photo 2" style={{ cursor: "pointer" }} 
					onClick={ event => document.getElementById('pic2_file').click() } style={ image_style }/>
    			
				</div>    	

				<div className="col-4">

					<input type="file" style={{ display: "none" }} id="pic3_file" onChange={ event => {
						event.persist();
						if(event.target.files[0] !== undefined){
							let f = new FileReader();
							f.readAsDataURL(event.target.files[0]);
							f.onload = res => {
								document.getElementById('pic3').src = res.target.result;
							}
						}
					}}/>
    				<img id="pic3" src={ gym_details.gym_picture_3_file_path } alt="Photo 3" style={{ cursor: "pointer" }} 
					onClick={ event => document.getElementById('pic3_file').click() } style={ image_style }/>

    			</div>

				<p style={{textAlign: 'right'}}>Ver mas <i className="fas fa-edit"></i></p>
				<div className="col-12">
            		<img src={ gym_details.gym_location } alt="Map" />
    				<i className="fa fa-map-marker"></i>
            	</div>
				<h2 className="text-center">Contacto</h2>
				<div className="col-12 contact-details">
                	<div className="col-2">
                		<i className="fas fa-phone-alt"></i>
					</div>
					<div className="col-8">
						{
							page_settings.phone_field_disabled ? <p>{ gym_details.gym_phone_number }</p>: 
							<input type="tel" value={ gym_details.gym_phone_number } 
							style={{background:"none", border: "2px solid gray"}} onChange={ event => handleChange("gym_phone", event)} /> 
						}
						
					</div>
					<div className="col-2" style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>

                		<i className="fas fa-edit" onClick={event => {
							let toggle = !page_settings.phone_field_disabled;
							set_page_settings({ ...page_settings, phone_field_disabled: toggle});
						}}></i>

					</div>
                </div>
				<div className="col-12 contact-details">
                	<div className="col-2">
                		<i className="fas fa-envelope"></i>
					</div>
					<div className="col-8">
						{
							page_settings.mail_field_disabled ? <p>{ gym_details.gym_email }</p> : 
							<input type="email" value={ gym_details.gym_email } style={{background:"none", border: "2px solid gray"}}
							onChange={ event => handleChange("gym_mail", event) }/> 
						}
						
					</div>
					<div className="col-2" style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                		
						<i className="fas fa-edit" onClick={ event => {
							let toggle = ! page_settings.mail_field_disabled;
							set_page_settings({ ...page_settings, mail_field_disabled: toggle });
						}}></i>
					
					</div>
                </div>
				{
					check_for_changes() && <center> 
						<button type="button" style={button_style} onClick={ event => updateDetails() }>Save</button> 
						<button type="button" style={button_style} onClick={ event => set_gym_details({ ...initial_state })}>Cancel</button> 
					</center>
				}
    		</div>
    	</div>
    );
}

export default GymDetails;