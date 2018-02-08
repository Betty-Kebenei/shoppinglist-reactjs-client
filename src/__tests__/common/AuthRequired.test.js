import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import ComposedComponent from '../../components/common/AuthRequired';

describe('AuthRequired', () => {
    it('renders HOC component', () => {
        mount(<ComposedComponent />)
    });
});