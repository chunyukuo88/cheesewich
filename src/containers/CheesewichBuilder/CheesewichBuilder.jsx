import React, { Component } from 'react';
import Aux from '../../hoc/auxilliary';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';

class CheesewichBuilder extends Component {
    state = {
        ingredients: {
            bacon: 1,
            cheese: 0,
            meat: 3,
            salad: 0,
        },
    };

    render(){
        return (
            <Aux>
                <Cheesewich ingredients={this.state.ingredients} />
                <div>Control Panel</div>
            </Aux>
        );
    }
}

export default CheesewichBuilder;