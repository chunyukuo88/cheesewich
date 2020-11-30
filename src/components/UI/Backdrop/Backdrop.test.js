import React from 'react';
import Backdrop from './Backdrop.jsx';
import classes from './Backdrop.css';

describe('Backdrop.jsx', ()=>{
    describe('Backdrop()', ()=>{
        describe('WHEN: Given a props object containing a boolean value of "true," ', ()=>{
            test('THEN: Return a backdrop element.', ()=>{
                const props = { show: true };
                const result = Backdrop(props);
                const expectedResult = <div className={classes.Backdrop}></div>;
                expect(result).toEqual(expectedResult);
            });
        });
        describe('WHEN: Given a props object containing a boolean value of "false," ', ()=>{
            test('THEN: Return null.', ()=>{
                const props = { show: false };
                const result = Backdrop(props);
                expect(result).toBeNull();
            });
        });
    });
});