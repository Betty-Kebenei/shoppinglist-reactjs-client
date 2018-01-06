import React from 'react';

class RegistrationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirm_password: '',
            signupformErrors: {username: '', email: '', password:''},
            usernameValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState(
            {[event.target.name]: event.target.value.toLowerCase()}
        );
    }
    handleSubmit(event){
        alert('You are successfully registered to Shopping List Tracker!');
        this.setState({
            username: '',
            email: '',
            password: '',
            confirm_password: ''
        });
        
    }
      
    render(){
        return(
            <div>
                <div id="signupModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h2 className="modal-title">Sign Up</h2>
                            </div>
                            <div className="modal-body">
                                <form className="signup" onSubmit={this.handleSubmit} >
                                    Username:<br />
                                    <input type="text" name="username" onChange={this.handleChange} /><br />
                                    Email:<br />
                                    <input type="text" name="email" onChange={this.handleChange} /><br />
                                    Password:<br />
                                    <input type="password" name="password" onChange={this.handleChange} /><br />
                                    Confirm Password:<br />
                                    <input type="password" name="confirm_password" onChange={this.handleChange} />
                                    <input type="submit" value="Submit" />
                                </form> 
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default RegistrationForm