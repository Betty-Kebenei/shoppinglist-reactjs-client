import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import PaginateLists from '../../components/shoppinglist/PaginateLists';
import PaginateItems from '../../components/shoppingitems/PaginateItems';

describe('PaginateLists', () => {
    it('renders PaginateLists component', () => {
        shallow(<PaginateLists />)
      })
    it("always renders a div", () => {
        const divs = shallow(<PaginateLists />).find("div");
        expect(divs.length).toBeGreaterThan(0);
    });
    it('should render a div with a className: pagination', () => {
        expect(shallow(<PaginateLists />).exists(<ul className='pagination'></ul>)).toBe(true)
    });
    
});

describe('PaginateItems', () => {
    it('renders PaginateItems component', () => {
        shallow(<PaginateItems />)
    });
    it("always renders a div", () => {
        const divs = shallow(<PaginateItems />).find("div");
        expect(divs.length).toBeGreaterThan(0);
    });
    it('should render a div with a className: pagination', () => {
        expect(shallow(<PaginateItems />).exists(<ul className='pagination'></ul>)).toBe(true)
    });
    
});