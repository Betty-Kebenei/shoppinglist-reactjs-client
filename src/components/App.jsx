import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../static/index.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import RegistrationForm from './RegistrationForm';
import ShoppingList from './shoppinglist';
import ShoppinglistForm from './ShoppinglistForm';

const App = () => (
    <div>
        <Provider store={createStore(reducers)}>
           <BrowserRouter>
                <div>
                    <Switch>
                        {/* <Header /> */}
                        <Route path='/auth' component={RegistrationForm} />
                        <Route path='/shoppinglists' component={ShoppinglistForm} />
                        <Route path='/' component={ShoppingList} />
                    </Switch>
                </div> 
            </BrowserRouter>
        </Provider>
    </div>

)

export default App;
