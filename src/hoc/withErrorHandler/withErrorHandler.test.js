import { showError } from './withErrorHandlerUtils';

describe('withErrorHandlerUtils.js', () =>{
    describe('showError()', () =>{
        describe('WHEN: Given an error object, ', ()=>{
           test('THEN: It returns the message of that object.', ()=>{
                const errorObject = {
                    error: {
                        message: 'test',
                    },
                };
                const result = showError(errorObject);
                console.log(result);
                expect(result).toBe('test');
           });
        });
        describe('WHEN: Given an empty errorObject, ', ()=>{
           test('THEN: It returns nulls.', ()=>{
                const errorObject = {};
                const result = showError(errorObject);
                expect(result).toBeNull();
           });
        });
    });
});