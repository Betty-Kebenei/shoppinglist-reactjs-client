import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import Logout from '../../components/authentication/Logout';

describe('Logout', () => {
    it('renders logout component', () => {
        shallow(<Logout />)
      })
    it('renders h1', () => {
        const wrapper = shallow(<Logout/>);
        expect(wrapper.find('h1').text()).toEqual('Logging out ...'); 
    });
});
