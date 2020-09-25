import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import Photo1 from './images/photo1.png';
import Photo2 from './images/photo2.png';
import Photo3 from './images/photo3.png';
import Map_Image from './images/map.png';

const GymDetails = () => {

	const [gym_details, set_gym_details] = useState({
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
	});

	const [page_settings, set_page_settings] = useState({
		name_field_disabled: true,
		description_field_disabled: true,
		phone_field_disabled: true,
		mail_field_disabled: true,
	});

	function handleChange(field, event){
		event.persist();
		console.log(event.target.value);
		switch(field){
			case "gym_name": set_gym_details({ ...gym_details, gym_name: event.target.value }); break;
			case "gym_description": set_gym_details({ ...gym_details, gym_description: event.target.value }); break;
			case "gym_phone": set_gym_details({ ...gym_details, gym_phone_number: event.target.value }); break;
			case "gym_mail": set_gym_details({ ...gym_details, gym_email: event.target.value }); break;
		}
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
						page_settings.description_field_disabled ? <p>{ gym_details.gym_description }</p> :
						<textarea id="gym_description" className="description-text" style={{ background: "none", resize:"none" }}>
							{ gym_details.gym_description }
						</textarea>
					}

    				<i className="fas fa-edit description-edit" onClick={ event => {
						let toggle = !page_settings.description_field_disabled;
						set_page_settings({ ...page_settings, description_field_disabled: toggle });
					}}></i>

    			</div>
    			<div className="col-4">
    				<img src={ gym_details.gym_picture_1_file_path } alt="Photo 1" />
    			</div>    			
				<div className="col-4">
    				<img src={ gym_details.gym_picture_2_file_path } alt="Photo 2" />
    			</div>    			
				<div className="col-4">
    				<img src={ gym_details.gym_picture_3_file_path } alt="Photo 3" />
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
    		</div>
    	</div>
    );
}

export default GymDetails;