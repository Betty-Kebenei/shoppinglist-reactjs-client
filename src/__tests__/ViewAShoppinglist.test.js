import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { ViewAShoppinglist } from '../components/shoppinglist/ViewAShoppinglist';

describe('ViewAShoppinglist', () => {
    it('renders ViewAShoppinglist component', () => {
        shallow(<ViewAShoppinglist />)
      })
});