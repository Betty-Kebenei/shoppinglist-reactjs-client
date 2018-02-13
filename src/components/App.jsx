import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../static/index.css';
import '../../node_modules/toastr/build/toastr.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

import { LOGIN_SUCCESS } from '../actions/Login';

import Header from './common/Header';
import RegistrationFormContainer from './containers/RegistrationFormContainer';
import LoginFormContainer from './containers/LoginFormContainer';
import Logout from './authentication/Logout';
import authRequired from './common/AuthRequired';
import noAuthRequired from './common/NoAuthRequired';
import NotFound from './common/NotFound';
import ListsContainer from './containers/ListsContainer'
import ItemsContainer from './containers/ItemsContainer';
import UpdateListContainer from './containers/UpdateListContainer';
import UpdateItemContainer from './containers/UpdateItemContainer';

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(reduxThunk, promise))(createStore);
const store = createStoreWithMiddleware(rootReducer);
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
                        <Route exact path='/auth/register' component={noAuthRequired(RegistrationFormContainer)} />
                        <Route exact path='/auth/login' component={noAuthRequired(LoginFormContainer)} />
                        <Route exact path='/auth/logout' component={authRequired(Logout)} />
                        <Route exact path='/:id/shoppingitems/:itemid' component={authRequired(UpdateItemContainer)}/>
                        <Route exact path='/:id/:listname/shoppingitems' component={authRequired(ItemsContainer)} />
                        <Route exact path='/:id' component={authRequired(UpdateListContainer)} />
                        <Route exact path='/' component={authRequired(ListsContainer) } />
                        <Route path= "*" component={NotFound} />
                    </Switch> 
                </div> 
            </BrowserRouter>
        </Provider>
    </div>
)
export default App;
