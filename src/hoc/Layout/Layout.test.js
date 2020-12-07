import React from 'react';
import Layout from './Layout';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
<<<<<<< HEAD:src/hoc/Layout/Layout.test.js
import { findByTestAttr } from '../../testUtils';
=======
import { findByTestAttr } from '../../../src/utils/testUtils';
>>>>>>> c73544bb0ece01c6ffdbbb7d4f24869636339b59:src/components/Layout/Layout.test.js
Enzyme.configure({ adapter: new Adapter() });

const setup = () => shallow(<Layout/>);

describe('Layout.js', ()=>{
    test('The Layout component rendered renders without error.', ()=>{
        const wrapper = setup();
        expect(wrapper.length).toBe(1);
    });
    test('The overview text is rendered.', ()=>{
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'layout-overview');
        expect(component.length).toBe(1);
    });
});
