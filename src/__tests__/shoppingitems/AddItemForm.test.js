import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import AddItemForm from '../../components/shoppingitems/AddItemForm';

describe('AddItemForm', () => {
    it('should render a form with a className: AddItemForm', () => {
        expect(shallow(<AddItemForm />).exists(<form className='AddItemForm'></form>)).toBe(true)
    });
    it('should render a div', () => {
        expect(shallow(<AddItemForm />).exists(<div></div>)).toBe(true)
    });
    it('should render a h2', () => {
        expect(shallow(<AddItemForm />).exists(<h2></h2>)).toBe(true)
    });
    it('should render a p', () => {
        expect(shallow(<AddItemForm />).exists(<p></p>)).toBe(true)
    });
    it('renders form fields', () => {
        const wrapper = shallow(<AddItemForm/>);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});
