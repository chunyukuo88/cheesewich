import checkPropTypes from 'check-prop-types';

/**
* Return nodes with the given dat-test attribute.
 * @param {ShallowWrapper} wrapper - An Enzyme shallow wrapper.
 * @param {string} value = Value of the data-test attribute for search.
 * @returns {ShallowWrapper}
* */

export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
  };
  
export const checkProps = (component, conformingProps) => {
const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
expect(propError).toBeUndefined();
};