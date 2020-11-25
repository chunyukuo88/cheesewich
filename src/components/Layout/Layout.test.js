import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../src/testUtils';
import Layout from './Layout';

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