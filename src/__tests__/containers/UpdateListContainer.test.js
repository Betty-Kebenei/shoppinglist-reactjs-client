import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

import { UpdateListContainer } from '../../components/containers/UpdateListContainer';

describe('UpdateListContainer', () => {
    let store;
    let props = {
        updateList: () => {},
        updateShoppinglist: () => {},
        getOneShoppinglist: () => {},
        match: {params: {id: 1}}
    }
    beforeEach(() => {
        store = mockStore({});
    });
    it("always renders a div", () => {
        const Wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <UpdateListContainer {...props} />
                </BrowserRouter>
            </Provider>
          );
        expect(Wrapper.find('div').length).toBeGreaterThan(0);
    });
    it("always has updateList function", () => {
        const Wrapper = shallow(<UpdateListContainer {...props} />)
        Wrapper.instance().updateList();
    });
});

