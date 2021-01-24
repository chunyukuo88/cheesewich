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
        test('It can return crunchybits.', ()=>{
            props.type = 'crunchybits';
            const wrapper = shallow(<Ingredient {...props}/>);
            expect(wrapper.length).toBe(1);
        });
        test('It can return olives.', ()=>{
            props.type = 'olives';
            const wrapper = shallow(<Ingredient {...props}/>);
            expect(wrapper.length).toBe(1);
        });
        test('It can return marinara.', ()=>{
            props.type = 'marinara';
            const wrapper = shallow(<Ingredient {...props}/>);
            expect(wrapper.length).toBe(1);
        });
        test('When given a weird ingredient, does not crash.', ()=>{
            props.type = 'garbage';
            const wrapper = shallow(<Ingredient {...props}/>);
            expect(wrapper.length).toBe(1);
        });
    });
});
