import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../static/index.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import SigninPage from './SigninPage';
import ShoppingList from './shoppinglist';
import ShoppinglistForm from './ShoppinglistForm';
import ShoppingitemsForm from './ShoppingitemsForm';

const App = (props) => (
    <div>
        <Provider store={createStore(reducers)}>
           <BrowserRouter>
                <div>  
                    <Switch>
                        <Route path='/auth' component={SigninPage} />
                        <Route path='/shoppinglists' component={() => (<div><Header /><ShoppingList/><ShoppinglistForm/></div>)} />
                        <Route path='/' component={() => (<div><Header /><ShoppingList/></div>)} />
                    </Switch> 
                </div> 
            </BrowserRouter>
        </Provider>
    </div>

)

export default App;
