import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import NotFound from '../../components/common/NotFound';

describe('NotFound', () => {
    it('renders NotFound component', () => {
        shallow(<NotFound />)
      })
    it('renders h1', () => {
        const wrapper = shallow(<NotFound/>);
        expect(wrapper.find('h1').text()).toEqual('404!');
        expect(wrapper.find('p').text()).toEqual('A page with that URL cannot be found.'); 
    });
});