import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

import { RegistrationFormContainer } from '../../components/containers/RegistrationFormContainer';

describe('RegistrationFormContainer', () => {
    let props = {
        createUser: () => {}
    }
    let store;
    beforeEach(() => {
        store = mockStore({});
    });
    it("always renders a div", () => {
        const Wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <RegistrationFormContainer />
                </BrowserRouter>
            </Provider>
        );
        expect(Wrapper.find('div').length).toBeGreaterThan(0);
    });
    it("always has handleRegistration function", () => {
    const Wrapper = shallow(<RegistrationFormContainer {...props} />)
    Wrapper.instance().handleRegistration();
    });
});