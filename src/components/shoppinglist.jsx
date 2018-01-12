import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingList extends Component {
    render(){
        return(
            <div className="Shoppinglist col-sm-4">
                <Link className="btn btn-primary" to="/shoppinglists/add">
                    Add Shopping List
                </Link>
                <ul>

                </ul>
            </div>
        );
    }
}

export default ShoppingList;