import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value.toLowerCase() });
    }
    handleSubmit(event){
        alert('You are successfully logged in!');
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <div id="signinModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h2 className="modal-title">Sign In</h2>
                            </div>
                            <div className="modal-body">
                                <form className="signup" onSubmit={this.handleSubmit} >
                                    Username/Email:<br />
                                    <input type="text" name="username" onChange={this.handleChange} /><br />
                                    Password:<br />
                                    <input type="password" name="password" onChange={this.handleChange} /><br />
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
        )
    }

}

export default LoginForm