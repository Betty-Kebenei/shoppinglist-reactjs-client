import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { Edit_Shoppingitem } from '../components/shoppingitems/Edit_Shoppingitems';

function setup(){
    const props = {
        handleSubmit: () => {},
        renderField: () => {}

    };
    return shallow(<Edit_Shoppingitem {...props} />);
}

describe('Edit_Shoppingitem', () => {
    it('renders form fields', () => {
        const wrapper = setup(false);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});