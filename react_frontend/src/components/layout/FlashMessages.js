import React, { Component } from 'react';
import FlashMessage from './FlashMessage';


export default class FlashMessages extends Component{
    /* 
        Message Structure msg = {
            message: "your msg",
            warning: true/false,
        }
    */

    constructor(props){
        super(props);
        this.state = {
            messages: this.props.messages,
        }

        this.remove_message = this.remove_message.bind(this);
    }

    remove_message(index){
        let new_messages = [];
        this.state.messages.forEach((msg, i) => {
            if(i !== index){
                new_messages.push(msg);
            }
        });
        this.setState(prev => ({ ...prev, messages: new_messages }));
    }

    render(){
        return (
            <div className="flash-messages">
                {
                    this.state.messages.map((val, index) => {
                        return <FlashMessage message={ val.message } warning={ val.warning } index={ index } key={ index + val.message }
                        remove_message={ this.remove_message }/>
                    })
                }
            </div>
        );
    }

}