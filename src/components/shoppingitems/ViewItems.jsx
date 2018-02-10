import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const ViewItems = (props) => {
    const { listId, shoppingItems, onDelete, searchError } = props;

    const renderShoppingitems = () => (
        _.map(shoppingItems, item => {
            return (
                <tr key={item.item_id}>
                    <td>{item.itemname}</td>
                    <td>{item.quantity}</td>
                    <td>{item.units}</td>
                    <td>{item.price}</td>
                    <td>{item.currency}</td>
                    <td>

                    <Link 
                        className="btn glyphicon glyphicon-edit text-primary" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Update_item" 
                        to={`/${listId}/shoppingitems/${item.item_id}`}
                        /> 

                    <button 
                        type="button" 
                        className="btn glyphicon glyphicon-trash text-primary" 
                        onClick={()=>onDelete(listId, item.item_id)}
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="Delete_item" 
                        />  

                    </td>
                </tr>
            );
        })
    )

    return( 
        <div className="ViewItems col-sm-12">
            <h2>Shopping items:</h2><br />
            <div className="col-sm-12">
                <table className="table bordered">
                    <thead>
                        <tr>
                            <td>ITEMNAME</td>
                            <td>QUANTITY</td>
                            <td>UNITS</td>
                            <td>PRICE</td>
                            <td>CURRENCY</td>
                            <td>ACTIONS</td> 
                        </tr>
                    </thead>
                    <tbody>
                        {renderShoppingitems()}
                    </tbody>
                </table>
                {searchError}
            </div>
        </div>
    );
}

export default ViewItems;