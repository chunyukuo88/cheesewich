import React from 'react';
//TODO: import the logo
import NavItems from '../NavItems/NavItems.jsx';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop.jsx';
import Aux from '../../../hoc/auxilliary.js';

const SideDrawer = props => {
    // let attachedClasses = [classes.side_drawer, classes.closed];
    // if (props.open) {
    //     attachedClasses = [classes.side_drawer, classes.open];
    // }
    const attachedClasses = getClasses(props);
    
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                {/* Logo */}
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    );
}

export const getClasses = (props) => {
    return props.open 
        ? [classes.side_drawer, classes.open]
        : [classes.side_drawer, classes.closed];
};


export default SideDrawer;