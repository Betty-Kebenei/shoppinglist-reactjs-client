import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../static/index.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import reducers from '../reducers';

import { LOGIN_SUCCESS } from '../actions/Login';

import Header from './common/Header';
import RegistrationForm from './authentication/RegistrationForm';
import LoginForm from './authentication/LoginForm';
import Logout from './authentication/Logout';
import authRequired from './common/AuthRequired';
import noAuthRequired from './common/NoAuthRequired';
import NotFound from './common/NotFound';
import ShoppingList from './shoppinglist/Shoppinglist';
import ShoppinglistForm from './shoppinglist/ShoppinglistForm';
import ShoppingitemsForm from './shoppingitems/ShoppingitemsForm';
import ViewAShoppinglist from './shoppinglist/ViewAShoppinglist';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('access_token');

if(token) {
    store.dispatch({ type: LOGIN_SUCCESS});
  }

const App = (props) => (
    <div>
        <Provider store={store}>
           <BrowserRouter>
                <div> 
                    <Header {...this.props}/> 
                    <Switch>
                        <Route exact path='/auth/register' component={noAuthRequired(RegistrationForm)} />
                        <Route exact path='/auth/login' component={noAuthRequired(LoginForm)} />
                        <Route exact path='/auth/logout' component={authRequired(Logout)} />
                        <Route exact path='/add' component={authRequired(() => (<div><ShoppingList/><ShoppinglistForm/></div>))} />
                        <Route exact path='/' component={authRequired(() => (<div><ShoppingList/><ViewAShoppinglist/></div>))} />
                        <Route path= "*" component={NotFound} />
                    </Switch> 
                </div> 
            </BrowserRouter>
        </Provider>
    </div>
)
export default App;
