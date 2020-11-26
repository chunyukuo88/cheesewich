import React, { Component } from 'react';
import Aux from '../../hoc/auxilliary';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';

class CheesewichBuilder extends Component {
    state = {
        ingredients: {
            bacon: 1,
            cheese: 2,
            meat: 2,
            salad: 1,
        },
    };

    render(){
        return (
            <Aux>
                <Cheesewich />
                <div>Control Panel</div>
            </Aux>
        );
    }
}

export default CheesewichBuilder;