import React from 'react';

class ShoppinglistForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value.toLowerCase()});
    }

    handleSubmit(event){
        alert('Shopping list successfully created!');
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Listname:</label>
                    <input type='text' name='listname' onChange={this.handleChange} />

                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default ShoppinglistForm