import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import RegistrationForm from '../../components/authentication/RegistrationForm';

describe('RegistrationForm', () => {
    it('should render a form with a className: RegistrationForm', () => {
        expect(shallow(<RegistrationForm />).exists(<form className='RegistrationForm'></form>)).toBe(true)
    });
    it('renders form fields', () => {
        const wrapper = shallow(<RegistrationForm/>);
        const text = wrapper.find('field').first();        
        const submit = wrapper.find('field').last(); 
    });
});