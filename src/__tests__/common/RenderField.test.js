import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import RenderField from '../../components/common/RenderField';

describe('RenderField', () => {
    it('renders RenderField component', () => {
        shallow(<RenderField />)
    });
});
