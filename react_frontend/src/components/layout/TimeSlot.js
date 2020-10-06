import React, { Component } from 'react';


export default class TimeSlot extends Component{
    constructor(props){
        super(props);
        this.index = this.props.index;
        console.log(this.props.timeslot)
        this.state = { 
            ...this.props.timeslot, 
            edit: this.props.edit,
        }
        this.set_timeslot = this.props.set_timeslot;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key, event){
        event.persist();
        
        switch(key){
            case "day": this.setState(prev => ({...prev, day: event.target.value})); break;
            case "duration": this.setState(prev => ({...prev, duration: event.target.value})); break;
            case "cost": this.setState(prev => ({...prev, cost: event.target.value})); break;
            case "user": this.setState(prev => ({...prev, user: event.target.value})); break;
            case "count": this.setState(prev => ({...prev, count: event.target.value})); break;
        }
    }

    render(){
        return (
            
            <div className="timeslot" style={{display: "block"}} >
                    <h2 style={{width: "60%"}}> Time Slot { this.index + 1 } 
                    <span style={{ color: "lightblue", cursor: "pointer", float: "right", fontSize:"40px"}} onClick={ event => this.setState(prev => {
                        return { ...prev, edit: !prev.edit }
                    })}>
                        { this.state.edit ? "-": "+" }</span> </h2> 

                    {   this.state.edit && 
                    <div>
                        <div className="col-6 edit-schedule">
                            <i className="fas fa-calendar-alt"></i>
                            <input type="date" value={ this.state.day } onChange={
                                event => this.handleChange("day", event)
                            } />
                        </div>
                        <div className="col-6 edit-schedule" style={{ paddingLeft: '15pt' }}>
                            <i className="fas fa-clock"></i>
                            <input type="text" value={ this.state.duration } onChange={
                                event => this.handleChange("duration", event)
                            } />
                        </div>
                        <div className="col-4 edit-schedule" style={{position: 'relative', right: '8px'}}>
                            <i className="fas fa-money-bill-wave"></i>
                            <input type="number" value={ this.state.cost } onChange={
                                event => this.handleChange("cost", event)
                            } />
                        </div>
                        <div className="col-4 edit-schedule" style={{ paddingLeft: '15pt' }}>
                            <i className="fa fa-user"></i>
                            <input type="number" value={ this.state.user } onChange={
                                event => this.handleChange("user", event)
                            } />
                        </div>
                        <div className="col-4 edit-schedule" style={{ paddingLeft: '15pt' }}>
                            <i className="fa fa-scissors"></i>
                            <input type="number" value={ this.state.count } onChange={
                                event => this.handleChange("count", event)
                            } />
                        </div>
                        <input type="button" value="Save" style={{width: "30%"}} onClick={
                            event => { this.set_timeslot({
                                    day: this.state.day,
                                    duration: this.state.duration,
                                    cost: this.state.cost,
                                    count: this.state.count,
                                    user: this.state.user,
                                }, this.index)
                                this.setState(prev => ({...prev, edit: false}));
                            }
                        }/>
                        <input type="button" value="Delete" style={{width: "30%", marginLeft: "2%"}} onClick={
                            event => {
                                this.set_timeslot(null, this.index);
                            }
                        } />        
                    </div>
                }
                <br />
                <hr />
            </div>
        );
       
    }
}