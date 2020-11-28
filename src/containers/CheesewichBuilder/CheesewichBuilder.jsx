import React, { Component } from 'react';
import Aux from '../../hoc/auxilliary';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';

const INGREDIENT_PRICES = {
    bacon: 0.5,
    cheese: 0.4,
    meat: 1.3,
    shallots: 0.7,
}

class CheesewichBuilder extends Component {
    state = {
        ingredients: { bacon: 0, cheese: 0, meat: 0, shallots: 0, },
        totalPrice: 2,
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
        });    
    };

    removeIngredient = (type) => this.setState(removalFn(this.state, type));

    render(){
        const disabledInfo = produceDisabledInfoObject(this.state.ingredients);
        return (
            <Aux>
                <Cheesewich ingredients={this.state.ingredients} />
                <UserControls addIngredient={this.addIngredient} 
                              removeIngredient={this.removeIngredient}
                              disabled={disabledInfo}/>
            </Aux>
        );
    }
}

const removalFn = (stateObject, type, stateSetterFn) => {
    const oldCount = stateObject.ingredients[type];
    console.log('=== oldCount: ', oldCount);
    if (oldCount === 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...stateObject.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const subtractionFromTotalPrice = INGREDIENT_PRICES[type];
    const oldPrice = stateObject.totalPrice;
    const newPrice = oldPrice + subtractionFromTotalPrice;
    return {
        ingredients: updatedIngredients,
        totalPrice: newPrice
    };
}

const produceDisabledInfoObject = (ingredientQuantityObject) => {
    const disabledInfo = {...ingredientQuantityObject};
    for (const key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return disabledInfo;
}

export default CheesewichBuilder;