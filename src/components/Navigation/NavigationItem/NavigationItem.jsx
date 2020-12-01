import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = props => (
    <li className={classes.navigation_item}>
        <a href={props.link} className={isActive(props)}>
            {props.children}
        </a>
    </li>
);

export const isActive = (props) => props.active ? classes.active : null;

export default NavigationItem;