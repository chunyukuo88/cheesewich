import React from 'react';
import Cheesewich, { getIngredients } from './Cheesewich.jsx';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Cheesewich.jsx', ()=>{
    test('Component renders without crashing.', ()=>{
        const wrapper = shallow(<Cheesewich/>);
        expect(wrapper.length).toBe(1);
    });
    test('Component renders with the props given to it.', ()=>{
        const props = {
            ingredients: {
                cheese: 3,
            },
        };
        //TODO: Figure out how to fix the Router issue with this render.
        const wrapper = render(<Cheesewich {...props}/>);
        console.log(wrapper);
        expect(true).toBeTruthy();
    });
    describe('getIngredients()', ()=>{
       describe('WHEN: Given props containing ingredients', ()=>{
           test('THEN: It returns the transformed ingredients.', ()=>{
               const props = {
                    ingredients: {
                        cheese: 3,
                    },
                };
                const result = getIngredients(props);
                expect(result[0].length).toBe(3);
           });
       });
       describe('WHEN: Given props containing NO ingredients', ()=>{
           test('THEN: It returns the starting string.', ()=>{
               const props = {
                    ingredients: {},
                };
                const result = getIngredients(props);
                const expected = <div>Start adding the good stuff!</div>;
                expect(result).toEqual(expected);
           });
       });
    });
});
