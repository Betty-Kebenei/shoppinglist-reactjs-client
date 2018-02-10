import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

import { UpdateItemContainer } from '../../components/containers/UpdateItemContainer';

describe('UpdateItemContainer', () => {
    let props = {
        match: {params: {id: 1, itemid: 2}},
        getOneShoppingitem: () => {},
        updateShoppingitems: () => {}
    }
    let store;
    beforeEach(() => {
        store = mockStore({});
    });
    it("always renders a div", () => {
        const Wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <UpdateItemContainer {...props}/>
                </BrowserRouter>
            </Provider>
          );
        expect(Wrapper.find('div').length).toBeGreaterThan(0);
    });
    it("always has UpdateItemContainer function", () => {
    const Wrapper = shallow(<UpdateItemContainer {...props} />)
    Wrapper.instance().updateItem();
    });
});

