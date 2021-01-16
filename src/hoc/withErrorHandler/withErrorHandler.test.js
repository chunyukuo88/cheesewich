import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import withErrorHandler from './withErrorHandler';
import axios from '../../axios-instance';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('withErrorHandler.jsx', ()=>{
    describe('withErrorHandler()', ()=>{
        describe('WHEN: Given a component and an axios instance', ()=>{
            test('THEN: It returns a modal and wrapped component.', () => {
                const toBeWrapped = <div>I should be wrapped</div>;
                jest.mock('../../../src/axios-instance', ()=>{
                    return jest.fn(()=> {});
                });
                const axios = require('../../../src/axios-instance');
                const resultantFunction = withErrorHandler(toBeWrapped, axios);
                const result = new resultantFunction();
                expect(result.state.error).toBe(null);
            });
        });
    });
});
