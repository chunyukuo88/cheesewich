import React, { Component } from 'react';
import Aux from '../../hoc/auxilliary';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';

const INGREDIENT_PRICES = {
    bacon: 0.5,
    cheese: 0.4,
    meat: 1.3,
    salad: 0.7,
}

class CheesewichBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            cheese: 1,
            meat: 0,
            salad: 0,
        },
        totalPrice: 2
    };

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const additionToTotalPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + additionToTotalPrice;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })        
    };
    removeIngredient = (type) => {};

    render(){
        return (
            <Aux>
                <Cheesewich ingredients={this.state.ingredients} />
                <UserControls addIngredient={this.addIngredient} />
            </Aux>
        );
    }
}

export default CheesewichBuilder;