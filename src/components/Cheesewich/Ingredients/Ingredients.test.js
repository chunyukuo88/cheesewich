import React from 'react';
import Ingredient from './Ingredients.jsx';
import { findByTestAttr } from '../../../testUtils';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const props = {
    type: 'cheese'
};
const setup = () => shallow(<Ingredient {...props}/>);

describe('Ingredient.jsx', ()=>{
    describe('Ingredient()', ()=>{
        test('Renders without crashing.', ()=>{
            const wrapper = setup();
            expect(wrapper.length).toBe(1);
        });
    });
    describe('_buildIngredientDisplay()', ()=>{
        describe('WHEN: given a valid (string) prop, ', ()=>{
        test('THEN: It returns an ingredient corresponding to that string.', ()=>{
            const wrapper = setup();
            const ingredient = findByTestAttr(wrapper, 'ingredient');
            expect(ingredient.hasClass('cheese')).toBe(true);
        });
    });
});
});