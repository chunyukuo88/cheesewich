import { OptionalIngredients } from './OptionalIngredients';
import React from 'react';
import Cheesewich from './Cheesewich.jsx';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
jest.mock('./OptionalIngredients');

beforeEach(()=>{
    OptionalIngredients.mockImplementation(()=>{});
});

const props = { 'meat': 0 };
const setup = () => shallow(<Cheesewich {...props}/>);

describe('Cheesewich.jsx', ()=>{
    test('Renders without crashing.', ()=>{
        const wrapper = setup();
        expect(wrapper.length).toBe(1);
    });
});