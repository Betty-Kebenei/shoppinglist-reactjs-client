import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

import ViewLists from '../../components/shoppinglist/ViewLists';

describe('ViewLists', () => {
    let store;
    beforeEach(() => {
        store = mockStore({});
    });
    it('renders ViewLists component', () => {
        shallow(<ViewLists />)
    });
    it("always renders a div", () => {
        const divs = shallow(<ViewLists />).find("div");
        expect(divs.length).toBeGreaterThan(0);
    });
    it("always renders a button", () => {
        const buttons = shallow(<ViewLists />).find("button");
        expect(buttons.length).toBeGreaterThan(0);
    });
    it("always renders a h2", () => {
        const h2s = shallow(<ViewLists />).find("h2");
        expect(h2s.length).toBeGreaterThan(0);
    });
    it("always renders a table", () => {
        const tables = shallow(<ViewLists />).find("table");
        expect(tables.length).toBeGreaterThan(0);
        expect(tables.find('thead').length).toBeGreaterThan(0);
        expect(tables.find('tbody').length).toBeGreaterThan(0);
    });
    it('renders mapping function', () => {
        const shoppinglists = [
            {
                list_id: 1,
                listname: "list1"
            },
            {
                list_id: 2,
                listname: "list2"
            }
        ]
        const wrapper = mount(
            <Provider store={store}>
                <BrowserRouter>
                    <ViewLists shoppinglists={shoppinglists}/>
                </BrowserRouter>
            </Provider>
          );
        expect(wrapper.find('tbody').children().length).toBeGreaterThan(0);
        expect(wrapper.find('tbody').children().find('tr').length).toBeGreaterThan(0);
        expect(wrapper.find('button').length).toBeGreaterThan(0);
    });
});