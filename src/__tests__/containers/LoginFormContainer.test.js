import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

import { LoginFormContainer } from '../../components/containers/LoginFormContainer';

describe('LoginFormContainer', () => {
    let props ={
        loginUser: () => {}
    }
    let store;
    beforeEach(() => {
        store = mockStore({});
    });
    it("always renders a div", () => {
        const Wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginFormContainer />
                </BrowserRouter>
            </Provider>
        );
        expect(Wrapper.find('div').length).toBeGreaterThan(0);
    });  
    it("always has handleLogin function", () => {
        const Wrapper = shallow(<LoginFormContainer {...props} />)
        Wrapper.instance().handleLogin();
    });
});