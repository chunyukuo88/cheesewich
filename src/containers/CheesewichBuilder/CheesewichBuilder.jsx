import React, { Component } from 'react';
import Aux from '../../hoc/auxilliary';
import { additionFn, removalFn, produceDisabledInfoObject } from './utils';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';


class CheesewichBuilder extends Component {
    state = {
        ingredients: { bacon: 0, cheese: 0, meat: 0, shallots: 0, },
        totalPrice: 2,
    };

    addIngredient = (type) => this.setState(additionFn(this.state, type));

    removeIngredient = (type) => this.setState(removalFn(this.state, type));

    render(){
        const disabledInfo = produceDisabledInfoObject(this.state.ingredients);
        return (
            <Aux>
                <Cheesewich ingredients={this.state.ingredients} />
                <UserControls addIngredient={this.addIngredient} 
                              removeIngredient={this.removeIngredient}
                              disabled={disabledInfo}
                              price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default CheesewichBuilder;