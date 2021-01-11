/**
 * Note that CheesewichBuilder can be a default import or a named import.
 * Here, it is is a named import so as to not be connected to the global store.
 * */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CheesewichBuilder } from './CheesewichBuilder';
import UserControls from '../../components/Cheesewich/UserControls/UserControls';

Enzyme.configure({ adapter: new Adapter() });

describe('CheesewichBuilder()', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<CheesewichBuilder onInitIngredients={jest.fn()}/>);
    });
    describe('WHEN: Given ingredients,', ()=>{
        test('THEN: It renders the UserControls.', ()=>{
            const props = {
                ings: {
                    bacon: 0
                },
            };
            wrapper.setProps(props);
            const expectedUserControls = wrapper.find(UserControls);
            expect(expectedUserControls).toHaveLength(1);
        });
    });
    describe('WHEN: NOT given ingredients', ()=>{
        test('THEN: It DOES NOT render the UserControls.', ()=>{
            wrapper.setProps({ ings: null });
            const expectedUserControls = wrapper.find(UserControls);
            expect(expectedUserControls).toHaveLength(0);
        });
    });
});
