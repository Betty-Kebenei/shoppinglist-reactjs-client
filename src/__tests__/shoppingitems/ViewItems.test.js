import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import  ViewItems from '../../components/shoppingitems/ViewItems';

describe('viewItems', () => {
    it('renders viewItems component', () => {
        shallow(<ViewItems />)
      })
    it("always renders a div", () => {
        const divs = shallow(<ViewItems />).find("div");
        expect(divs.length).toBeGreaterThan(0);
    });
    it("always renders a h2", () => {
        const h2s = shallow(<ViewItems />).find("h2");
        expect(h2s.length).toBeGreaterThan(0);
    });
    it("always renders a table", () => {
        const tables = shallow(<ViewItems />).find("table");
        expect(tables.length).toBeGreaterThan(0);
    }); 
});