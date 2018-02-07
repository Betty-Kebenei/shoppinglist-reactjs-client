import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

import { ItemsContainer } from '../../components/containers/ItemsContainer';

describe('ItemsContainer', () => {
    let store;
    const props = {
        match: "1/shoppingitems",
        params: "id: 1",
        listId: 1,
        getAllShoppingitems: () => {},
        getOneShoppinglist: () => {},
        postShoppingitems: () => {},
        deleteShoppingitem: () => {},
        paginateItems: () => {}
    }
    beforeEach(() => {
        store = mockStore({});
    });
    it("always renders a div", () => {
        const Wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <ItemsContainer {...props} />
                </BrowserRouter>
            </Provider>
          );
        expect(Wrapper.find('div').length).toBeGreaterThan(0);
        expect(Wrapper.find('input').length).toBeGreaterThan(0);
      });
      it("always has functions", () => {
        const Wrapper = shallow(<ItemsContainer {...props} />)
        Wrapper.instance().addShoppingItem();
        Wrapper.instance().deleteShoppingItem();
        Wrapper.instance().paginateShoppingItems();
      });
});
