import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import ComposedComponent from '../../components/common/NoAuthRequired';

describe('NoAuthRequired', () => {
    it('renders HOC component', () => {
        shallow(<ComposedComponent />)
      })
    // it('renders h1', () => {
    //     const wrapper = shallow(<NotFound/>);
    //     expect(wrapper.find('h1').text()).toEqual('404!');
    //     expect(wrapper.find('p').text()).toEqual('A page with that URL cannot be found.'); 
    // });
});