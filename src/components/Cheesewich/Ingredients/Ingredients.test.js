import React from 'react';
import Ingredient, { _buildIngredientDisplay } from './Ingredients.jsx';
import Enzyme, { shallow } from 'enzyme';
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
        describe('WHEN: given a valid string, ', ()=>{
            test('THEN: It returns an ingredient corresponding to that string.', ()=>{
                const ingredient = 'cheese';
                const result = _buildIngredientDisplay(ingredient);
                const cheese = <div className="cheese"/>;
                expect(result).toEqual(cheese);
            });
        });
        describe('WHEN: Given nothing, ', ()=>{
            test('THEN: It returns null.', ()=>{
                const result = _buildIngredientDisplay();
                expect(result).toBeNull();
            });
        });
    });
});