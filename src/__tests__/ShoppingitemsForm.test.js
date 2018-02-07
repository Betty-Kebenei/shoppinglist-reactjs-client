import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { ShoppingitemsForm } from '../components/shoppingitems/ShoppingitemsForm';

function setup(){
    const props = {
        handleSubmit: () => {},
        renderField: () => {}

    };
    return shallow(<ShoppingitemsForm {...props} />);
}

describe('ShoppingitemsForm', () => {
    it('renders form fields', () => {
        const wrapper = setup(false);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});
