import React from 'react';

class LoginForm extends React.Component {
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username/Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
            </div>
        )
    }

}

export default LoginForm