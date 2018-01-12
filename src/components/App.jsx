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

import Header from './Header';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import ShoppingList from './Shoppinglist';
import ShoppinglistForm from './ShoppinglistForm';
import ShoppingitemsForm from './ShoppingitemsForm';

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
                        <Route exact path='/auth/register' component={RegistrationForm} />
                        <Route exact path='/auth/login' component={LoginForm} />
                        <Route exact path='/shoppinglists' component={() => (<div><ShoppingList/><ShoppinglistForm/></div>)} />
                        <Route exact path='/' component={ShoppingList} />
                    </Switch> 
                </div> 
            </BrowserRouter>
        </Provider>
    </div>
)
export default App;
