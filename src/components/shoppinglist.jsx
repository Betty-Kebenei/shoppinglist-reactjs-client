import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingList extends Component {
    render(){
        return(
            <div className="Shoppinglist col-sm-4">
                <Link className="btn btn-primary" to="/shoppinglists">
                    Add Shopping List
                </Link>
                <h2>Below is the list of your shopping lists:</h2>
                <ul>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;