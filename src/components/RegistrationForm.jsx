import React from 'react';

class RegistrationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        alert('You are successfully registered to Shopping List Tracker!');
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" />
                    
                    <label>Email:</label>
                    <input type="text" name="email" />
                    
                    <label>Password:</label>
                    <input type="text" name="password" />

                    <label>Confirm Password:</label>
                    <input type="text" name="confirm_password" />
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default RegistrationForm