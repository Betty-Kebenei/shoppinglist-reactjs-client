import React from 'react';

class ShoppingitemsForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemname: '',
            quantity: '',
            units: '',
            price: '',
            currency: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value.toLowerCase()});
    }
    handleSubmit(event){
        alert('Shopping item successfully created!');
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label>Itemname:</label>
                    <input type="text" name="itemname" onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group">
                    <label>Quantity:</label>
                    <input type="text" name="quantity" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                    <label>Units:</label>
                    <input type="text" name="units" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                    <label>Price:</label>
                    <input type="text" name="price" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                    <label>Currency:</label>
                    <input type="text" name="currency" onChange={this.handleChange} />
                    </div>
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ShoppingitemsForm