import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { RegistrationForm } from '../components/authentication/RegistrationForm';

function setup() {
    const props = {
        handleSubmit: () => {},
        renderField: () => {}

    };
    return shallow(<RegistrationForm {...props} />);
}

describe('RegistrationForm', () => {
    it('renders form and h2', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h2').text()).toEqual('Sign Up'); 
    });
    it('renders form fields', () => {
        const wrapper = setup(false);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});