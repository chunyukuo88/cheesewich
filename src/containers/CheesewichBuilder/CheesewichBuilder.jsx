import React, { Component } from 'react';
import Aux from '../../hoc/auxilliary';
import { additionFn, removalFn, produceDisabledInfoObject, orderButtonIsDisabled } from './utils';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';


class CheesewichBuilder extends Component {
    state = {
        ingredients: { bacon: 0, cheese: 0, mustard: 0, shallots: 0, },
        totalPrice: 2,
        purchasable: false,
    };

    updatePurchasability = () => this.setState({purchasable: orderButtonIsDisabled(this.state.ingredients)});

    addIngredient = type => {
        this.setState(additionFn(this.state, type));
        this.updatePurchasability();
    }

    removeIngredient = type => {
        this.setState(removalFn(this.state, type));
        this.updatePurchasability();
    } 


    render(){
        const disabledInfo = produceDisabledInfoObject(this.state.ingredients);
        
        return (
            <Aux>
                <Cheesewich ingredients={this.state.ingredients} />
                <UserControls addIngredient={this.addIngredient} 
                              removeIngredient={this.removeIngredient}
                              disabled={disabledInfo}
                              price={this.state.totalPrice}
                              purchasable={this.state.purchasable}/>
            </Aux>
        );
    }
}

export default CheesewichBuilder;