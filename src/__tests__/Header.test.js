import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { Header } from '../components/common/Header';

function setup() {
    const props = {
        getAllShoppinglists: () => {},
        onLogoutClick: () => {},
        renderChange: () => {}
    };
    return shallow(<Header {...props} />);
}

describe('Header', () => {
    it('renders h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('h1').text()).toEqual('Shopping List Tracker');
        expect(wrapper.find('p').text()).toEqual('We keep tracker on what you desire to spend your money on.'); 
    });
});