import { _modalStyle } from './modalUtils';

describe('modalUtils.js', ()=> {
    describe('_modalStyle()', ()=> {
        describe('WHEN: Given a boolean of "true"', ()=> {
            test('THEN: It returns a style object that allows for modal visibility.', ()=> {
                const modalShouldBeDisplayed = true;
                const result = _modalStyle(modalShouldBeDisplayed);
                const expectedResult = {
                    transform: 'translateY(0)',
                    opacity: '1'
                }
                expect(result).toEqual(expectedResult);
            });
        });
        describe('WHEN: Given a boolean of "false"', ()=> {
            test('THEN: It returns a style object that hides the modal.', ()=> {
                const modalShouldBeDisplayed = false;
                const result = _modalStyle(modalShouldBeDisplayed);
                const expectedResult = {
                    transform: 'translateY(-100vh)',
                    opacity: '0'
                }
                expect(result).toEqual(expectedResult);
            });
        });

    });
});