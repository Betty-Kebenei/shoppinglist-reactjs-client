import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { LoginForm } from '../components/authentication/LoginForm';
import Logout from '../components/authentication/Logout';


function setup() {
    const props = {
        handleSubmit: () => {},
        renderField: () => {}

    };
    return shallow(<LoginForm {...props} />);
}

describe('LoginForm', () => {
    it('renders form and h2', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h2').text()).toEqual('Sign In'); 
    });
    it('renders form fields', () => {
        const wrapper = setup(false);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});

describe('Logout', () => {
    it('renders logout component', () => {
        shallow(<Logout />)
      })
    it('renders h1', () => {
        const wrapper = shallow(<Logout/>);
        expect(wrapper.find('h1').text()).toEqual('Logging out ...'); 
    });
});

