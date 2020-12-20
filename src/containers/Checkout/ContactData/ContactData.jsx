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
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {},
            deliveryMethod: 'fastest',
        };
        axios.post('/orders.json', order)
            .then( res => {
                this.setState({loading: false})
            })
            .catch( err => {
                this.setState({loading: false})
            });
    }

    render(){
        const formElementsArray = createFormElementsArray(this.state);
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact info</h4>
                <form>
                    {formElementsArray.map(el =>  {
                        return <Input key={el.id}
                                      elementType={el.config.elementType}
                                      elementConfig={el.config.elementConfig}
                                      placeholder={el.config.placeholder}
                                      value={el.config.value}/>;
                    })}
                </form>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER!</Button>
            </div>
        );
    }
}

const createFormElementsArray = (state) => {
    console.log('createFormElementsArray()')
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
    return {
        elementType: elementType,
        elementConfig: {
            type: inputType,
            placeholder: placeholder
        },
        value: value
    };
};

const getDeliveryMethodField = () => {
    return {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
            ]
        },
        value: ''
    };
};

export default ContactData;
