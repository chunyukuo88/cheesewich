import React from 'react';
import { findByTestAttr } from '../../../testUtils.js';
import Ingredient from './Ingredients.jsx';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const props = {
    type: 'cheese'
};

describe('Ingredient.jsx', ()=>{
    describe('Ingredient()', ()=>{
        test('Renders without crashing.', ()=>{
            const wrapper = shallow(<Ingredient {...props}/>);
            expect(wrapper.length).toBe(1);
        });
    });
    describe('_buildIngredientDisplay()', ()=>{
        describe('WHEN: given a valid (string) prop, ', ()=>{
        test('THEN: It returns an ingredient corresponding to that string.', ()=>{
            const wrapper = render(<Ingredient {...props}/>);
            const cheese = <div className="cheese"/>;
            expect(wrapper).toEqual(cheese);
        });
    });
});
});