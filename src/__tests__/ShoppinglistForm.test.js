import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import {ShoppinglistForm} from '../components/shoppinglist/ShoppinglistForm';

function setup() {
    const props = {
        handleSubmit: () => {},
        renderField: () => {}

    };
    return shallow(<ShoppinglistForm {...props} />);
}

describe('ShoppinglistForm', () => {
    it('renders form fields', () => {
        const wrapper = setup(false);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});