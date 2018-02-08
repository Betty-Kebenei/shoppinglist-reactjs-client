import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import ViewLists from '../../components/shoppinglist/ViewLists';

describe('ViewLists', () => {
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
    });

    
});