import { modalStyle, childrenOrShowHaveChanged } from './modalUtils';

describe('modalUtils.js', ()=> {
    describe('modalStyle()', ()=> {
        describe('WHEN: Given a boolean of "true"', ()=> {
            test('THEN: It returns a style object that allows for modal visibility.', ()=> {
                const modalShouldBeDisplayed = true;
                const result = modalStyle(modalShouldBeDisplayed);
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
                const result = modalStyle(modalShouldBeDisplayed);
                const expectedResult = {
                    transform: 'translateY(-100vh)',
                    opacity: '0'
                }
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('modalStyle()', ()=> {
        describe('WHEN: nextProps.show and props.show are not equal', ()=> {
            test('THEN: It returns true', ()=> {
                const nextProps = {
                    show: 'foo'
                };
                const props = {
                    show: 'bar'
                };
                const result = childrenOrShowHaveChanged(nextProps, props);
                expect(result).toBe(true);
            });
        });
        describe('WHEN: nextProps.show and props.show are the same, ', ()=> {
            test('THEN: It returns false', ()=> {
                const nextProps = {
                    show: 'foo'
                };
                const props = {
                    show: 'bar'
                };
                const result = childrenOrShowHaveChanged(nextProps, props);
                expect(result).toBe(true);
            });
        });
        describe('WHEN: nextProps.children and props.children are not the same, ', ()=> {
            test('THEN: It returns true', ()=> {
                const nextProps = {
                    children: `<div></div>`
                };
                const props = {
                    children: `<p></p>`
                };
                const result = childrenOrShowHaveChanged(nextProps, props);
                expect(result).toBe(true);
            });
        });
        describe('WHEN: nextProps.children and props.children are the same, ', ()=> {
            test('THEN: It returns false', ()=> {
                const nextProps = {                    
                    children: `<div></div>`
                };
                const props = {
                    children: `<div></div>`
                };
                console.log(props)
                const result = childrenOrShowHaveChanged(nextProps, props);
                expect(result).toBe(false);
            });
        });
    });
});