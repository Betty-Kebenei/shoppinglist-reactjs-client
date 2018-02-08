import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

import { Header } from '../../components/common/Header';

describe('Header', () => {
    let props = {
        getAllShoppinglists: () => {},
        logoutUser: () => {},
        renderChange: () => {}
    }
    let store;
    beforeEach(() => {
        store = mockStore({});
    });
    it("always renders a div and children", () => {
        const Wrapper = mount(
            <Provider store={store}>
              <Header {...props}/>
            </Provider>
          )
        expect(Wrapper.find('div').length).toBeGreaterThan(0);
        expect(Wrapper.find('h1').length).toBeGreaterThan(0);
        expect(Wrapper.find('p').length).toBeGreaterThan(0);
    }); 
    it('should render a Link', () => {
        expect(shallow(<Header {...props}/>).exists(<Link></Link>)).toBe(true)
    });
    it("always has functions", () => {
        const Wrapper = shallow(<Header {...props} />)
        Wrapper.instance().onLogoutClick();
        Wrapper.instance().renderChange();
    });
});