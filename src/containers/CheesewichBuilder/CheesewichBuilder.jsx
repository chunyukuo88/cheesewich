import React, { Component } from 'react';
import Aux from '../../hoc/auxilliary';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';


class CheesewichBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            cheese: 1,
            meat: 0,
            salad: 0,
        },
    };

    render(){
        return (
            <Aux>
                <Cheesewich ingredients={this.state.ingredients} />
                <UserControls />
            </Aux>
        );
    }
}

export default CheesewichBuilder;