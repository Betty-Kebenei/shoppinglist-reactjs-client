import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import LoginForm from '../../components/authentication/LoginForm';

describe('LoginForm', () => {
    it('should render a div', () => {
        expect(shallow(<LoginForm />).exists(<div></div>)).toBe(true)
    });
    it('should render a form with a className: LoginForm', () => {
        expect(shallow(<LoginForm />).exists(<form className='LoginForm'></form>)).toBe(true)
    });
    it('should render a h2', () => {
        expect(shallow(<LoginForm />).exists(<h2></h2>)).toBe(true)
    });
    it('renders form fields', () => {
        const wrapper = shallow(<LoginForm/>);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});


