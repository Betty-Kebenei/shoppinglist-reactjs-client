import React from 'react';

class RegistrationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirm_password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value.toLowerCase()});
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
                    <input type="text" name="username" onChange={this.handleChange} />
                    
                    <label>Email:</label>
                    <input type="text" name="email" onChange={this.handleChange} />
                    
                    <label>Password:</label>
                    <input type="password" name="password" onChange={this.handleChange} />

                    <label>Confirm Password:</label>
                    <input type="password" name="confirm_password" onChange={this.handleChange} />
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default RegistrationForm