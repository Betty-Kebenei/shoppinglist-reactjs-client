import React from 'react';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            passowrd: ''
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
                <form onSubmit={this.handleSubmit}>
                    <label> Username/Email: </label>
                    <input type="text" name="email" onChange={this.handleChange} />
                   
                    <label> Password: </label>
                    <input type="password" name="password" onChange={this.handleChange} />
                    
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        )
    }

}

export default LoginForm