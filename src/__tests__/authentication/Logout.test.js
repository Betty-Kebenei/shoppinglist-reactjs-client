import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

import { Logout } from '../../components/authentication/Logout';

describe('Logout', () => {
    let store;
    const props = {
        logoutUser: () => {}
    }
    beforeEach(() => {
        store = mockStore({});
    });
    it("always renders a logout", () => {
        const Wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <Logout {...props}/>
                </BrowserRouter>
            </Provider>
          );
      });
});
