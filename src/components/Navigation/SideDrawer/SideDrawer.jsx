import React from 'react';
//TODO: import the logo
import classes from './SideDrawer.css';
import Aux from '../../../hoc/auxilliary.js';
import Backdrop from '../../UI/Backdrop/Backdrop.jsx';
import NavItems from '../NavItems/NavItems.jsx';



const SideDrawer = props => (
    <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={getClasses(props).join(' ')} onClick={props.closed}>
            {/* Logo */}
            <nav>
                <NavItems isAuthenticated={props.isAuth} />
            </nav>
        </div>
    </Aux>
);

export const getClasses = (props) => {
    return props.open
        ? [classes.side_drawer, classes.open]
        : [classes.side_drawer, classes.closed];
};

export default SideDrawer;
