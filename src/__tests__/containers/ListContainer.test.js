import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

import { ListsContainer } from '../../components/containers/ListsContainer';

describe('ListContainer', () => {
    let store;
    const props = {
      getAllShoppinglists: () => {},
      addShoppingList: () => {},
      postShoppinglist: () => {},
      paginateLists: () => {},
      deleteShoppinglist: () => {},
      deleteShoppinglists: () => {}
    }
    beforeEach(() => {
        store = mockStore({});
    });
    it("always renders a div", () => {
        const Wrapper = mount(
            <Provider store={store}>
              <ListsContainer {...props} />
            </Provider>
          )
        expect(Wrapper.find('div').length).toBeGreaterThan(0);
        expect(Wrapper.find('input').length).toBeGreaterThan(0);
        expect(Wrapper.find('button').length).toBeGreaterThan(0);
      });
      it("always has functions", () => {
        const Wrapper = shallow(<ListsContainer {...props} />)
        Wrapper.instance().addShoppingList();
        Wrapper.instance().paginateShoppingLists();
        Wrapper.instance().deleteOneShoppingList();
        Wrapper.instance().deleteAllShoppingLists();
      });
});
