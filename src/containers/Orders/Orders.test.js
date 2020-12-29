import React from 'react';
import Orders from './Orders.jsx';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import axios from '../../axios-orders';
import moxios from 'moxios';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Orders.js', ()=>{
    describe('Orders()', ()=>{
        test('It renders without crashing', ()=>{
            const wrapper = shallow(<Orders/>);
            expect(wrapper.length).toEqual(1);
        });
        describe('It renders with the relevant props given to it', ()=>{
            beforeEach(()=> {
                moxios.install();
            })
            afterEach(()=>{
                moxios.uninstall();
            })
            const wrapper = shallow(<Orders/>);
            expect(wrapper.length).toEqual(1);
        });
    });
});
