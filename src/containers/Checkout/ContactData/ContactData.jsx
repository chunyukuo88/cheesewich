import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input.jsx';

class ContactData extends Component {
    state = {
        orderForm: {
            name: buildOrderFieldObject('input', 'text', 'Your name'),
            street: buildOrderFieldObject('input', 'text', 'Street'),
            zipCode: buildOrderFieldObject('input', 'text', 'ZIP code'),
            email: buildOrderFieldObject('input', 'email', 'Your email'),
            deliveryMethod: getDeliveryMethodField(),
        },
        formIsValid: false,
        loading: false,
    }

    orderHandler = (event) => {
        //TODO: Figure out how to extract the setState method.
        event.preventDefault();
        this.setState({ loading: true});
        const formData = {};
        for (const formElementId in this.state.orderForm){
            formData[formElementId] = this.state.orderForm[formElementId].value;
        };
        this.setState({ loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
        };
        axios.post('/orders.json', order)
            .then( res => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch( err => {
                this.setState({loading: false})
            });
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        if (updatedFormElement !== updatedOrderForm.deliveryMethod) {
            updatedOrderForm.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
            console.log(`${updatedFormElement.value}: ${updatedOrderForm.valid}`)
        }
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (const inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        console.log(updatedOrderForm)
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render(){
        const formElementsArray = createFormElementsArray(this.state);
        return (
            <form className={classes.ContactData} onSubmit={this.orderHandler}>
                {formElementsArray.map(el =>  {
                    return <Input key={el.id}
                                  elementType={el.config.elementType}
                                  elementConfig={el.config.elementConfig}
                                  placeholder={el.config.placeholder}
                                  value={el.config.value}
                                  shouldValidate={el.config.validation}
                                  invalid={!el.config.valid} //Note the exclamation mark
                                  touched={el.config.touched}
                                  changed={(event)=>this.inputChangedHandler(event, el.id)}/>;
                })}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER!</Button>
            </form>
        );
    }
}

const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) return true;
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }
    return isValid;
};

const buildContent = (formElementsArray, inputChangedHandler) => {
    return formElementsArray.map(el =>  {
            return <Input key={el.id}
                          elementType={el.config.elementType}
                          elementConfig={el.config.elementConfig}
                          placeholder={el.config.placeholder}
                          value={el.config.value}
                          shouldValidate={el.config.validation}
                          invalid={!el.config.valid} //Note the exclamation mark
                          touched={el.config.touched}
                          changed={(event)=>inputChangedHandler(event, el.id)}/>;
        });
};

const createFormElementsArray = (state) => {
    const formElementsArray = [];
    for (let key in state.orderForm) {
        formElementsArray.push({
            id: key,
            config: state.orderForm[key]
        });
    };
    return formElementsArray;
};

const buildOrderFieldObject = (elementType, inputType, placeholder, value = '') => {
    const result = {
        elementType: elementType,
        elementConfig: {
            type: inputType,
            placeholder: placeholder
        },
        value: value,
        validation: {
            required: true,
            minLength: 1,
            maxLength: 10,
        },
        valid: false,
        touched: false,
    };
    return result;
};

const getDeliveryMethodField = () => {
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
        valid: true,
    };
};

export default ContactData;
