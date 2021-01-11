import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import NavItems from './NavItems.jsx';
import NavigationItem from "../NavigationItem/NavigationItem";

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('NavItems.jsx', ()=>{
    let wrapper;
    const props = {};
    beforeEach(()=>{
        wrapper = shallow(<NavItems />);
    });
    describe('NavItems() renders,', ()=>{
        test('Component renders without crashing', ()=>{
            expect(wrapper.length).toBe(1);
        });
    });
    describe('WHEN: User is NOT authenticated,', ()=>{
        test('Component has two navigation items', ()=>{
            const children = wrapper.children();
            expect(children.length).toEqual(2);
        });
    });
    describe('WHEN: User is authenticated,', ()=>{
        const wrapper = shallow(<NavItems isAuthenticated/>);
        test('User three navigation items to choose from (builder, orders, sign out)', ()=>{
            const children = wrapper.children();
            expect(children.length).toEqual(3);
        });
        test('AND: User is given the option to sign out.', ()=>{
            const expectedContent = (
                <NavigationItem link="/logout">
                    Sign out
                </NavigationItem>
            );
            expect(wrapper.contains(expectedContent)).toBeTruthy();
        });
    });
});
