import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const ViewShoppingLists = (props) => {
    const { 
        shoppinglists,
        deleteOneShoppingList,
        deleteAllShoppingLists,
        updateOneShoppinglist,
        searchError
     } = props;

      // Display shopping lists in a table.
    const renderShoppinglists = () =>  (
        _.map(shoppinglists, shoppinglist => {
            const list_id = shoppinglist.list_id;
            return (
                <tr key={list_id}>
                    <td>{shoppinglist.list_id}</td>
                    <td>{shoppinglist.listname}</td>
                    <td>
                        <Link 
                            className="btn glyphicon glyphicon-file text-primary" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="View Items"  
                            to={`/${list_id}/${shoppinglist.listname}/shoppingitems`}
                        />

                        <button 
                            type="button" 
                            className="btn glyphicon glyphicon-edit text-primary"
                            onClick={()=>{updateOneShoppinglist(shoppinglist.list_id)}} 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Update_List" 
                            />  
                        
                        <button 
                            type="button" 
                            className="btn glyphicon glyphicon-trash text-primary"
                            onClick={()=>{deleteOneShoppingList(shoppinglist.list_id)}} 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Delete_item" 
                            />  
                    </td>                  
                </tr>
                
            );
        })
    );

    return(
        <div className="Shoppinglist">
            <button 
                onClick = {() => deleteAllShoppingLists()}
                type="button" 
                className="btn glyphicon glyphicon-trash text-primary" 
                data-toggle="tooltip" 
                data-placement="top" 
                title="Delete_all_lists" 
                />
            <br /> <br/>
            
            <h2>Shopping Lists:</h2>
            
            <div className="col-sm-12">
                <table className="table bordered">
                    <thead>
                        <tr>  
                            <td>LIST ID</td>
                            <td>LISTNAME</td>
                            <td>ACTIONS</td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderShoppinglists()}
                    </tbody>
                </table>
                {searchError}
            </div>
        </div>
    );

}

export default ViewShoppingLists;