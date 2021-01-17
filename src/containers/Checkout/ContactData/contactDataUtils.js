import React from 'react';

export const buildInputFieldObject = (placeholder, minLength, maxLength, type) => {
    const result = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: placeholder,
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false,
    };
    if (minLength) result.validation.minLength = minLength;
    if (maxLength) result.validation.maxLength = maxLength;
    if (type) result.elementConfig.type = type;
    return result;
};

export const getDeliveryMethodObject = () => {
    return {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
            ],
        },
        value: 'fastest',
        validation: {},
        valid: true
    };
};
