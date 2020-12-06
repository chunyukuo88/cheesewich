import React from 'react';
import UserControls, { _getIngredientsDisplay } from './UserControls.jsx';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const props = {
    price: 123
};

describe('UserControls.jsx', ()=>{
    describe('UserControls()', ()=>{
        test('Component renders without crashing.', ()=>{
            
            const wrapper = shallow(<UserControls {...props}/>);
            expect(wrapper.length).toBe(1);
        });
    });
});